import "dotenv/config";
import express from 'express';
import turnosRoute from './routes/turnosRoute.js';
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/turnos', turnosRoute);

try {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, ()=> console.log(`Servidor Tamo Activo Wacho! y corriendo en puerto ${PORT}`));
} catch (error) {
  console.log("error al intentar conectar con el servidor")
}

