import React, {useState} from "react";
import "./VideoSideBar.css";
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function VideoSideBar({likes, shares, messages}) {
    const [liked, setLiked] = useState(false);

    return (
        <div className="videoSideBar">
          <div className="videoSideBar_button">
              {liked ? (
              <FavoriteIcon fontsize="large"  onClick={(e) => setLiked(false)} /> )
              : (
                  <FavoriteBorderIcon fontSIze="large" onClick={(e) => setLiked(true)} />
              )}
               <p>{liked ? parseInt(likes) + 1 : likes}</p>
          </div>

          <div className="videoSideBar_button">
                <MessageIcon fontsize="large" />
                <p>{messages}</p>
          </div>

          <div className="videoSideBar_button">
              <ShareIcon fontsize="large" />
              <p>{shares}</p>
          </div>

        </div>
    )
}

export default VideoSideBar
