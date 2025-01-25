import mongoose from 'mongoose';
import Turno from '../schemas/turnosSchema.js';


class turnosModel {

  async create(turno) {
      // const coleccionTurnos = dbClient.db.collection('turnos');
      // return await coleccionTurnos.insertOne(turno)
      return await Turno.create(turno);
  }

  async update(id, turno) {
    // const coleccionTurnos = dbClient.db.collection('turnos');
    // return await coleccionTurnos.deleteOne({_id: new ObjectId(id)}, {$set: turno});
    return await Turno.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(id)}, {$set: turno});
  }

  async delete(id) {
    // const coleccionTurnos = dbClient.db.collection('turnos');
    // return await coleccionTurnos.deleteOne({_id: new ObjectId(id)});
    return await Turno.findOneAndDelete({ _id: new mongoose.Types.ObjectId(id)});
  }

  async getAll() {
    // const coleccionTurnos = dbClient.db.collection('turnos');
    // return await coleccionTurnos.find({}).toArray();
    return await Turno.find();
  }

  async getOne(id) {
    // const coleccionTurnos = dbClient.db.collection('turnos');
    // return await coleccionTurnos.findOne({_id: new ObjectId(id)});
    return await Turno.findById(id);
  }
}

export default new turnosModel();