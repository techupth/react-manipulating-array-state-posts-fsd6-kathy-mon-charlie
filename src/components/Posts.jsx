import postsData from "../data/posts";
import { useState } from "react";

function Posts() {
  const [likes, setLikes] = useState(postsData.map((item) => item.likes));
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {postsData.map((item, index) => (
          <div className="post-item" key={item.id}>
            <div className="post-header">
              <h2>{item.title}</h2>
              <div className="post-social-media-stats">
                <span className="stats-topic">Likes: </span>
                <span className="post-likes">{likes[index]}</span>
              </div>
            </div>
            <p className="post-content">{item.content}</p>
            <div className="post-actions">
              <button
                className="like-button"
                onClick={() =>
                  setLikes(likes.toSpliced(index, 1, likes[index] + 1))
                }
              >
                Like
              </button>
              <button
                className="dislike-button"
                onClick={() =>
                  likes[index] > 0
                    ? setLikes(likes.toSpliced(index, 1, likes[index] - 1))
                    : alert("It can't be worse!!!")
                }
              >
                Dislike
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
