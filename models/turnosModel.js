import dbClient from "../config/dbClient.js";

class turnosModel {

  async create(turno) {
      const coleccionTurnos = dbClient.db.collection('turnos');
      await coleccionTurnos.insertOne(turno)
  }
}

export default new turnosModel();