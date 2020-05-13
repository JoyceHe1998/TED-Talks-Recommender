// const id = "UCAuUUnT6oDeKwE6v1NGQxug"; // for TED channel
// const apiKey = "AIzaSyBsfn_PrbOgSlECC2vZKQvCkLgeVh9HGm8";

// // the below url was used to get the playlistId in the uploads object
// const urlToFetchPlaylistId = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${id}&key=${apiKey}`;

// function fetchPlaylistId() {
//     fetch(urlToFetchPlaylistId)
//         .then(res => console.log(res))
// }

// fetchPlaylistId();

// const playlistId = "UUAuUUnT6oDeKwE6v1NGQxug";
// // get playlists in the TED channel
// const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${apiKey}`;

// function getTedTalkTitle() {
//     fetch(url)
//         .then(res => console.log(res))
//     // .then(res => res.json())
//     // .then(res => {
//     //     let titleForFirstTEDTalkRetrieved = res.items[0].snippet.title;
//     //     document.querySelector('#ted-talk-title').innerHTML = titleForFirstTEDTalkRetrieved;
//     //     console.log(titleForFirstTEDTalkRetrieved);
//     //     console.log(res);
//     // })
// }

// getTedTalkTitle();