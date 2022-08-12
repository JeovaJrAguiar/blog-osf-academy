import { useEffect, useState } from 'react';
import * as S from './CreateComment.style';
import { useNavigate } from "react-router";
import { useParams } from "react-router";

import useCreatePost from '../../hooks/useCreatePost';
import useCreateComment from '../../hooks/useCreateComment';

function CreateComment({ userId, postId}) {

    const { id } = useParams();

    const [title, setTitle] = useState("");
    const [comment, setContent] = useState("");
    const navigate = useNavigate();
    

   const createComment = useCreateComment(title, comment, userId, postId);

    return (
        <S.CreateComment>
            <h1 id='titlePage'>Create a Comment</h1>
            <span>Tittle</span>
            <input id='inputTitle' value={title} onChange={(event) => { setTitle(event.target.value);}} placeholder='Type here...'></input>

            <span>Comment</span>
            <textarea id='inputComment' placeholder='Type here...'></textarea>


            <button id="inputEnviar" 
        type="submit" 
        onClick={ async (event) => {
            event.preventDefault();

            const result = await createComment();
             if(result.status === 201){
                navigate(`/post-details/${result.data.id}`);
             }
        }}
        >
            Salvar
        </button>
        </S.CreateComment>
    );
}

export default CreateComment;