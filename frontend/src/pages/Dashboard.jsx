import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PostForm from "../components/PostForm";
import PostItem from "../components/PostItem";
import Spinner from "../components/Spinner";
import { getPosts, reset } from "../features/posts/postSlice";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { posts, isLoading, isError, message } = useSelector(
    (state) => state.posts
  );

  useEffect(() => {

    if (!user) {
      navigate("/login");
    } else (dispatch(getPosts()));

    return () => dispatch(reset());

  }, [user, navigate, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Your Posts</p>
      </section>

      <PostForm />

      <section className="content">
       {posts.length > 0 ? (
        <div className="posts">
          {posts.map((post) => (
            <PostItem key={post._id} post={post} />
          ))}
        </div>
       ) : (<h3>No posts found</h3>)}
      </section>
    </>
  );
}

export default Dashboard;
