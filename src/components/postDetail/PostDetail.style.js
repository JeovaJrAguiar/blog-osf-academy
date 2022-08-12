import styled from "styled-components";

export const PostDetail = styled.div`
    // como car aqui logica para renderizar:
    // todas as informacoes do objeto comentario retornado
    // todos os comentarios vinculados aquel obejto retornado pela API

    #divDetailsPost{
        border-bottom: 2px solid #737272;
        padding: 10px;
    }

    #divDetailsPostComments{
        padding: 10px;
    }

    #divComments{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-weight: 500;    
        display: flex;
        gap: 68.75rem;
    }

    #buttonNewComment{
        background-color: #1E89EB;
        color: #fff;

        height: 50px;
        width: 10%;

        font-size: 15px;
        margin-right: 0px;    
        display: inline;
    }

    #idtitle{
        
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-weight: 400;
        font-size: 12px;

        color: #1E89EB;
        padding: 10px 1px;
    }
`;