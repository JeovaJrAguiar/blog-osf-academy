const host = "https://academy-julho-backend.vercel.app"

const endpoints = {
    getUsers: `${host}/api/users`, // return the user identified by the email
    getPosts: `${host}/api/posts`, // return all posts
    getPostAllData: (id) => `${host}/api/posts/${id}`,

    createComment: `${host}/api/comments`,
    createPost: `${host}/api/posts`
};

export default endpoints;
