import { Link } from "react-router-dom";
import * as S from './TextContainer.style'

function TextContainer({ title, author, description }) {

    return (
        <>
        <S.TextContainer>
            <Link className='classTitleTextContainer' to="create-post">
                <h2 >{title}</h2>
            </Link>

            <p className='classAuthorTextContainer'>· by {author}</p>
            <p>{description}</p>
            
        </S.TextContainer>
        <hr/>
        </>
    )
}

export default TextContainer;