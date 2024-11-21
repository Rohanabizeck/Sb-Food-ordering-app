import express from "express";
import { param } from "express-validator";
import RestaurantController from "../controllers/RestaurantController";

const router = express.Router();

router.get(
  "/:restaurantId",
  param("restaurantId")
    .isString()
    .trim()
    .notEmpty()
    .withMessage(""),
  RestaurantController.getRestaurant
);
// /api/restaurant/ search/london
router.get(
  "/search/:district",
  param("district")
    .isString()
    .trim()
    .notEmpty()
    .withMessage(""),
  RestaurantController.searchRestaurant
);

export default router;
