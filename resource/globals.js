const exec = require('child_process').exec;

exports.command = function (command, callback) {
  return exec(command, callback);
};
