import styled from "styled-components";

export const CreatePost = styled.form`
    margin: 40px 40px;

    display: flex;  // transforma em um container flex
    flex-grow: 1;  // cresce enquanto tiver espaço
    flex-direction: column;

    #titlePage{
        margin-bottom: 40px;
    }

    #inputTitle{
        width: 100%;
        height: 40px;

        margin-top: 10px;
        margin-bottom: 10px;
        padding: 10px;

        border-radius: 3px;
    }

    #inputTeaser, #inputContent{
        width: 100%;
        height: 70px;

        margin-top: 10px;
        margin-bottom: 10px;
        padding: 10px;

        border-radius: 3px;
    }

    #inputEnviar{
        text-align: center;

        width: 10%;
        height: 10%;

        background-color: #1E89EB;
        color: #fff;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-weight: 600;
        font-size: 15px;

        margin-top: 10px;
        margin-bottom: 10px;
        padding: 10px;

        border-radius: 3px;
    }
`;