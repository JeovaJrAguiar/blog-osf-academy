import * as S from './Main.style'
import { useEffect,  useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CreatePost from '../createPost/CreatePost';
import Home from '../home/Home';

function Main(){

    return (
        <S.Main>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path='create-post' element={<CreatePost/>}/>
                    <Route path='post-details/:id' element={<CreatePost/>}/>
                </Routes>
            </BrowserRouter>
        </S.Main>
    )
}

export default Main;