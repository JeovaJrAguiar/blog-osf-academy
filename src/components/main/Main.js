import * as S from './Main.style'
import { useEffect,  useState } from 'react';

function Main({ children }){
    const [main, setMain] = useState([]);

    return (
        <S.Main>
            <h1>Posts Recentes</h1>
            {children}
        </S.Main>
    )
}

export default Main;