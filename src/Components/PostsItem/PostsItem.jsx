import { useDispatch } from "react-redux";
import { deletePost } from "../../store/postsSlice.js";
import "./PostsItem.scss";

const PostsItem = ({ title, content, author, data, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="posts__item" key={id}>
      <span className="posts__item-delete">
        <i
          className="fa fa-trash-o"
          onClick={() => dispatch(deletePost({ id }))}
        />
      </span>
      <h3 className="posts__item-title">{title}</h3>
      <p className="posts__item-text">{content}</p>
      <div className="posts__item-info">
        <h6 className="posts__item-author">{author}</h6>
        <p className="posts__item-date">{data}</p>
      </div>
    </div>
  );
};
export default PostsItem;
