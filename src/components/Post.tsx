import { useState, useEffect } from "react";
import { database, auth } from "../firebase";
import "../styles/Post.css";
import { FaUserCircle } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { BiLike, BiDislike } from "react-icons/bi";
import { MdSend } from "react-icons/md";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Post {
  id: string;
  userId: string;
  email: string;
  post: string;
}

function Post() {
  const user = auth.currentUser;

  const [posts, setPosts] = useState<Post[]>([]);
  const [postContent, setPostContent] = useState("");

  useEffect(() => {
    const postsRef = database.ref("lanzSocialPosts/posts");

    const handleData = (snapshot: { val: () => any }) => {
      const postsData = snapshot.val();
      if (postsData) {
        const postsArray = Object.entries(postsData).map(
          ([postId, post]: [string, any]) => ({
            id: postId,
            ...post,
          })
        );
        setPosts(postsArray.reverse());
      } else {
        setPosts([]);
      }
    };

    postsRef.on("value", handleData);

    return () => {
      postsRef.off("value", handleData);
    };
  }, []);

  const handlePostSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!user) {
      toast.error("Crea una cuenta para agregar un comentario.", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    if (postContent.trim() === "") {
      toast.error("El campo de comentario está vacío.", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    try {
      const newPostRef = database.ref("lanzSocialPosts/posts").push();
      await newPostRef.set({
        userId: user.uid,
        email: user.email,
        post: postContent,
      });

      setPostContent("");
    } catch (error) {
      console.error("Error al agregar un comentario:", error);
      toast.error("Error al agregar un comentario.", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const handlePostDelete = async (postId: any) => {
    try {
      const postRef = database.ref(`lanzSocialPosts/posts/${postId}`);
      await postRef.remove();
    } catch (error) {
      console.error("Error al eliminar el comentario:", error);
    }
  };

  return (
    <>
      <div className="create-post">
        <div className="post-user-photo">
          <FaUserCircle color="black" size="32" />
        </div>
        <div className="posting-textarea">
          <textarea
            placeholder="What would you like to share?"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
        </div>
        <div className="posting-button">
          <button onClick={handlePostSubmit}>
            <MdSend size="20" className="send-btn" />
          </button>
        </div>
      </div>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <div className="post-header">
            <div className="post-user-photo">
              <FaUserCircle color="black" size="32" />
            </div>
            <div className="post-user-name">{post.email}</div>
            {user && user.uid === post.userId && (
              <div className="post-user-delete">
                <button onClick={() => handlePostDelete(post.id)}>
                  Delete <FaDeleteLeft color="#881f1f" />
                </button>
              </div>
            )}
          </div>
          <div className="post-content">{post.post}</div>
          <div className="post-reaction">
            <div className="post-like">
              <BiLike color="black" size="20" />
            </div>
            <div className="post-dislike">
              <BiDislike color="black" size="20" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Post;
