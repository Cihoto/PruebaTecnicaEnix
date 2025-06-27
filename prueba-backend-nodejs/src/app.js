const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Base de datos simulada
let productos = [
  {
    id: '1',
    nombre: 'Laptop Dell XPS 13',
    precio: 1200.99,
    categoria: 'tecnologia',
    stock: 15,
    descripcion: 'Laptop ultradelgada con procesador Intel i7'
  },
  {
    id: '2',
    nombre: 'iPhone 14 Pro',
    precio: 999.99,
    categoria: 'tecnologia',
    stock: 8,
    descripcion: 'Smartphone Apple con cámara pro de 48MP'
  },
  {
    id: '3',
    nombre: 'Libro: Clean Code',
    precio: 45.99,
    categoria: 'libros',
    stock: 25,
    descripcion: 'Guía para escribir código limpio y mantenible'
  },
  {
    id: '4',
    nombre: 'Mesa de Oficina',
    precio: 299.99,
    categoria: 'muebles',
    stock: 5,
    descripcion: 'Mesa ergonómica para oficina en casa'
  },
  {
    id: '5',
    nombre: 'Auriculares Sony WH-1000XM4',
    precio: 329.99,
    categoria: 'tecnologia',
    stock: 12,
    descripcion: 'Auriculares inalámbricos con cancelación de ruido'
  }
];

// TODO: Implementar las siguientes rutas API

// 1. GET /api/productos - Obtener todos los productos
// Implementar paginación opcional (query params: page, limit)

// 2. GET /api/productos/:id - Obtener un producto por ID

// 3. GET /api/productos/categoria/:categoria - Filtrar productos por categoría

// 4. POST /api/productos - Crear un nuevo producto
// Validar que todos los campos requeridos estén presentes

// 5. PUT /api/productos/:id - Actualizar un producto existente

// 6. DELETE /api/productos/:id - Eliminar un producto

// 7. GET /api/productos/buscar?q=termino - Buscar productos por nombre

// Ruta de prueba (ya implementada)
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'API funcionando correctamente',
    timestamp: new Date().toISOString()
  });
});

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Error interno del servidor',
    message: err.message 
  });
});

// Middleware para rutas no encontradas
app.use('*', (req, res) => {
  res.status(404).json({ 
    error: 'Ruta no encontrada',
    path: req.originalUrl 
  });
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
  console.log(`API Health Check: http://localhost:${PORT}/api/health`);
});

module.exports = app;
