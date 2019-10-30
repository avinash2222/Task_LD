const express = require('express');
const morgan = require('morgan');
const rfs = require('rotating-file-stream');
const helmet = require('helmet');

const userRouter = require('./server/routes');
const { errorHandler } = require('./server/middleware');

const app = express();

app.use(morgan('combined', {
  stream: rfs('access.log', {
    path: `${process.env.LOG_PATH}/logs`,
    compress: 'gzip',
    interval: '1d',
    maxFiles: 10,
  }),
}));

// ============== configure app to use bodyParser()================
app.use(express.urlencoded({
  extended: true,
}));

app.use(express.json({
  limit: '15mb',
}));

// =============== Security
app.use(helmet());


//= ==========Registering Router==========
app.use('/user/v1/', userRouter);

//= ======ERROR Handler
app.use(errorHandler);

module.exports = app;
