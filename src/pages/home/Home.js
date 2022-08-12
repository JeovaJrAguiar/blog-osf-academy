import { Link, useNavigate } from "react-router-dom";
import usePosts from "../../hooks/usePosts";
import TextContainer from "../../components/textContainer/TextContainer";
import * as S from './Home.style';

function Home() {
  const navigate = useNavigate();

  const posts = usePosts();

  return (
    <S.Home>
        <div id="divTittleHome">
            <p id="titleHome">Posts Recentes</p>
            <button id='buttonNewPost' onClick={() => {navigate("/create-post");}}>Add new post</button>
        </div>

        {posts.map((post) => ( <TextContainer
          key={post.id}
          title={post.title}
          author={post.author}
          description={post.teaser}
          id={post.id} />
        ))}
    </S.Home>
  );
}

export default Home;
