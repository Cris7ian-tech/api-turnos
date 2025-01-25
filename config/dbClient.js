import 'dotenv/config';
import { MongoClient } from "mongodb";
import mongoose from 'mongoose';

class dbClient {
  constructor() {
    this.conectarBaseDtaos();
  }
  
  async conectarBaseDtaos() {
    
    const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@${process.env.SERVER_DB}/asignacion?retryWrites=true&w=majority`;    
    await mongoose.connect(queryString)
    console.log("Conectado a la base de datos Asignacion/Turnos");
  }

  async cerrarConexion() {
    try {
      await mongoose.disconnect();
    } catch (error) {
      console.log("Error al cerrar la conexion con la base de datos");
    }
  }
}



export default new dbClient();
