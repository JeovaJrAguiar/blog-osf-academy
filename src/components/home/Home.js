import { Link, useNavigate } from "react-router-dom";
import usePosts from "../../hooks/usePosts";
import TextContainer from "../textContainer/TextContainer";
import * as S from './Home.style';

function Home() {
  const navigate = useNavigate();

  const posts = usePosts();

  return (
    <S.Home>
      <Link to="create-post">
        <p>vai para a criacao de posts</p>
      </Link>

    <button id='buttonNewPost' onClick={() => {navigate("/create-post");}}>Add new post</button>

      {posts.map((post) => (
        <TextContainer
          key={post.id}
          title={post.title}
          author={post.author}
          description={post.teaser}
        />
      ))}
    </S.Home>
  );
}

export default Home;
