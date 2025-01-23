import 'dotenv/config';
import { MongoClient } from "mongodb";

class dbClient {
  constructor() {
    const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@${process.env.SERVER_DB}/?retryWrites=true&w=majority&appName=asignacion`;
    this.client = new MongoClient(queryString);
    this.connectarBD();
  }

  async connectarBD() {
    try {
      await this.client.connect();
      this.db = this.client.db('asignacion');
      console.log("Conectado al Servidor de MongoDB wacho!");
    } catch (error) {
      console.error(error);
    }
  }
}

export default new dbClient();
