import "dotenv/config";
import express from 'express';
import turnosRoute from './routes/turnosRoute.js';

const app = express();

app.use('/turnos', turnosRoute);

try {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, ()=> console.log(`Servidor Tamo Activo y corriento en puerto ${PORT}`));
} catch (error) {
  console.log("error al intentar conectar con el servidor")
}

