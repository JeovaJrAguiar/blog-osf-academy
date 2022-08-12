import axios from "axios";
import { useEffect, useState } from "react";
import endpoints from "../config/endpoints";

const usePostsAllData = (idPost) => {
  const [posts, setPosts] = useState([]);

  useEffect(
    () => {
      axios
        .get(endpoints.getPostAllData(idPost))
        .then((result) => setPosts(result.data))},
    []
  );

  return posts;
};

export default usePostsAllData;
