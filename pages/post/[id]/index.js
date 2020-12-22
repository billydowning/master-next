import { useRouter } from "next/router";
import Header from "../../components/Header";

const Post = ({ title, body }) => {
  return (
    <div>
      <Header />
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

Post.getInitialProps = async ({ query }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${query.id}`
  );
  const post = res.json();

  return post;
};

export default Post;
