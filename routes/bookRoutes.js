import { Router } from 'express'
import BookController from './../controller/bookController.js'
const router = Router()

router.get('/findAllBook', BookController.findAll)
router.get('/findBookById/:id', BookController.findBookById)
router.post('/createBook', BookController.createBook)
router.put('/updateBook/:id', BookController.updateBook)
router.delete('/deleteBook/:id', BookController.deleteBookById)

export default router
