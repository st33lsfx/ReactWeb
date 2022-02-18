import React, { useState } from "react";
import { SliderPicker } from "react-color";

import "./Posts.css";
import "react-color-picker/index.css";

const Posts = () => {
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostColor, setNewPostColor] = useState("blue");

  const [posts, setPosts] = useState([]);

  // === Přidání nového posts ===
  const onAddPost = (e) => {
    e.preventDefault();

    // pokud je newPostTitle vetší než 0 odešle se.
    if (newPostTitle.length > 0) {
      setPosts([
        { title: newPostTitle, color: newPostColor.background },
        ...posts,
      ]);
      // po odeslání se resetuje input
      setNewPostTitle("");
    }
  };

  // === Zachycení textu v textArea ===
  const onTitleChange = (e) => {
    setNewPostTitle(e.target.value);
  };

  // === Přidání barvy pozadí inputu ===
  const onColorChange = (color) => {
    setNewPostColor({ background: color.hex });
    console.log(color.hex);
  };

  return (
    <>
      <div className="container">
        <div className="control">
          <button className=""></button>
          <button className=""></button>
          <button className=""></button>
        </div>
        <h2 className="post-title">Post</h2>
        <p>
          <small>Sem můžete psát své dotazy a připomínky</small>
        </p>
        <form className="post-input">
          <textarea
            rows="5"
            cols="40"
            placeholder="Some text..."
            value={newPostTitle}
            onChange={onTitleChange}
          ></textarea>
          <br />
          <button className="postButton" onClick={onAddPost}>
            Odeslat
          </button>
          <div className="picker">
            {/* Přidání Color Pickeru */}
            <SliderPicker
              color={newPostColor.background}
              onChange={onColorChange}
            />
          </div>

          {posts.map((post, index) => (
            <div key={index}>
              <PostItem post={post} />
            </div>
          ))}
        </form>
      </div>
    </>
  );
};

const PostItem = ({ post }) => {
  return (
    <div className="post-item" style={{ backgroundColor: post.color }}>
      {post.title}
    </div>
  );
};

export default Posts;
