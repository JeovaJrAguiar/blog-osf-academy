import * as S from './Header.style';

function Header({ name }){
    return (
        <S.Header>
            <span id='titleBlog'>My Blog</span>
            <span id='userName'>{ name }</span>
        </S.Header>
    );
}

export default Header;