import * as S from './Main.style'
import { useEffect,  useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CreatePost from '../../pages/createPost/CreatePost';
import CreateComment from '../../pages/createComment/CreateComment';
import PostDetail from '../postDetail/PostDetail';
import Home from '../../pages/home/Home';

function Main({user}){

    // <Route path='post-details/:id' element={<PostDetail/>}/>
    return (
        <S.Main>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>}/>

                    <Route path='create-post' element={<CreatePost userId = {user.id}/>}/>
                    <Route path='create-comment' element={<CreateComment/>}/>

                    <Route path='post-details/:id' element={<PostDetail/>}/>
                </Routes>
            </BrowserRouter>
        </S.Main>
    )
}

export default Main;