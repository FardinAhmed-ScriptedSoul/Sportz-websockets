// src/app.js
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

// Global Middleware Config Matrix
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());

// Baseline Baseline API Connection Health Check Endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'online',
        message: 'The local engine is responsive and executing cleanly.'
    });
});



// Global Fail-Safe Error Handling Catch Block Middleware
app.use((err, req, res, next) => {
    console.error('❌ Server execution context captured a runtime fault:', err.stack);
    res.status(err.status || 500).json({
        status: 'failed',
        message: err.message || 'An internal infrastructure engine exception occurred.'
    });
});

export default app;