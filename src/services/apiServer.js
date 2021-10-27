import axios from "axios";


export class ApiServer {
    constructor(BASE_URL, API_KEY) {
        this.BASE_URL = BASE_URL;
        this.API_KEY = API_KEY;
        this._searchQuery = '';
        this.page = 1;
    }
    get searchQuery() {
        return this._searchQuery;
    };
    set searchQuery(value) {
        return (this._searchQuery = value);
    };

    searchImages() {
        axios.defaults.baseURL = this.BASE_URL;

        let params = `?q=${this.searchQuery}&page=${this.page}&key=${this.API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

        return axios.get(params)
        .then(res => {
            // console.log(res);
            return res.data;
        })
        .then(data => {
            // console.log(data);
            return data.hits;
        })
        .catch(error => {
            console.log(error);
        });
    }
}


// export function ApiServerFunc() {
//     const BASE_URL = 'https://pixabay.com/api/';
//     const API_KEY = '23238437-0207b31bcaea78a79b03733f3';
    
//     axios.defaults.baseURL = this.BASE_URL;

//     const searchImages = (searchQuery, curPage) => {
//         axios.defaults.baseURL = this.BASE_URL;

//         let params = `${BASE_URL}?q=${searchQuery}&page=${curPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

//         axios.get(params)
//         .then(res => {
//             console.log(res);
//         })
//         .catch(error => {
//             console.log(error);
//         });
//     }
// }