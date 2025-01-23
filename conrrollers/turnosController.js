
class turnosController {
  constructor() {

  }

  async create(req, res) {
    try {
      res.status(201).json({status: 'Create Ok'});
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async update(req, res) {
    try {
      res.status(201).json({status: 'Update Ok'});
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async delete(req, res) {
    try {
      res.status(201).json({status: 'Delete Ok'});
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getAll(req, res) {
    try {
      res.status(201).json({status: 'Get All Ok'});
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getOne(req, res) {
    try {
      res.status(201).json({status: 'GetOne Ok'});
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default new turnosController();