import { useEffect, useState } from 'react';
import * as S from './CreatePost.style';

function CreatePost() {
    const [title, setTitle] = useState();

    // implementar logica para: montar um obejto que vai ser jogado para a api
    // procurar saber como é o metodo post o axios
    // na hora de montar preciso pegar as informacoes do post: title, author, teaser, conteudo
    // pegar o author como o meu e-mail

    return (
        <S.CreatePost>
            <h1 id='titlePage'>Create a Comment</h1>
            <span>Tittle</span>
            <input id='inputTitle' placeholder='Type here...'></input>

            <span>Teaser</span>
            <textarea id='inputTeaser' placeholder='Type here...'></textarea>

            <span>Comment</span>
            <textarea id='inputComment' placeholder='Type here...'></textarea>

            <input id='inputEnviar'type='submit'></input>
        </S.CreatePost>
    );
}

export default CreatePost;