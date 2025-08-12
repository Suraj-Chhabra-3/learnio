import express, { application, json } from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js';
import { clerkWebhooks, stripeWebHooks } from './controllers/webhooks.js';
import educatorRouter from './routes/educatorRoutes.js';
import { clerkMiddleware } from '@clerk/express';
import connectCloudinary from './configs/cloudinary.js';
import courseRouter from './routes/courseRoute.js';
import userRouter from './routes/userRoutes.js';

// initialize the server
const app = express();

// connect data-base
await connectDB();
await connectCloudinary();

const allowedOrigins = ['http://localhost:5173', '']

// middlewares
app.use(cors({origin : allowedOrigins, credentials: true}));
app.use(clerkMiddleware()); // add 'auth' property to the req object

// routes 
app.get('/', (req, res) =>  res.send("API is working sir.") )
app.post('/clerk', express.json(), clerkWebhooks);
app.use('/api/educator', express.json(), educatorRouter) 
app.use('/api/course', express.json(), courseRouter);
app.use('/api/user', express.json(), userRouter);
app.post('/stripe', express.raw({type: 'application/json'}), stripeWebHooks)

// port
const PORT = process.env.PORT || 5000

app.listen(PORT, (req, res) => {
    console.log(`server is running on port ${PORT}`);
})