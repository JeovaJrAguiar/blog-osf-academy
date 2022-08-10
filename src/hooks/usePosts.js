import axios from "axios";
import { useEffect, useState } from "react";
import endpoints from "../config/endpoints";

const usePosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(endpoints.getPosts)
            .then(
                result => (setPosts(result.data))
            )
    }, []);

    return posts;
}

export default usePosts;
