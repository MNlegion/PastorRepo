import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../features/posts/postSlice";

function PostForm() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleTextChange = (e) => setText(e.target.value);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost({ text, title }));
    setTitle("");
    setText("");
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title"></label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Super Neat Title!"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="text"></label>
          <textarea
            type="text"
            name="text"
            id="text"
            placeholder="What's on your mind?"
            value={text}
            onChange={handleTextChange}
          ></textarea>
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default PostForm;
