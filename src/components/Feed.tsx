import "../styles/Feed.css";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed-container">
      <div className="feed">
        <Post />
      </div>
    </div>
  );
}

export default Feed;
