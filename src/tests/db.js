const mongoose = require('mongoose');
const Rcfe = require('../models/rcfe');

const communityOneId = new mongoose.Types.ObjectId();
const communityOne = {
  _Id: communityOneId,
};

const setupDatabase = () => {
  
}

module.exports = {
  communityOneId,
  communityOne,
};
