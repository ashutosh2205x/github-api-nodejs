const constants = require("../constants/constants");

const generateOptions = (_path) => {
  return (options = {
    hostname: constants.hostname,
    path: _path,
    headers: {
      "User-Agent": constants.user_agent,
    },
    OAUth: process.env.ACCESS_TOKEN,
  });
};

module.exports = { generateOptions };
