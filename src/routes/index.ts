import { Router } from "express"
import videosRoutes from "./videos"

const router = Router()

router.use('/videos', videosRoutes)

export default router