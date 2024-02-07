import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function PostForm() {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}></form>
    </section>
  );
}

export default PostForm;
