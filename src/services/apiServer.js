import axios from "axios";

axios.defaults.baseURL = `https://pixabay.com/api`;
const API_KEY = `23238437-0207b31bcaea78a79b03733f3`;

const fetchImages = (query = '', page = 1) => {
    return axios
        .get(
        `/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(x => new Promise(resolve => setTimeout(() => resolve(x), 1000)))   
    .then(res => res.data.hits);
};

export default fetchImages;
