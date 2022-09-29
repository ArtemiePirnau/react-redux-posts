import { useSelector } from "react-redux";
import PostsItem from "../PostsItem/PostsItem.jsx";
import "./Posts.scss";

const Posts = () => {
  const allPosts = useSelector((state) => state.posts.posts);
  return (
    <div className="posts">
      <div className="container">
        {allPosts.length === 0 ? (
          <div className="posts__items-nothing">There are no posts ... 😔</div>
        ) : (
          <div className="posts__items">
            {allPosts.map((post) => {
              return <PostsItem key={post.id} {...post} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};
export default Posts;
