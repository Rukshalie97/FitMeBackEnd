import express from 'express';
import connect from './database.js';
import cors from 'cors';
import userRoutes from './routes/user.js'
import cookieParser from 'cookie-parser';
import categoryRoutes from './routes/category.js';
import exerciseRoutes from './routes/exercise.js';
import levelRoutes from './routes/level.js'

const app = express();
const PORT = 5003;

app.use(cookieParser());
app.use(cors());
app.use(express.json());

//User Routes
app.use('/api/user', userRoutes);

//Category Routes
app.use('/api/category', categoryRoutes);

//Exercise Routes
app.use('/api/exercise', exerciseRoutes);

//Level Routes
app.use('/api/level', levelRoutes);




app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 'Something went wrong!';
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

const start = async () => {
  try {
    await connect();
    app.listen(PORT, () =>
      console.log(`Server running on port: http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
