import styled from "styled-components";

export const TextContainer = styled.div`
    margin-top: 7px;
    margin-bottom: 7px;

    border-color: #000;
    border-radius: 3px;
    border-width: medium;

    .classTitleTextContainer{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-weight: 300;
        font-size: 15px;

        color: #000;
        text-decoration: none;
    }
    #divTittleAndAuthor{
        display: flex;
    }
    #byAuthor{
        padding-top: 10px;
    }

    .classAuthorTextContainer{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-weight: 400;
        font-size: 12px;

        color: #1E89EB;
    }
`;
