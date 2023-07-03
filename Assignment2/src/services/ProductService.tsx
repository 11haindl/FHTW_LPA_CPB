import axios from "../api";

const ProductService = {

  getProductByBarcode: (barcode: string) => {
    return axios.get(`/product/${barcode}.json`);
  },
};

export default ProductService;
