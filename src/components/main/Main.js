import * as S from './Main.style'
import { useEffect,  useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CreatePost from '../createPost/CreatePost';
import CreateComment from '../createComment/CreateComment';
import PostDetail from '../postDetail/PostDetail';
import Home from '../home/Home';

function Main(){

    // <Route path='post-details/:id' element={<PostDetail/>}/>
    return (
        <S.Main>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>}/>

                    <Route path='create-post' element={<CreatePost/>}/>
                    <Route path='create-comment' element={<CreateComment/>}/>

                    <Route path='post-details' element={<PostDetail/>}/>
                </Routes>
            </BrowserRouter>
        </S.Main>
    )
}

export default Main;