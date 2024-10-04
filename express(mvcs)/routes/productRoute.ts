import { Router } from "express";
import ProductService from "../services/productService";
import ProductController from "../controllers/productController";

const productRouter = Router();


const productService = new ProductService();
const {getProducts,createProduct,getProductById,updateProduct,deleteProduct} = new ProductController(productService);

productRouter.route('/').get(getProducts).post(createProduct);
productRouter.route('/:id').get(getProductById).post(updateProduct).delete(deleteProduct);

export default productRouter;