import axios from "axios";
import endpoints from "../config/endpoints";

const useCreateComment = ( title , content , userId, postId) => {

  const createComment = () => {
    return axios
        .post(endpoints.createComment, {
            "title": title,
            "content": content,
            "userId": userId,
            "postId": postId
          })
    }

  return createComment;
};

export default useCreateComment;
