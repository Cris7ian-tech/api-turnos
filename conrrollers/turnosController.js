import turnosModel from '../models/turnosModel.js';


class turnosController {
  constructor() {

  }

  async create(req, res) {
    try {
      const data = await turnosModel.create(req.body);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async update(req, res) {
    try {
      const {id} = req.params;
      const data = await turnosModel.update(id, req.body);
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  async delete(req, res) {
    try {
      const {id} = req.params;
      const data = await turnosModel.delete(id);
      res.status(206).json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getAll(req, res) {
    try {
      const data = await turnosModel.getAll();
      res.status(201).json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getOne(req, res) {
    try {
      const {id} = req.params;
      const data = await turnosModel.getOne(id);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default new turnosController();