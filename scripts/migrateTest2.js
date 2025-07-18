// Script para crear la estructura mínima en la base de datos 'test2' de MongoDB Atlas
// y poblarla con un documento de ejemplo en cada colección.
// Ejecuta este script con: node scripts/migrateTest2.js

require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/user');
const Personaje = require('../models/personaje');
const Battle = require('../models/battle');

async function migrate() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Conectado a MongoDB test2');

    // Crear usuario de ejemplo
    const user = new User({ username: 'admin', email: 'admin@admin.com', password: 'Admin123!', role: 'admin' });
    await user.save();
    console.log('Usuario de ejemplo creado');

    // Crear personaje de ejemplo
    const personaje = new Personaje({ nombre: 'Clark', alias: 'Superman', ciudad: 'Metropolis', team: 'Justice', rol: 'heroe' });
    await personaje.save();
    console.log('Personaje de ejemplo creado');

    // Crear batalla de ejemplo
    const battle = new Battle({ owner: 'admin', usuarios: ['admin'] });
    await battle.save();
    console.log('Batalla de ejemplo creada');

    await mongoose.disconnect();
    console.log('Migración completada y desconectado de MongoDB.');
  } catch (err) {
    console.error('Error en la migración:', err);
    process.exit(1);
  }
}

migrate(); 