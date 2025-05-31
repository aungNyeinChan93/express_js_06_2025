import axios from "axios";

export const getPosts = async () => {
    const { data } = await axios.get('http://localhost:3000/posts');
    return data;
};
export const createPost = async (newPost) => {
    const { data } = await axios.post(`http://localhost:3000/posts`, newPost);
    return newPost;
}

export const getPost = async (id) => {
    const { data } = await axios.get(`http://localhost:3000/posts/${id}`);
    return data;
}

export const updatePost = async (id, newPostData) => {
    const response = await axios.put(`http://localhost:3000/posts/${id}`, newPostData);
    if (response.status !== 200) {
        throw new Error('Post not Found!')
    }
    return response.data;
}


export const destroyPost = async (id) => {
    const response = await axios.delete(`http://localhost:3000/posts/${id}`);
    if (response.status !== 200) {
        throw new Error('Post not Found!')
    }
    return response.data;
}

// const data = await getPosts();
// console.log(data);

