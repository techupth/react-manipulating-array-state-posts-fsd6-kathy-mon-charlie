/*
import { usestate } from "react"
function Posts() {
  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        <div class="post-item">
          <div class="post-header">
            <h2>Post Title #1</h2>
            <div class="post-social-media-stats">
              <span class="stats-topic">Likes: </span>
              <span class="post-likes">10</span>
            </div>
          </div>
          <p class="post-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            vel turpis vestibulum, aliquet ipsum vitae, auctor risus. Morbi
            tincidunt, leo non molestie consectetur, elit libero faucibus
            tellus, sed fringilla tortor libero sit amet odio. Maecenas sed ante
            condimentum mauris euismod pellentesque eu eu justo...
          </p>
          <div class="post-actions">
            <button class="like-button">Like</button>
            <button class="dislike-button">Dislike</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;*/
import { useState } from "react";

function Posts() {

  const initialPostsData = [
    { id: 1, title: 'Post Title #1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel turpis vestibulum, aliquet ipsum vitae, auctor risus. Morbi tincidunt, leo non molestie consectetur, elit libero faucibus tellus, sed fringilla tortor libero sit amet odio. Maecenas sed ante condimentum mauris euismod pellentesque eu eu justo...', likes: 10 },
    { id: 2, title: 'Post Title #2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel turpis vestibulum, aliquet ipsum vitae, auctor risus. Morbi tincidunt, leo non molestie consectetur, elit libero faucibus tellus, sed fringilla tortor libero sit amet odio. Maecenas sed ante condimentum mauris euismod pellentesque eu eu justo...', likes: 30 },
   
  ];

  const [posts, setPosts] = useState(initialPostsData);

  // like
  const handleLike = (id) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  // dislike
  const handleDislike = (id) => {
    setPosts(posts.map(post => 
      post.id === id && post.likes > 0 ? { ...post, likes: post.likes - 1 } : post
    ));
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {posts.map(post => (
          <div key={post.id} className="post-item">
            <div className="post-header">
              <h2>{post.title}</h2>
              <div className="post-social-media-stats">
                <span className="stats-topic">Likes: </span>
                <span className="post-likes">{post.likes}</span>
              </div>
            </div>
            <p className="post-content">
              {post.content}
            </p>
            <div className="post-actions">
              <button className="like-button" onClick={() => handleLike(post.id)}>Like</button>
              <button className="dislike-button" onClick={() => handleDislike(post.id)}>Dislike</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
