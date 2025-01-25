import mongoose from 'mongoose';

const turnosSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre del paciente es obligatorio'],
    trim: true,
  },
  apellido: {
    type: String,
    required: [true, 'El apellido del paciente es obligatorio'],
    trim: true,
  },
  edad: {
    type: Number,
    required: [true, 'La edad del paciente es obligatoria'],
    trim: true,
  },
  dni: {
    type: String,
    required: [true, 'El DNI del paciente es obligatorio'],
    trim: true,
  },
  obraSocial: {
    type: String,
    required: [true, 'La obra social del paciente es obligatoria'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'El correo electrónico es obligatorio'],
    trim: true,
    match: [/.+@.+\..+/, 'Por favor, ingresa un correo válido'],
  },
  telefono: {
    type: String,
    required: [true, 'El teléfono del paciente es obligatorio'],
    trim: true,
  },
  motivoConsulta: {
    type: String,
    required: [true, 'El motivo de consulta es obligatorio'],
    trim: true,
  },
  dolencia: {
    descripcion: {
      type: String,
      required: [true, 'La dolencia es obligatoria para asignar el turno'],
      enum: ['Consulta General', 'Pediatría', 'Cardiología', 'Traumatología', 'Dermatología'], // Dolencias válidas
    },
  },
  fechaTurno: {
    type: Date,
    required: [true, 'La fecha del turno es obligatoria'],
  },
  creadoEn: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true }
);


export default mongoose.model('turnos', turnosSchema);