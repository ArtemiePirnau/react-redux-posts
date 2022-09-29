import Posts from "../Posts/Posts.jsx";
import AddPost from "../AddPost/AddPost.jsx";
import { useDispatch } from "react-redux";
import { AppLevelContext } from "../../Context/AppLevelContext.js";
import { savePost } from "../../store/postsSlice.js";
import { useContext } from "react";
import "./App.scss";

const App = () => {
  const { title, author, content, setTitle, setContent, setAuthor } =
    useContext(AppLevelContext);
  const dispatch = useDispatch();

  const handleAction = (e) => {
    e.preventDefault();
    if (title.trim().length && content.trim().length && author.trim().length) {
      dispatch(savePost({ title, content, author }));
    }
    clearFields();
  };
  const clearFields = () => {
    setTitle("");
    setContent("");
    setAuthor("");
  };
  return (
    <div className="app">
      <AddPost
        title={title}
        author={author}
        content={content}
        setContent={setContent}
        setAuthor={setAuthor}
        setTitle={setTitle}
        handleAction={handleAction}
      />
      <Posts />
    </div>
  );
};
export default App;
