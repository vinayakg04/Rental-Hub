const express=require("express")

const {getAllProducts,createProduct,updateProducts, deleteProduct, getProductDetails, createProductReview,getProductReviews,deleteReview, getAdminProducts,updateRent}=require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles} = require("../middleware/auth");

const router=express.Router();



router.route("/products").get( getAllProducts)
router.route("/admin/product/new").post( isAuthenticatedUser,authorizeRoles("admin"), createProduct)
router.route("/admin/product/:id").put( isAuthenticatedUser,authorizeRoles("admin"),updateProducts).delete( isAuthenticatedUser,authorizeRoles("admin"),deleteProduct)

router.route("/product/:id").get(getProductDetails)

router
  .route("/admin/products")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);

// create or update reviews
router.route("/review").put(isAuthenticatedUser, createProductReview);


router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthenticatedUser, deleteReview);

  router.route('/products/:id').post(updateRent);

module.exports=router;