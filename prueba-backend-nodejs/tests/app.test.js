const request = require('supertest');
const app = require('../src/app');

describe('API Tests', () => {
  describe('GET /api/health', () => {
    it('should return status OK', async () => {
      const response = await request(app)
        .get('/api/health')
        .expect(200);
      
      expect(response.body.status).toBe('OK');
    });
  });

  describe('GET /api/productos', () => {
    it('should return all products', async () => {
      const response = await request(app)
        .get('/api/productos')
        .expect(200);
      
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });

  describe('GET /api/productos/:id', () => {
    it('should return a product by id', async () => {
      const response = await request(app)
        .get('/api/productos/1')
        .expect(200);
      
      expect(response.body.id).toBe('1');
      expect(response.body.nombre).toBeDefined();
    });

    it('should return 404 for non-existent product', async () => {
      await request(app)
        .get('/api/productos/999')
        .expect(404);
    });
  });

  describe('POST /api/productos', () => {
    it('should create a new product', async () => {
      const newProduct = {
        nombre: 'Producto Test',
        precio: 100.99,
        categoria: 'test',
        stock: 10,
        descripcion: 'Producto para testing'
      };

      const response = await request(app)
        .post('/api/productos')
        .send(newProduct)
        .expect(201);
      
      expect(response.body.nombre).toBe(newProduct.nombre);
      expect(response.body.id).toBeDefined();
    });

    it('should return 400 for invalid product data', async () => {
      const invalidProduct = {
        nombre: 'Producto Incompleto'
        // faltan campos requeridos
      };

      await request(app)
        .post('/api/productos')
        .send(invalidProduct)
        .expect(400);
    });
  });
});
