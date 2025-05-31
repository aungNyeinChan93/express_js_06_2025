import axios from "axios";

export const getPosts = async () => {
    const { data } = await axios.get('http://localhost:3000/posts');
    return data;
};

// const data = await getPosts();
// console.log(data);

