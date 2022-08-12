import { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as S from "./PostDetail.style";
import axios from "axios";
import usePostAllData from "../../hooks/usePostsAllData";
import TextContainer from "../textContainer/TextContainer";

function PostDetail() {
  const { id } = useParams();

  const { title, author, date, content , comments } = usePostAllData(id);

  return (
    <>
      <S.PostDetail>
        <div id='divDetailsPost'>
            <h1>teste</h1>
        </div>

        
        <div id='divDetailsPostComments'>
            <h2>Comments</h2>

            {comments.map((comment) => ( <TextContainer
                                        key={comment.id}
                                        title={comment.title}
                                        author={comment.author}
                                        description={comment.teaser}
                                        id={comment.id} />
                                    )  
                        )  
            }
        </div>
      </S.PostDetail>
    </>
  );
}

export default PostDetail;
