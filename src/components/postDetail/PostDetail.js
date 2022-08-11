import { useEffect, useState } from "react";
import * as S from './PostDetail.style'
import axios from "axios";
import usePostAllData from '../../hooks/usePostsAllData';

function PostDetail(id){
    //const [ ]
    const postAllData = usePostAllData();

    return (
        <>
        <S.PostDetail>
                <h1>testando postDetail</h1>
                <p>Id: { id }</p>
            </S.PostDetail>
        </>
    );
}

export default PostDetail;