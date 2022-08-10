import { Link, useNavigate } from "react-router-dom";
import usePosts from "../../hooks/usePosts";
import TextContainer from "../textContainer/TextContainer";

function Home() {
  const navigate = useNavigate();

  const posts = usePosts();

  return (
    <>
      <Link to="create-post">
        <p>vai para a criacao de posts</p>
      </Link>
      <button
        onClick={() => {
          navigate("/create-post");
        }}
      >
        criar post
      </button>

      {posts.map((post) => (
        <TextContainer
          key={post.id}
          title={post.title}
          author={post.author}
          description={post.teaser}
        />
      ))}
    </>
  );
}

export default Home;
