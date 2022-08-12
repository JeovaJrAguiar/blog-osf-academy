import { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as S from './PostDetail.style'
import axios from "axios";
import usePostAllData from '../../hooks/usePostsAllData';

function PostDetail(){
    const { id } = useParams();

    const { title, author, date, content } = usePostAllData(id);

    return (
        <>
        <S.PostDetail>
                <p>{title}</p>

        </S.PostDetail>
        </>
    );
}

export default PostDetail;