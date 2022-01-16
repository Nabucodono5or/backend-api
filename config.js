const dotenv = require("dotenv");

dotenv.config();

const { GOOGLE_APPLICATION_CREDENTIALS } = process.env;

module.exports = {
  serviceAccount: GOOGLE_APPLICATION_CREDENTIALS,
};
