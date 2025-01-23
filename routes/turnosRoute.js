import express from 'express';

const route = express.Router();

import turnosController from '../conrrollers/turnosController.js';


route.post('/', turnosController.create);
route.get('/:id', turnosController.getOne);
route.get('/', turnosController.getAll);
route.put('/:id', turnosController.update);
route.delete('/:id', turnosController.delete);

export default route;
