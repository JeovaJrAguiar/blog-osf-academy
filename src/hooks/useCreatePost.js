import axios from "axios";
import endpoints from "../config/endpoints";

const useCreatePost = (title, teaser, content, userId) => {

  const createPost = () => {
    return axios
        .post(endpoints.createPost, {
            "title": title,
            "teaser": teaser,
            "content": content.reduce((prev, curr) => {
                return `${prev}<p>${curr}</p>`
             }, ''),
            "userId": userId
          })
    }

  return createPost;
};

export default useCreatePost;
