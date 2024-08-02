import "./Post.css";

export default function Post({ post }) {
  const { title, body } = post;
  return (
    <div className="box">
      <h3>Post Title: {title} </h3>
      <p>Post Body: {body} </p>
    </div>
  );
}
