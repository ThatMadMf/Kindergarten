const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const fs = require('fs');

const logFile = process.env.LOG_FILE || '../../logs.txt';

module.exports = function (app) {
  app.use(logger('common', {
    stream: fs.createWriteStream(logFile, { flags: 'a' })
  }));
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(cors());
};