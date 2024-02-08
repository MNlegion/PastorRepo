import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deletePost } from "../features/posts/postSlice";

function PostItem({ post }) {
const dispatch = useDispatch();

  return (
    <div className="post">
      <div>
        {new Date(post.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        })}
      </div>
      <div>
        <h2>{post.title}</h2>
        <p>{post.text}</p>
      </div>
      <button className="close" onClick={() => dispatch(deletePost(post._id))}>
        <FaTrash />
      </button>
    </div>
  );
}

export default PostItem;
