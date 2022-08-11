const host = "https://academy-julho-backend.vercel.app"

const endpoints = {
    getUsers: `${host}/api/users`, // return the user identified by the email
    getPosts: `${host}/api/posts`, // return all posts
    /*getPostAllData: (id) => {`${host}/posts/${id}`},*/

    postComment: `${host}/api/comments`,
    postPost: `${host}/api/hosts`
};

export default endpoints;
