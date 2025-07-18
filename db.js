// Importo mongoose para manejar la conexión a MongoDB
const mongoose = require('mongoose');
// Cargo las variables de entorno desde el archivo .env
require('dotenv').config();

// Conecto a la base de datos usando la URI definida en el archivo .env
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true, // Uso el nuevo parser de URL
  useUnifiedTopology: true // Uso el nuevo engine de topología
});

// Evento que se dispara cuando la conexión es exitosa
mongoose.connection.on('connected', () => {
  console.log('MongoDB conectado');
});

// Evento que se dispara si ocurre un error en la conexión
mongoose.connection.on('error', (err) => {
  console.error('Error de conexión a MongoDB:', err);
});

// Exporto la instancia de mongoose para usarla en otras partes del proyecto
module.exports = mongoose; 