import { Router } from "express";
import {verifyJWT} from "../middlewares/auth.middleware.js"
import { getChannelStats, getChannelVideos } from "../controllers/dashboard.controller.js";

const router=new Router()
router.use(verifyJWT)

router.route("/stats").get(getChannelStats)
router.route("/videos").get(getChannelStats)

export default router