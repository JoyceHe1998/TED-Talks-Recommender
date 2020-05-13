const id = "UCAuUUnT6oDeKwE6v1NGQxug"; // for TED channel
const apiKey = "AIzaSyBsfn_PrbOgSlECC2vZKQvCkLgeVh9HGm8";

// the below url was used to get the playlistId in the uploads object
// const urlToFetchPlaylistIdForAGivenChannel = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${id}&key=${apiKey}`;
const playlistId = "UUAuUUnT6oDeKwE6v1NGQxug";
// get playlists in the TED channel
const urlToFetchPlaylists = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${apiKey}`;

function getTedTalkTitle() {
    fetch(urlToFetchPlaylists)
        .then(res => res.json())
        .then(res => {
            let titleForFirstTEDTalkRetrieved = res.items[0].snippet.title;
            let videoIdForFirstTEDTalkRetrieved = res.items[0].snippet.resourceId.videoId;
            document.querySelector('#ted-talk-title').innerHTML = titleForFirstTEDTalkRetrieved;
            
            let linkToThisTEDTalk = `https://www.youtube.com/watch?v=${videoIdForFirstTEDTalkRetrieved}`;
            document.querySelector('a[href="https://www.ted.com"]').href = linkToThisTEDTalk;

            // console.log(res);
        })
}

getTedTalkTitle();