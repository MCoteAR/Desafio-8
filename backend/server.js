import express from 'express';
import cors from 'cors';

const app = express();
const port = 5001;

// Middleware para manejar CORS
app.use(cors());

// Respuesta para la raíz
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de Pizzas');
});

// Endpoint GET /api/pizzas
app.get('/api/pizzas', (req, res) => {
  res.json([
    { id: 1, name: 'Margarita', price: 10, ingredients: ['Tomate', 'Queso'] },
    { id: 2, name: 'Pepperoni', price: 12, ingredients: ['Pepperoni', 'Queso'] },
  ]);
});

// Middleware para rutas no definidas
app.use((req, res, next) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
