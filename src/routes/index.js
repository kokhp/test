import express from 'express';

import salesRoutes from './sales';

const app = express();

/* routes */

app.use('/sales', salesRoutes);

module.exports = app;
