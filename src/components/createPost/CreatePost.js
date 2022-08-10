import * as S from './CreatePost.style';

function CreatePost() {
    return (
        <S.CreatePost>
            <h1 id='titlePage'>Create a Comment</h1>
            <span>Tittle</span>
            <input id='inputTitle' placeholder='Type here...'></input>

            <span>Comment</span>
            <textarea id='inputComment' placeholder='Type here...'></textarea>

            <input id='inputEnviar'type='submit'></input>
        </S.CreatePost>
    );
}

export default CreatePost;