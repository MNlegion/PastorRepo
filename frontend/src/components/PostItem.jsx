function PostItem({ post }) {
  return (
    <div className="post">
        <div>
            {new Date(post.createdAt).toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'})}
        </div>
        <h2>
            {post.title}
        </h2>
        <p>
            {post.text}
        </p>
    </div>
  )
}

export default PostItem;
