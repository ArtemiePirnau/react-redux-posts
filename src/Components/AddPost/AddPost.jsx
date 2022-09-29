import { useContext } from "react";
import "./AddPost.scss";

const AddPost = ({ setAuthor, title, author, content, setTitle, setContent, handleAction }) => {
  return (
    <form className="add-post">
      <div className="container">
        <div className="add-post__inner">
          <h3 className="add-post__title">Add Post</h3>
          <label className="add-post__label">
            <span>Post title</span>
            <input
              className="add-post__title add-post__input"
              type="text"
              name="title"
              placeholder="Post Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label className="add-post__label">
            <span>Post author</span>
            <input
              className="add-post__author add-post__input"
              type="text"
              name="author"
              placeholder="Post Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </label>
          <label className="add-post__label">
            <span> Post content</span>
            <textarea
              className="add-post__area add-post__input"
              name="content"
              placeholder="Post Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </label>
          <button className="add-post__save" onClick={handleAction}>
            Save Post
          </button>
        </div>
      </div>
    </form>
  );
};
export default AddPost;
