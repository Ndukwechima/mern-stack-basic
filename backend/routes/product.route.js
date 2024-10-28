import express from "express";
const router = express.Router();
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";

//  DONE: Get all products
router.get("/", getProducts);

//  DONE: Created post new product Endpoint
router.post("/", createProduct);

//  DONE: Update a product
router.put("/:id", updateProduct);

//  DONE: Created delete new product Endpoint
router.delete("/:id", deleteProduct);

export default router;
