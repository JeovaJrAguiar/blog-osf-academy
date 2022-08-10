import axios from "axios";
import { useEffect , useState } from "react"
import endpoints from "../config/endpoints";

const useUsers = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get(endpoints.getUsers, {params: {email: "jeova.junior897@gmail.com"}})
            .then(
                result => (setUser(result.data))
            )
    }, []);

    return user;
}

export default useUsers;