import "../styles/Feed.css";
import { FaUserCircle } from "react-icons/fa";
import { BiLike, BiDislike } from "react-icons/bi";

function Feed() {
  return (
    <div className="feed-container">
      <div className="feed">
        <div className="create-post">
          <div className="post">
            <div className="post-header">
              <div className="post-user-photo">
                <FaUserCircle color="black" size="32" />
              </div>
              <div className="posting-input">
                <input placeholder="¿What would you like to share?"></input>
              </div>
            </div>
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
            Bueno, esta es mi primera publicacion en Lanz, esta nueva y hermosa
            red social.
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
        <div className="post">
          <div className="post-header">
            <div className="post-user-photo">
              <FaUserCircle color="black" size="32" />
            </div>
            <div className="post-user-name">
              <span>Jaimito Sanchez</span>
            </div>
          </div>
          <div className="post-content">
            Hoy me fui al Cabo Domingo, con mi familia, hicimos un asadito y
            anduvimos en cuatri con los pibes. Re divertido!! :D
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
      </div>
    </div>
  );
}

export default Feed;
