const express = require('express');
const productControllers = require('../../controllers/products.controller');
const limiter = require('../../middleware/limiter');
const viewCount = require('../../middleware/viewCount');
const router = express.Router();
/**
 * @api {get} /product all product
 * @apiDescrition Get all the product
 * @apiPermisiion admin
 * 
 * @apiHeader {String} authorization User's access token
 * @apiParams {Number {1-}}
 * @apiSuccess {Object[] all the product}
 * @apiError (Unauthorize 401)
 */

router.route("/").get(productControllers.getAllProducts).post(productControllers.postAProducts)

router.route("/:id").get(viewCount, limiter, productControllers.getAProductsDetails).patch(productControllers.patchAProducts).delete(productControllers.deleteAProducts)


module.exports = router;