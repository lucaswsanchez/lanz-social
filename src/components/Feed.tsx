import "../styles/Feed.css";
import { FaUserCircle } from "react-icons/fa";
import { BiLike, BiDislike } from "react-icons/bi";
import { MdSend } from "react-icons/md";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed-container">
      <div className="feed">
        <div className="create-post">
          <div className="post-user-photo">
            <FaUserCircle color="black" size="32" />
          </div>
          <div className="posting-textarea">
            <textarea placeholder="¿What would you like to share?"></textarea>
          </div>
          <div className="posting-button">
            <MdSend size="20" className="send-btn" />
          </div>
        </div>
        <div className="post">
          <div className="post-header">
            <div className="post-user-photo">
              <FaUserCircle color="black" size="32" />
            </div>
            <div className="post-user-name">
              <span>Lucas Sanchez</span>
            </div>
          </div>
          <div className="post-content">
            Bueno, esta es mi primera publicacion en Lanz, como estan?
          </div>
          <div className="post-reaction">
            <div className="post-like">
              <BiLike color="black" size="20" />
            </div>
            <div className="post-dislike">
              <BiDislike color="black" size="20" />
            </div>
          </div>
        </div>
        <Post />
      </div>
    </div>
  );
}

export default Feed;
