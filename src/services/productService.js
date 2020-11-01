import "./productService.css";
import axios from 'axios';

class ProductService {

  serverUrl ="http://fsdi.azurewebsites.net/api";

    async getProducts () {
        const resp = await axios.get(this.serverUrl + '/products');
        console.log(resp);
        return resp.data;
    }
}

export default ProductService;