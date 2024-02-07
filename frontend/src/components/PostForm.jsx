// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { createPost } from "../features/posts/postSlice";

// function PostForm() {
//   const [text, setText] = useState("");

//   const dispatch = useDispatch();

//   const onSubmit = (e) => {
//     e.preventDefault();

//     dispatch(createPost({ text }));
//     setText("");
//   };

//   return (
//     <section className="form">
//       <form onSubmit={onSubmit}>
//         <div className="form-group">
//           <label htmlFor="text">Submitted Posts</label>
//           <input
//             type="text"
//             name="text"
//             id="text"
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <button className="btn btn-block" type="submit">Submit</button>
//         </div>
//       </form>
//     </section>
//   );
// }

// export default PostForm;


// Test Code 
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
          <label htmlFor="title">Post Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="text">Post Text</label>
          <textarea
            type="text"
            name="text"
            id="text"
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
