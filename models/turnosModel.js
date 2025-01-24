import { ObjectId } from "mongodb";
import dbClient from "../config/dbClient.js";

class turnosModel {

  async create(turno) {
      const coleccionTurnos = dbClient.db.collection('turnos');
      return await coleccionTurnos.insertOne(turno)
  }

  async update(id, turno) {
    const coleccionTurnos = dbClient.db.collection('turnos');
    return await coleccionTurnos.deleteOne({_id: new ObjectId(id)}, {$set: turno});
  }

  async delete(id) {
    const coleccionTurnos = dbClient.db.collection('turnos');
    return await coleccionTurnos.deleteOne({_id: new ObjectId(id)});
  }

  async getAll() {
    const coleccionTurnos = dbClient.db.collection('turnos');
    return await coleccionTurnos.find({}).toArray();
  }

  async getOne(id) {
    const coleccionTurnos = dbClient.db.collection('turnos');
    return await coleccionTurnos.findOne({_id: new ObjectId(id)});
  }
}

export default new turnosModel();