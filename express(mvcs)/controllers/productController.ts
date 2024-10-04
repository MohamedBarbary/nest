import { Request, Response, NextFunction } from "express";
import ProductService from "../services/productService";
import catchAsync from "../utils/catchAsync";
import AppError from "../utils/appError"; 

class ProductController {
    constructor(private productService: ProductService) {}

    getProducts = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const filterQuery: string = req.query.filter as string;

        if (filterQuery) {
            const filteredProducts = await this.productService.filterByQuery(filterQuery);
            return res.send(filteredProducts);
        }

        const products = await this.productService.findAll();
        return res.send(products);
    });

    getProductById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const productId = req.params.id;

        const product = await this.productService.getProductById(productId);

        if (!product) 
            return next(new AppError("Product not found", 404)); 
        

        return res.send(product);
    });

    createProduct = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const productBody = req.body;
        const newProduct = await this.productService.createProduct(productBody);

        if (!newProduct) 
            return next(new AppError("Failed to create product", 500)); 
        

        return res.status(201).send(newProduct);
    });

    updateProduct = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const productId = req.params.id;


        const productIndex = (await this.productService.findAll()).products.findIndex(
            (product) => product.id === productId
        );

        if (productIndex === -1) 
            return next(new AppError("Product not found", 404)); 
        

        const productBody = req.body;
        await this.productService.updateProductByIndex(productIndex, productBody);

        return res.status(200).send({ message: "Product has been updated!" });
    });

    deleteProduct = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const productId = req.params.id;

        

        const productIndex = (await this.productService.findAll()).products.findIndex(
            (product) => product.id === productId
        );

        if (productIndex === -1) 
            return next(new AppError("Product not found", 404)); 
        

        await this.productService.deleteProduct(productId);
        return res.status(200).send({ message: "Product has been deleted!" });
    });
}

export default ProductController;
