const id = "UCAuUUnT6oDeKwE6v1NGQxug"; // for TED channel
// const apiKey = "AIzaSyCzhUw_r9frrlFG6IzuT7jjHFTXBXN0bCc";
const apiKey = "AIzaSyCXNyb5ZjGAXcL1jC7v81nTaC3fCiF5Q8U";

// the below url was used to get the playlistId in the uploads object
const urlToFetchPlaylistIdForAGivenChannel = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${id}&key=${apiKey}`;
const playlistId = "UUAuUUnT6oDeKwE6v1NGQxug";
// get playlists in the TED channel
const urlToFetchPlaylists = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=5&playlistId=${playlistId}&key=${apiKey}`;

function getTedTalkTitle() {
    // let url = urlToFetchPlaylists;
    // fetch(url)
    //     .then(res => res.json())
    //     .then(res => {
            // let titleForFirstTEDTalkRetrieved = res.items[1].snippet.title;
            // if (res == undefined) {
              let  titleForFirstTEDTalkRetrieved = 'Crisis support for the world, one text away | Nancy Lublin';
            // }

            // let imageUrl = res.items[1].snippet.thumbnails.medium.url;
            // if (res == undefined) {
              let imageUrl = 'https://i.ytimg.com/vi/TntLjM_uBT0/maxresdefault.jpg';
            // }
            document.querySelector('#title-of-ted-talk').innerHTML = titleForFirstTEDTalkRetrieved;
            document.querySelector('img[src=""]').src = imageUrl;

            let videoIdForFirstTEDTalkRetrieved = 'TntLjM_uBT0';
            let linkToThisTEDTalk = `https://www.youtube.com/watch?v=${videoIdForFirstTEDTalkRetrieved}`;
            document.querySelector('a[href="https://www.ted.com"]').href = linkToThisTEDTalk;
            // console.log(res);
            // console.log(res.items[0].snippet.thumbnails.medium.url);
        // })
};

getTedTalkTitle();