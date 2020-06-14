const id = "UCAuUUnT6oDeKwE6v1NGQxug"; // for TED channel
// const apiKey = "AIzaSyCzhUw_r9frrlFG6IzuT7jjHFTXBXN0bCc";
const apiKey = 'AIzaSyArBq3nRRIproCPDpF7tYL6MMGi7cNO3SE';

// the below url was used to get the playlistId in the uploads object
const urlToFetchPlaylistIdForAGivenChannel = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${id}&key=${apiKey}`;
const playlistId = "UUAuUUnT6oDeKwE6v1NGQxug";

// find nextPageToken: res.nextPageToken
const nextPageToken = 'CNgEEAA'; //  CDIQAA CGQQAA CJYBEAA CMgBEAA CPoBEAA CKwCEAA CN4CEAA CJADEAA CMIDEAA CPQDEAA CKYEEAA CNgEEAA CIoFEAA

// get playlists in the TED channel
const urlToFetchPlaylists = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=50&playlistId=${playlistId}&key=${apiKey}&pageToken=${nextPageToken}`;

function getTedTalkTitle() {
    // let url = urlToFetchPlaylists;
    // fetch(url)
    //     .then(res => res.json())
    //     .then(res => {
            // let titleForFirstTEDTalkRetrieved = res.items[3].snippet.title;
            // if (res == undefined) {
            let titleForFirstTEDTalkRetrieved = 'Crisis support for the world, one text away | Nancy Lublin';
            // }

            // let imageUrl = res.items[3].snippet.thumbnails.medium.url;
            // if (res == undefined) {
            let imageUrl = 'https://i.ytimg.com/vi/TntLjM_uBT0/maxresdefault.jpg';
            // }
            document.querySelector('#title-of-ted-talk').innerHTML = titleForFirstTEDTalkRetrieved;
            document.querySelector('img[src=""]').src = imageUrl;

            let videoIdForFirstTEDTalkRetrieved = 'TntLjM_uBT0';
            let linkToThisTEDTalk = `https://www.youtube.com/watch?v=${videoIdForFirstTEDTalkRetrieved}`;
            document.querySelector('a[href="https://www.ted.com"]').href = linkToThisTEDTalk;

            // console.log("hello there");
            // console.log(res);
            // console.log(res.items[0].snippet.thumbnails.medium.url);


        //     let videoIdsFetched = [];
        //     res.items.map(item => videoIdsFetched.push(item.contentDetails.videoId));
        //     console.log(videoIdsFetched);
        // })
};

getTedTalkTitle();

function getClustersAndWordCloud() {
    fetch('http://localhost:5000/get_clusters_and_wordcloud')
        .then(res => res.json())
        .then(res => {
            console.log(res)

            var wordCloudContainer = document.getElementById('wordclouds-container');
            var wordClouds = res.wordCloudImages;
            for (var i=0; i<wordClouds.length; i++) {
                var wordcloud = document.createElement('img'); 
                wordcloud.src = 'data:image/png;base64, ' + wordClouds[i]['cluster' + i];
                wordcloud.width = 550;
                wordCloudContainer.appendChild(wordcloud);
            }

            var tedTalksForEachClusterContainer = document.getElementById('ted-talks-of-each-cluster-container');
            for (var j=0; j<20; j++) {
                var tedTalkContainer = document.createElement('div');
                tedTalkContainer.className = 'img-title-container'; 
                
                var tedTalkTitle = document.createElement('div'); 
                tedTalkTitle.className = 'title-of-ted-talk';
                tedTalkTitle.innerHTML = res.table[j]['title'];

                var tedTalkImage = document.createElement('img'); 
                tedTalkImage.src = 'https://i.ytimg.com/vi/' + res.table[j]['id'] + '/maxresdefault.jpg';
                tedTalkImage.width = 550;

                tedTalkContainer.appendChild(tedTalkTitle);
                tedTalkContainer.appendChild(tedTalkImage);
                tedTalksForEachClusterContainer.appendChild(tedTalkContainer);
            }
        })
}

getClustersAndWordCloud();

// // TODO: "" -> '' for title!!!
// function getTags() {
//     // let tags_first50 = ["UfWh3OHYbEM", "TntLjM_uBT0", "8bj0GR34XWc", "bNmRr-BYnxA", "zpn6MCmoK0g", "FVUkKKc3Vvk", "YgAuFqEs6yk", "sNQfoYm3WI0", "JWRqI2ZRHWQ", "eaCrsBtiYA4", "OMDVTZ-ycaY", "ldKtWp7jlHI", "f0jETLKTW7w", "yrxYhv2O3wU", "CBSkV8sgUQ0", "ppjXgm4t9ko", "wGGmzeCT8gU", "2g8BeujckJY", "qWwEoD68gwQ", "f4xu7w6Vf0U", "oNBvC25bxQU", "bW941OpsnMM", "GFpciGYBELo", "kmbui1xF8DE", "y4vurv9usYA", "CoQuaDKV3xk", "wvJTbegktKc", "IyuiVTsIctg", "quDwQ7W9eKc", "i_1_J-T-XYQ", "KIh2-S2jXls", "LfcKh-ZeY20", "z3d_UsYgt1c", "y3emv9DIEkE", "Xe8fIjxicoo", "n3voAR06sNI", "Xgyh0juINNI", "Mm-_QZ_tf0s", "Ir7wCAQINqw", "W2y7osVtIX8", "9Ruc0Jfno2w", "O97OSp3yUDg", "Bb7kz1THJPU", "uRQEC7DiPtI", "CVPl8jRaAqM", "hn8N8p9P5gw", "zY2ksORCLbs", "kXGuWtR5ulg", "b4qVI780Jgw", "JGTtGCq9grE"];
//     // let tags_51_100 = ["slzuVj5YEms", "JJZ8z_nTCZQ", "yIs_zfHF8Cg", "I6xuJu7gLe0", "KGPjwFw6JaQ", "Fu1Zi1PYqos", "y8ohTeRKVqs", "tT8icNhydtg", "f8c3TzQtD4k", "bUqur6hZvKg", "f52LJJFBCLc", "xzWFrHHTrs8", "5ghYJlahAWQ", "kn-5H9p24oo", "XZBZ5aBEUrs", "IfOqyuxb5S0", "KQ_sO9V0tyw", "MS7x_TJfGcE", "iwUkbi4_wWo", "rfA1ThekjGM", "utiLrnvawQQ", "SEr-Lcue5P4", "_0J10j46-qQ", "0B543Zkqq88", "WSY-GFkyTV0", "o-W_KgZhG_A", "oXeAWdHP0uY", "gnbVwu04oiA", "GX9woZi0HUY", "Zfneete-ZHY", "PNLwMSvPurc", "XPDHY-jOQYA", "on0B0iCovOo", "EtZQT3avFaY", "sBQv41YbdCk", "bCucggordMM", "sSOBk0v0viM", "cTIUiN6inIQ", "s0H1jxF5TWQ", "wtl5UrrgU8c", "_8vLkIj_Lsk", "Dvhu2OK7ffg", "06wDth_nvEg", "uTfaua3X0RU", "E616tdjsrZ0", "1-_pzQqo7c0", "ZkdJGcffe9I", "PFFbXhEcYTM", "eZ5MM28abKo", "2KMk1lJGPlk"]
//     // let tags_101_149 = ["aJgXcVkZNG8", "6pSMgmL7vF0", "6Gw5dK48MtI", "1GjinnLB86A", "Z7NUaAGmg44", "BrnZMrjsf6w", "eAKzT6_ES8w", "i5vZkaUk528", "BTB_HPL2r88", "z9jXW9r1xr8", "tSciinXdGhI", "ysRvYxznrq4", "bGUVQaBdxKw", "-3y6_7_5PcQ", "ygxh6KR4BPk", "KzIp4IzDPG0", "13zN4-MVM9g", "eeVCz-9SUc8", "7pMhqyteR5g", "8NSQYO2es3U", "u2bQSKvZ2qI", "kaU7IPlg9PA", "xnfEBUI_YTE", "ir5yzW0yIk0", "Eup2J0oAq9Y", "LQMLFryA_7k", "3lVNA4aF1lg", "wRG5_-9eE4w", "yfLp_vueUxY", "uwKS1lT_YZU", "JJyeKiT8g4g", "bHgfcA6Vy24", "fc3c3OrpKSI", "JrjjOGI6YB4", "VasJyDmMafA", "-7ORAKULel4", "s7QPgarhiWg", "-KKSUR5SBLc", "opdCfb8cCFw", "ssR-RguvjHo", "9zC2Bc22QfA", "NUFEBioLPf8", "uXrCeiQxWyc", "yyVMZHjaY40", "1LX6rCIZaIU", "CbnQtb9LUY4", "gQ-0oR3C1UM", "4zLmWpMDY8Q", "oMBVxhO57JE"];
//     // let tags_150_199 = ["mAnFBEokfrw", "4tSI_LPD8Vo", "Sek29hwUjZE", "PmY1Dr2iQ_Q", "q-GXV4Fd1oA", "ZkwqZfvbdFw", "lSPxeA6Z_m4", "2UZKME9WP9M", "PXB3-yVGHcI", "Cvl2tHwuvzk", "PI5V1-IFvlI", "w8mToWb9NC8", "tPBFVIxnbDw", "qNTf3Zu-oZk", "Depn_GsxSqo", "OfCLTQhW9GQ", "2GhJ6CTDEoM", "DhnBn_c9f8Q", "I3BJVaioX_k", "BDC2hZn9h1A", "oD8Ggp0YsWM", "bWA1gvA5lxU", "fFJeTy1_8Ng", "sf3adAPotrM", "8UNCvk9YXOo", "TLZ6W-Nqv1I", "O_MQr4lHm0c", "kdAs3UVgIGg", "NjwvaF3P_5Q", "kmNejqbx1M0", "nbYA5pPzfCw", "E4FrxvHJlKw", "77HUdJ7Tij0", "17D5SrgBE6g", "9_H9wtQi7mg", "3iD4HwJ-67Q", "u08T3A7slkE", "IGJt7QmtUOk", "OhCzX0iLnOc", "1pky-86YSrI", "9alL95G293s", "3-mhddgkaJc", "uFt-q8HgYpI", "c2QuXJPY9Wc", "aolOWJTLGGA", "JCL4lsW6CUY", "Efv5IeMlo4Y", "6S3KTtcO5YI", "fh5KLfd9Km8", "0f4wtD8eXNk"];
//     // let tags_200_249 = ["25s8BCsSWuk", "TSDOXxlT0U0", "I5g9-4fx60A", "9KvZy09vaNg", "jzrcRcEBrmA", "86AGPVir1g4", "idfv7Lw4Y_s", "P7vnspDNx7g", "jltYcaQ24q4", "-akXMtIhPIo", "n3ZbjsS4TCc", "6Wl0yjC459k", "pR83Woy0zDs", "lEjegKJwI0M", "fwvbx80QidM", "uU2L5nTSHtc", "P_Z5MhlprRE", "YR-sgN4QqW8", "SF9qq6vQ3Pg", "tuvxXnQrRv8", "GIrfNWed1Mk", "Q6SY2nz5PJs", "Rjre6diN35A", "949yOxz_x80", "MB5IX-np5fE", "oH-pbEqdJTQ", "MIGtyaVb2Xc", "wzjVT07bcYA", "MMzNxiB7NRc", "th3KE_H27bs", "XZ65W5ZxapA", "HzAtOyw6ACw", "pg5WtBjox-Y", "mwoLhdHRt_0", "7qWvVcBZzRg", "t0Cr64zCc38", "Ie9cACQnqew", "2ix8JEqCJ1s", "PrUA8L40Dic", "FhP0AfZdRZ4", "C-bcjsXkG1Q", "9A7_xCrgX1U", "mLzTo-y8Ef0", "byAogVoMViE", "E0KLmBMSjDk", "6SZHUHkMYr4", "-IlDkCEvsYw", "dsJWs6Z6eNs", "pY5UdMh6WJg", "Zd_Lbg9jroU"];
//     // let tags_250_299 = ["pj-WqrFZZmg", "Doqr0HdMXOI", "3VTsIju1dLI", "dkS_CgVZ8Ts", "UuskKfv2zxI", "w4OPtFCs_fw", "flb_S5JJC4k", "n0urFzhWTZ4", "gJzSWacrkKo", "xDKth-qS8Jk", "Juc_yvEkJuc", "ysblroPCgCw", "Kv0Xz0lMKDQ", "Kc6hkHGHQQc", "PUW89NpDYJw", "XOySX6sE_8s", "EtzumV-GwOQ", "hU-aTB-heU0", "2IFa0tqHrwE", "xgW-0egOWVg", "JKS7HWy2TRU", "xlLXXdU0FBk", "DTIjvPLkJgo", "Q9XD8yRPxc8", "Rp_HEnOWEso", "xJM_CQN8-ns", "L1VT0asH5Ck", "Ta8KBJ4BTNg", "ORW5MNCv_LU", "5cWkKwGUt3g", "gi6rMXu_veE", "R9XKRR7aKHI", "h-TIRIxhq6E", "zELJMIQawys", "OQuwz64qsBM", "54ST8bwOVyc", "Stt4iGMiHiI", "oBdzOIzwtng", "m5HQamrXlSY", "8DDgHq9ewOo", "PJLT0cAPNfs", "srhCnPUmJDI", "8q7D4EmbSCw", "0rAngiiXBAc", "ppfONdsOkWI", "A2DzsgJSwcc", "ttcJMNlKif4", "88d-58tWhGs", "UCKfvxnljYY", "iB4MS1hsWXU"];
//     // let tags_300_349 = ["DTcJmIbn5nw", "ieSV8-isy3M", "ogCIqaCe2zI", "aVOJA8qI7oo", "RZgkjEdMbSw", "nbW4XWkJC6w", "jATCr-gQvPA", "RjquHTj4HlY", "SGTMSV8QUrs", "vZCGSP3A0Fo", "m19jit19v9w", "b5ZESpOAolU", "ON4iy8hq2hM", "TrofjEAetVs", "a63t8r70QN0", "4CGFPbFqdJ4", "nJd_2mJ4u-I", "5MuIMqhT8DM", "qAC-5hTK-4c", "Cm1Ij-jRhpQ", "gmG5ADvPN98", "iqKYtA3pK1c", "vjXJ4f-OW0U", "CeOadxT7kPA", "pyFcr2WcOyo", "DBBA2LAsepU", "LC5n91vKDZg", "ONs9FCY74p0", "87qLWFZManA", "lUKhMUZnLuw", "fO2htapfNhA", "dKNu5ZnWhb4", "J4r9pgx_95E", "Ln5Ts0bGguk", "uyMtsyzXWd4", "BcgDvEdGEXg", "OQSMr-3GGvQ", "ER15KmrB8h8", "5nM21P8lJ2I", "qu47T7kUPVQ", "VLDwh4ivNf4", "xnQB9Y77PXE", "khkJkR-ipfw", "3BDF7cD2M6g", "YkYdxjaqt58", "RLz3AYVIqes", "nAHvKC_k5VE", "xTra-yePY_A", "-jNlpGLpelg", "Ox4YJsGm8mY"];
//     // let tags_350_399 = ["C0dmOPDLKhY", "qRJJR6bGyL4", "HiA41B9LbJI", "tt2xKhTHZQs", "QtnBMSSk9Ok", "_lyP_2p5MJc", "hxnHdLQIX3o", "Bzfb4ZdNQFM", "WlFsUeYzezk", "SMnKboI4fvY", "XY6aAPhs0tE", "BRRNeBKwvNM", "lFG1b1-EsW8", "7uRPPaYuu44", "-mwF-znI4x0", "YSZhrxOkBZI", "MeKJK4uetL8", "XXllBMHeKJE", "gJjLdnycuyU", "wxStlzunxCw", "CyGWML6cI_k", "UUp39T3fPAo", "TdZTvzMPa6s", "xv4_L5zlYaA", "5tn8zo4ykMI", "F3mzS32SH2Q", "FJxUN-kNXNs", "zjrFw3MASGc", "Q9cje57YDRU", "Bg7hbA6IwBM", "G9-urSR19SI", "ZjeZ8r7yWOk", "fjkTrdunJzA", "-T3k6s7bev8", "kcoUlel8qbw", "Vn6elsrKz70", "jr5mTwfFh00", "ewNTwBbLUhM", "GIBoCJeB3HQ", "Dig_QFPPPtE", "aQsOmGflf1o", "H2QxFM9y0tY", "-kHm6YiboHA", "SkB4gG8ke7Q", "Xj-ncWb4N-I", "7SfhKi24z-M", "McxUiTl61nY", "stUl_OapUso", "UJz69v_7258", "iBa9EoEbb38"];
//     // let tags_400_449 = ["jTVWtrMleI0", "ngFXRh3ahm8", "08z_xW-szwM", "PYJ22-YYNW8", "DOisAG9yoNk", "x6fIseKzzH0", "mCHC99MqVfE", "H8rDS6Wto5g", "wMt0K-AbpCU", "yjYrxcGSWX4", "ygHwQXIlKJI", "7G4WI4oTC5A", "PK8PR22-c_U", "dQmaMOxwaQI", "yXh1p2oBbPI", "Swj-8DrVT2M", "NI915VTjCHE", "vXlJEcrinwg", "g7F9XCdeOtw", "kBBmVezBUkg", "QuR969uMICM", "aRcD31sA2a0", "HLEgiR1Fsds", "b-HkNXW4nmU", "o_U-_akINwQ", "OWiiA9hXbY8", "9NZCWeBNPeE", "o_XVt5rdpFY", "iu9u5yzUlb0", "bLAw7yF0YBc", "UDvw9vWSgt4", "hokUdXYRe2Q", "v4ly_-IIFCQ", "qlzjohcBkmg", "_vCIktrORFU", "ez7HOFKTtH0", "Is1YUQVYkvY", "-BvcToPZCLI", "gpE_W50OTUc", "mnRlB3G9fDU", "LcNvkhS4UYg", "Ubbmje44gLg", "JqcDzptviFw", "_jHmjs2270A", "jAw8t2g-eVU", "3zJHwOwirjA", "1AT5klu_yAQ", "zP3LaAYzA3Q", "UeGLnUqNI0s", "D4vjGSiRGKY"];
//     // let tags_450_499 = ["AHV_BxlNzmM", "-H1tUMRJoeo", "oQ7vlPpUHN8", "Y_p8qwDHtfA", "XowcxCYbug0", "mqX2BmiEDnQ", "phgjouv0BUA", "tFfYh9THuGo", "zfAgyT4hy8Q", "m7hdIIneypE", "L375-rWJVmU", "rpJx5VLQMxk", "N3SQlrmV1cE", "U51MSK6nSQE", "360bU-vBJOI", "Uroa2-MpiuE", "rQy4gPjUY-s", "PlytMrKfOFA", "mJ0X5itK96o", "s2cixaL9H3U", "4E_1AB1rsSw", "XewnyUJgyA4", "xn5gw0q3Tqw", "pxEcvU0Vp_M", "rmfzwwrCrrU", "_9lz7hYDvRM", "dd1IeIHA0S8", "uuatZO76MgQ", "iw7nPE2jioU", "dDClQv1SeeE", "7Q59suYxIec", "L7X17aash2s", "-RkhAP0_ms4", "Rv-tDrv__mc", "b2Jv8vC-m3g", "Uq6XgrYBugo", "5bXiuSrZUKg", "7p1nCRQCiUM", "dgJsm8gDLK0", "51k3UASQE5E", "SU8JYKGekXo", "IFpK-MqBD5E", "6iM6M_7wBMc", "k12j-E1LsUU", "SDLbFowy3A0", "6UbpxCQTv34", "zpjxElfNpks", "YY1ERM-NIBY", "Euegk8-WjoQ", "wcCZ-icYX9c"];
//     // let tags_500_549 = ["nisSeC81u2M", "MEHU2gp1wtg", "Hx9mkvBBXXw", "bYi6GMv5Erw", "bUjrtRQ64ek", "onaiTOLPeUs", "6C_-VdaXgCQ", "Uq3MCf_6HtI", "MiI7q_4p17M", "YUUP2MMz7PU", "2ch5FJAqLMk", "lY0H1E8DLtk", "zamvnyBB-SU", "OrB9JBEk1ds", "0DHywidLX6A", "-XbrhfGNLOY", "1mLQFm3wEfw", "xgBnYr0_FRk", "cZe3zcNoIKk", "WyprXhvGVYk", "pzH92njLrTE", "deG_LTcAjaM", "QMcwDmHiUZ8", "wYb3Wimn01s", "WvfydcUeXls", "5qzy1fHYQNg", "i2l9v_seHCc", "KyVSuI6JyOs", "Lv-TjM4YVzE", "jOsX_HnJtHU", "jlhtTKPkg5M", "pnKhVpgcmFc", "pcF6IRpe-Og", "VlHiEN1zTKI", "uv5-hIif7BQ", "Xb1Wq4NA290", "A3L6OZdnVWE", "f7MghGrscVA", "Rcm3rPz_Q94", "tz9-N_mRI04", "G7PydoX_WNQ", "Y0vRupFPw90", "z1r1ugmDxjk", "awADEuv5vWY", "IOABs1cOqDo", "kvdHqS3ryw0", "ykLj-Hc28o4", "MehKgIcoj6o", "roXTB6pQn28", "v5c3FE_qRnI"];
//     // let tags_550_599 = ["762c6pFpoqg", "1fZ915L1w7I", "AEKy1AS75Zs", "o4R1dGMxhLw", "i_wtaoHCw3k", "PX61e3sAj5k", "iMFJef3xnmg", "ajGgd9Ld-Wc", "qxz68bDIHCw", "0R9zjn9BBvA", "l--QYXCecew", "o2DDU4g0PRo", "9jZHw7Wf0v0", "mhEYvrFOP88", "TSomH3iGgYY", "ciDjhKKxOaY", "qaIghx4QRN4", "4R3gFN8sUa8", "POHYyP4EbzE", "ovKqmRyOGcg", "IQkj4CF_ha4", "GRfudKFLAmI", "4xKC0ldOn0E", "CXy1byguvJY", "6ElobAhlQo0", "FW3198J83RQ", "21hgbMa_sVc", "WBqnzn77MEE", "4INdeZ5HYpw", "XY_lzonfE3I", "zHbkOWz6AAg", "yLfCCcVDUiU", "ylOlZz7s52Q", "1g-1_Y3fvUg", "WhpAYw9kCt8", "rfi3w9Bzwik", "dKq34EVggjI", "KAQ11iNknoU", "QAAxKRFP2Mw", "hItQZfVU6-g", "v9EKV2nSU8w", "4xJ1rSq4nZ4", "LsAN-TEJfN0", "0g0S34XE2b8", "HW2SSoYteIs", "BPsSKKL8N0s", "XyTcINLKq4c", "kefDIEb3xyQ", "AI7M-JTC6_w", "2LRwvU6gEbA"];
//     let tags_600_649 = ["p1gVCOFXGZk", "lhoCdZFoktQ", "L4N1q4RNi9I", "rJmwZhy9Suk", "yue6t5UmP4o", "9IPHZ2rN-Hs", "E3cK8IL0JCE", "cUee1I69nFs", "1w3NXBXdY5c", "5foou7mIA0w", "7a5NyUITbyk", "klm0ghWoEhQ", "FcN3BW4vR7M", "PLk8Pm_XBJE", "-nKdufEaL8k", "r-YXvkWLy-g", "hPgY45xsGsU", "xjvTIP7pV20", "l4gJCBK0Tfc", "3boKz0Exros", "ARb2UfDgSHQ", "dO1LxQEoGLc", "_tewedUBhAo", "A_u2WFTfbcg", "TZNOrZIdct8", "xHHb7R3kx40", "hQltlSDNmd0", "SO7pX6ojJQ0", "3P-2dcS19fk", "zfbigT9I0Qg", "Rhcrbcg8HBw", "L-q-tSHo9Ho", "-guHd9Zrbn4", "vVx39Jv6PFM", "c0bsKc4tiuY", "EZKDkSY1GBM", "phu4Z6QEXJE", "Bs2Fv3YiSFM", "pVeq-0dIqpk", "g3vSYbT1Aco", "eemOZfsrKdg", "3-UcGCnJ14c", "7MHOk7qVhYs", "F2XPF6rQ6fs", "yCm9Ng0bbEQ", "waVUm5bhLbg", "1XvLEhZIAVk", "TfKpvpxdNz8", "yF4MgSh7VO4", "JoUZ929qoLk"];

//     // let tag_string_first50 = "UfWh3OHYbEM";
//     // let tag_string_51_100 = "UfWh3OHYbEM";
//     // let tag_string_101_149 = "aJgXcVkZNG8";
//     // let tag_string_150_199 = "mAnFBEokfrw";
//     // let tag_string_200_249 = "25s8BCsSWuk";
//     // let tag_string_250_299 = "pj-WqrFZZmg";
//     // let tag_string_300_349 = "DTcJmIbn5nw";
//     // let tag_string_350_399 = "C0dmOPDLKhY";
//     // let tag_string_400_449 = "jTVWtrMleI0";
//     // let tag_string_450_499 = "AHV_BxlNzmM";
//     // let tag_string_500_549 = "nisSeC81u2M";
//     // let tag_string_550_599 = "762c6pFpoqg";
//     let tag_string_600_649 = "p1gVCOFXGZk";

//     for (let i = 1; i < 50; i++) {
//         // tag_string_first50 += "," + tags_first50[i];
//         // tag_string_51_100 += "," + tags_51_100[i];
//         // tag_string_101_149 += "," + tags_101_149[i];
//         // tag_string_150_199 += "," + tags_150_199[i];
//         // tag_string_200_249 += "," + tags_200_249[i];
//         // tag_string_250_299 += "," + tags_250_299[i];
//         // tag_string_300_349 += "," + tags_300_349[i];
//         // tag_string_350_399 += "," + tags_350_399[i];
//         // tag_string_400_449 += "," + tags_400_449[i];
//         // tag_string_450_499 += "," + tags_450_499[i];
//         // tag_string_500_549 += "," + tags_500_549[i];
//         // tag_string_550_599 += "," + tags_550_599[i];
//         tag_string_600_649 += "," + tags_600_649[i];
//     }

//     let urlToFetchTags = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=` + tag_string_600_649 + `&key=${apiKey}`;
//     fetch(urlToFetchTags)
//         .then(res => res.json())
//         .then(res => {
//             console.log(res);

//             let tedTalkJsonArray = [];
//             for (i = 0; i < res.items.length; i++) {
//                 let talkItem = res.items[i];
//                 let talkSnippet = talkItem.snippet;
//                 let tagsForVideo = talkSnippet.tags;
//                 let tagStringForThisVideo = "";
//                 if (tagsForVideo.length > 4) {
//                     for (j = 4; j < tagsForVideo.length; j++) {
//                         if (j == 4) {
//                             tagStringForThisVideo += tagsForVideo[j].toLowerCase();
//                         } else {
//                             tagStringForThisVideo += ", " + tagsForVideo[j].toLowerCase(); // to lower case
//                         }
//                     }
//                 }

//                 let tedTalkJson = {
//                     "id": talkItem.id,
//                     "title": talkSnippet.title,
//                     "tags": tagStringForThisVideo
//                 };

//                 tedTalkJsonArray.push(tedTalkJson);
//             }

//             console.log(tedTalkJsonArray);

//         })
// };

// getTags();

// // how to find video id: contentDetails -> videoId
// // video id 0: TntLjM_uBT0 Crisis support for the world, one text away | Nancy Lublin
// //          1: 8bj0GR34XWc A global pandemic calls for global solutions | Larry Brilliant
// //          2: bNmRr-BYnxA How to shift your mindset and choose your future | Tom Rivett-Carnac
// //          3: zpn6MCmoK0g An ode to living on Earth | Oliver Jeffers
// //          4: FVUkKKc3Vvk What's missing from the American immigrant narrative | Elizabeth Camarillo Gutierrez


// // need to exclude these 4 tags (appear in all the ted videos -> not useful for clustering/classifying videos): "TEDTalk", "TEDTalks", "TED Talk", "TED Talks"
