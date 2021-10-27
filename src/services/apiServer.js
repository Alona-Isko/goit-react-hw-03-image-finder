import axios from "axios";


export class ApiServer {
    constructor(BASE_URL, API_KEY) {
        this.BASE_URL = BASE_URL;
        this.API_KEY = API_KEY;
        this._searchQuery = '';
        this._page = 1;
    }

    get searchQuery() {
        return this._searchQuery;
    };
    set searchQuery(value) {
        return (this._searchQuery = value);
    };

    get page() {
        return this._page;
    };
    set page(curPage) {
        return (this._page += curPage);
    };


    async searchImages() {
        axios.defaults.baseURL = this.BASE_URL;

        let params = `?q=${this.searchQuery}&page=${this.page}&key=${this.API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

        try {
            const result = await axios.get(params);
            const data = result.data.hits;
            return data;
        } catch (error) {
            return error.message;
        }
    }
}
