import pool from '../models/db'; 
import AppError from '../utils/appError';
import { Product } from '../interfaces';

type ProductBody = {
    id: string;
    title: string;
    price: number;
    description: string;
};

class ProductService {
    constructor() {}

    // Fetch all products
    async findAll(): Promise<{ products: Product[] }> {
        try {
            const [rows] = await pool.query('SELECT * FROM productsContent;');
            const products = rows as Product[];
            return { products };
        } catch (error) {
            throw new AppError('Failed to fetch products', 500);
        }
    }

    // Filter products by query
    async filterByQuery(filterQuery: string): Promise<Product[]> {
        try {
            const { products } = await this.findAll();
            const propertiesToFilter = filterQuery.split(',');

            const filteredProducts = products.map(product => {
                const filteredProduct: any = {};
                propertiesToFilter.forEach(property => {
                    if (product.hasOwnProperty(property as keyof Product)) {
                        filteredProduct[property] = product[property as keyof Product];
                    }
                });
                return { id: product.id, ...filteredProduct };
            });

            return filteredProducts;
        } catch (error) {
            throw new AppError('Failed to filter products', 500);
        }
    }

    // Get product by ID (now id is a string)
    async getProductById(productId: string): Promise<Product | undefined> {
        try {
            const { products } = await this.findAll();
            console.log(productId);
            const product = products.find((product) => product.id === productId);
            if (!product) {
                throw new AppError('Product not found', 404);
            }
            return product;
        } catch (error) {
            throw new AppError(`Failed to fetch product with ID ${productId}`, 500);
        }
    }

    // Create a new product
    async createProduct(productBody: ProductBody): Promise<ProductBody> {
        try {
            const { id, title, price, description } = productBody;
            await pool.query(
                'INSERT INTO productsContent (id, title, price, description) VALUES (?, ?, ?, ?)',
                [id, title, price, description]
            );

            return productBody;
        } catch (error) {
            throw new AppError('Failed to create product', 500);
        }
    }

    // Update a product by index (id as string)
    async updateProductByIndex(index: number, productBody: ProductBody): Promise<void> {
        try {
            const { products } = await this.findAll();
            const product = products[index];
            if (!product) {
                throw new AppError('Product not found', 404);
            }

            const updatedProduct = { ...product, ...productBody };
            await pool.query(
                'UPDATE productsContent SET title = ?, price = ?, description = ? WHERE id = ?',
                [updatedProduct.title, updatedProduct.price, updatedProduct.description, product.id]
            );
        } catch (error) {
            throw new AppError('Failed to update product', 500);
        }
    }

    // Delete a product (id as string)
    async deleteProduct(productId: string): Promise<void> {
        try {
            const { products } = await this.findAll();
            const product = products.find((p) => p.id === productId);

            if (!product) {
                throw new AppError('Product not found', 404);
            }

            await pool.query('DELETE FROM productsContent WHERE id = ?', [productId]);
        } catch (error) {
            throw new AppError('Failed to delete product', 500);
        }
    }
}

export default ProductService;
