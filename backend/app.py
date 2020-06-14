from flask import Flask, jsonify, url_for, send_file
from flask_cors import CORS, cross_origin

import numpy as np
import pandas as pd
import os
import json
import base64
import matplotlib.pyplot as plt
from pathlib import Path
from wordcloud import WordCloud

from sklearn.cluster import KMeans
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.decomposition import PCA
from sklearn.manifold import TSNE

app = Flask(__name__)

number_of_clusters = 9

def get_all_file_paths(directory): 
    file_paths = [] 
    for root, _, files in os.walk(directory): 
        for filename in files: 
            filepath = os.path.join(root, filename) 
            file_paths.append(filepath) 
    return file_paths    

@app.route('/get_clusters_and_wordcloud', methods=["GET"])
def get_wordclouds_images_and_table():
    data = cluster_ted_talks_by_tags() # data frame
    data_to_json = json.loads(data.to_json(orient='records'))
    directory = './wordCloudImages'
    file_paths = get_all_file_paths(directory) 
    encoded_strings = []
    i = 0
    for file_name in file_paths: 
        with open(file_name, 'rb') as image_file:
            encoded_string = base64.b64encode(image_file.read()).decode("utf-8")
            encoded_strings.append({'cluster{}'.format(i): '{}'.format(encoded_string)})
        i = i + 1
    return jsonify(wordCloudImages = encoded_strings, table = data_to_json)

# def get_random_ted_talk():

def generate_cluster_wordclouds(data, clusters, labels, n_terms):
    df = pd.DataFrame(data.todense()).groupby(clusters).mean()
    colormaps = ['Reds', 'Purples', 'Blues', 'Greens', 'Oranges', 'Greys', 'GnBu', 'RdPu', 'BuPu']
    for i,r in df.iterrows():
        words = ','.join([labels[t] for t in np.argsort(r)[-n_terms:]])
        wordcloud = WordCloud(max_font_size=70, width=640, height=480, collocations=False, background_color='white', colormap=colormaps[i]).generate(words) # colormap='Reds',
        plt.figure()
        plt.imshow(wordcloud)
        plt.axis('off')
        plt.savefig('./wordCloudImages/Cluster{}.png'.format(i))
        plt.clf()
    return

def cluster_ted_talks_by_tags():
    tedData_dir = os.path.abspath('../tedData.json')
    data = pd.read_json(tedData_dir)
    tfidf = TfidfVectorizer(
        min_df = 5,
        max_df = 0.95,
        max_features = None,
        stop_words = 'english'
    )
    tfidf.fit(data.tags)
    text = tfidf.transform(data.tags)
    clusters = KMeans(n_clusters=number_of_clusters).fit_predict(text)
    data['cluster'] = clusters
    data = data.sort_values('cluster')
    generate_cluster_wordclouds(text, clusters, tfidf.get_feature_names(), 15)
    return data

if __name__ == '__main__':
    app.run(debug=True)
