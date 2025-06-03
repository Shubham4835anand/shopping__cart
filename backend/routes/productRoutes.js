import express from 'express'
const router = express.Router()
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'


router.get('/top', getTopProducts)
router.get('/', getProducts);
router.post('/createProduct', admin, createProduct)
router.route('/:id/reviews').post( createProductReview)
router
  .route('/:id')
  .get(getProductById)
  .delete( admin, deleteProduct)
  .put( admin, updateProduct)

export default router
