import axios from "axios";

const testAxios = async () => {
    const response = await axios.get('http://localhost:4000/api/posts');
    console.log(response.status);
    if (response.status !== 200) {
        console.log(`Error status - ${response.status} || ${response.statusText}`);

    }

}

await testAxios();