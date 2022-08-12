import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import * as S from "./PostDetail.style";
import axios from "axios";
import usePostAllData from "../../hooks/usePostsAllData";
import TextContainer from "../textContainer/TextContainer";

function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { title, author, date, content , comments } = usePostAllData(id);

  useEffect(() => {
    if(content){
      document.getElementById("idContent").innerHTML = content;
    }
  }, [content]);

  return (
    <>
      <S.PostDetail>
        <div id='divDetailsPost'>
            <h1 > {title}</h1>
            <p id="idtitle"> · {author?.name}</p>
            <p id="idContent"></p>
        </div>

        <div id='divDetailsPostComments'>
            <div id='divComments'>
                <h2>Comments</h2>
                <button id='buttonNewComment' onClick={() => {navigate("/create-comment");}}>Add new comment</button>
            </div>
        </div>
      </S.PostDetail>
    </>
  );
}

export default PostDetail;
