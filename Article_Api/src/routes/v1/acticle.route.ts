import express from "express";
const router = express.Router();
import articlesController from "../../controllers/acticle.controller";

router.get("/articles", articlesController.getAll);
router.get("/articles/:id", articlesController.getById);
router.post("/articles", articlesController.create);

export default router;