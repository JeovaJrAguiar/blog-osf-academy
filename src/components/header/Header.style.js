import styled from 'styled-components';

export const Header = styled.header`
    background-color: #1E89EB;
    color: #fff;

    margin-top: 0px;
    padding: 15px 60px;

    position: relative;
    box-shadow: 0px 2px 15px #000;

    height: 10%;
    width: 100%;

    #titleBlog{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-weight: 300;
        font-size: 40px;

        height: 60px;
        //width: 120px;
    }

    #userName{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-weight: 300;
        font-size: 25px;

        color: #fff;
        
        //margin-left: 80%;
        height: 60px;
        width: 120px;
    }
    #teste{
        display: flex;
        gap: 1100px;
    }
`;