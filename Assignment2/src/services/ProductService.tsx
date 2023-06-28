import axios from "../api";

const productService = {
    getProductByBarcode: (barcode: string) => {
        return axios.get(`/product/${barcode}.json`);
    }
}

export default productService;