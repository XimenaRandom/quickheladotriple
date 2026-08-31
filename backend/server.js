const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'quickuser',
  password: process.env.DB_PASSWORD || 'quickpassword',
  database: process.env.DB_NAME || 'tienda',
  waitForConnections: true,
  connectionLimit: 10
});

// Endpoint catálogo
app.get('/api/productos', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM producto');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Endpoint dashboard
app.get('/api/dashboard', async (req, res) => {
  try {
    const [[total]] = await pool.query('SELECT COUNT(*) as total FROM producto');
    const [[promedio]] = await pool.query('SELECT AVG(precio) as promedio FROM producto');
    const [minimo] = await pool.query('SELECT * FROM producto ORDER BY precio ASC LIMIT 1');
    const [maximo] = await pool.query('SELECT * FROM producto ORDER BY precio DESC LIMIT 1');
    const [tresEconomicos] = await pool.query('SELECT * FROM producto ORDER BY precio ASC LIMIT 3');
    const [cincoMasVendidos] = await pool.query('SELECT * FROM producto ORDER BY unidades_vendidas DESC LIMIT 5');
    const [[stockTotal]] = await pool.query('SELECT SUM(stock) as stock_total FROM producto');

    res.json({
      totalProductos: total.total,
      precioPromedio: parseFloat(promedio.promedio || 0).toFixed(2),
      productoEconomico: minimo,
      productoCostoso: maximo,
      tresEconomicos,
      cincoMasVendidos,
      stockTotal: stockTotal.stock_total || 0
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log('Backend corriendo en el puerto 3000'));