import * as S from "./Header.style";

function Header({ name }) {
  return (
    <S.Header>
      <div id="teste">
        <div id="titleBlog">My Blog</div>
        <div id="userName">{name}</div>
      </div>
    </S.Header>
  );
}

export default Header;
