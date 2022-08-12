import { useEffect, useState } from "react";
import * as S from "./CreatePost.style";
import useCreatePost from '../../hooks/useCreatePost';
import { useNavigate } from "react-router";

function CreatePost({ userId }) {
  const [title, setTitle] = useState("");
  const [teaser, setTeaser] = useState("");
  const [content, setContent] = useState([""]);
  const navigate = useNavigate();

  const createPost = useCreatePost(title, teaser, content, userId);

  // implementar logica para: montar um obejto que vai ser jogado para a api
  // procurar saber como é o metodo post o axios
  // na hora de montar preciso pegar as informacoes do post: title, author, teaser, conteudo
  // pegar o author como o meu e-mail

  return (
    <S.CreatePost>
      <h1 id="titlePage">Create a Post</h1>

      <span>Tittle</span>
      <input
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
        id="inputTitle"
        placeholder="Type here..."
      />

      <span>Teaser</span>
      <textarea
        value={teaser}
        onChange={(event) => {
          setTeaser(event.target.value);
        }}
        id="inputTeaser"
        placeholder="Type here..."
      />

      <span>Content</span>
      {content.map((cont, index) => (
        <textarea
          key={index}
          value={cont}
          onChange={(event) => {
            setContent((prev) =>
              prev.map((conteudo, i) => {
                if (index == i) {
                  return event.target.value;
                }
                return conteudo;
              })
            );
          }}
          id="inputComment"
          placeholder="Type here..."
        />
      ))}

      <button
        type="button"
        onClick={() => {
          setContent((prev) => [...prev, ""]);
        }}
      >
        Adcionar paragrafo
      </button>
      <button 
        id="inputEnviar" 
        type="submit" 
        onClick={ async (event) => {
            event.preventDefault();

            const result = await createPost();
             if(result.status === 201){
                navigate(`/post-details/${result.data.id}`);
             }
        }}
        >
            Salvar
        </button>
    </S.CreatePost>
  );
}

export default CreatePost;
