import express from 'express'
import { create, update, createView, homeView, updateView, deleteDoc } from '../controller/controller.js'
const router = express.Router();

//Home route
router.get('/', homeView);

// Add view route
router.get('/add', createView);

// Update view route
router.get('/update/:id', updateView);


/*================== Route API For Crud Opr  ========================*/
router.post('/add', create);
router.put('/update/:id', update);
router.delete('/:id', deleteDoc);


export { router };