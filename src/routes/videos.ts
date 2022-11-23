import { Request, Response, Router } from "express"
import * as videoService from "../services/videos"

const router = Router()

/**
 * http://localhost:3002/videos [GET]
 */
router.get('/', async (req: Request, res: Response) => {
  try {
    const data = await videoService.index()
    res.status(200).json(data)
  } catch (err) {
    res.status(500).send(err.message) 
  }
})

//TODO: implement unique slug-title-souce-etc
router.post('/create', async (req: Request, res: Response) => {
  try {
    const { body } = req
    await videoService.create(body)
    res.status(201).json(body.slug)
  } catch (err) {
    res.status(400).send(err.message)
  }
})

router.put('/edit/:id', async ({params, body}: Request, res: Response) => {
  try {
    // const { id: string } = params
    const edited = await videoService.edit(params['id'], body)
    res.status(200).json({edited})
  } catch (err) {
    res.status(401).send(err.message)
  }
})

router.delete('/delete/:id', async ({params}: Request, res: Response) => {
  try {
    const { id } = params
    const deleted = await videoService.drop(id)
    res.status(200).send(`Deleted`)
  } catch (err) {
    res.status(404).send(err.message)
  }
})

export default router