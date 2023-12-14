// middleware.js

const cors = require('cors');

const configureCors = () => {
  return cors();
};

module.exports = {
  configureCors,
};
