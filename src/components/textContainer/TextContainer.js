import { Link } from "react-router-dom";
import * as S from "./TextContainer.style";

function TextContainer({ title, author, description, id }) {
  return (
    <>
      <S.TextContainer>
        <div id="divTittleAndAuthor">
          <Link className="classTitleTextContainer" to={`post-details/${id}`}>
            <h2>{title}</h2>
          </Link>

          <p id="byAuthor" className="classAuthorTextContainer">· by {author}</p>
        </div>
        <p>{description}</p>
      </S.TextContainer>
      <hr />
    </>
  );
}

export default TextContainer;
