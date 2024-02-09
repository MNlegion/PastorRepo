import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  deletePost,
  handleDownvote,
  handleUpvote,
} from "../features/posts/postSlice";

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
      <div>
        <span>{post.upvotes}</span>
        <button onClick={() => dispatch(handleUpvote(post._id))}>Upvote</button>
        <button onClick={() => dispatch(handleDownvote(post._id))}>Downvote</button>
        <span>{post.downvotes}</span>
      </div>
    </div>
  );
}

export default PostItem;
