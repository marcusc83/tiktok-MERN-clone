import React, {useEffect, useState} from "react"; 
import "./App.css";
import Video from "./Video.js";
import "./Video.css";
import axios from "./axios.js";



function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() 
    {
      const response = await axios.get("/v2/posts")
      setVideos(response.data);
      return response;
    }
     
      fetchPosts();
     
  }, []  );
  
  return (
    <div className="app">

      <div className="app_videos">
         {videos.map(
            ({url, channel, description, song, likes, messages, shares}) =>
              (
                <Video
                  url={url}
                  channel={channel}
                  song={song}
                  likes={likes}
                  messages={messages}
                  description={description}
                  shares={shares}
                />
              )
         )}       
      </div>
    </div>
  );
}
{/*!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/8.2.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/8.2.2/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script> */}

export default App;
