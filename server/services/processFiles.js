const axios = require("axios");
const secretHeader = { Authorization: "Bearer aSuperSecretKey" };

module.exports = async (req, res) => {
  const response = {
    errors: [],
    files: [],
  };

  // Getting all the secret files
  const secretFiles = await axios({
    method: "get",
    url: "https://echo-serv.tbxnet.com/v1/secret/files",
    headers: secretHeader,
  });
  const filesNames = secretFiles.data.files;
  // Foe each of them, get the data
  for (let file of filesNames) {
    try {
      const csvData = await axios({
        method: "get",
        url: `https://echo-serv.tbxnet.com/v1/secret/file/${file}`,
        headers: secretHeader,
      });
      const f = csvData.data.split("\n");
      const headers = f.shift().split(",");
      const json = [];
      f.forEach(function (d) {
        // Loop through each row
        const tmp = {};
        const row = d.split(",").filter((elm) => elm);
        if (headers.length === row.length) {
          for (let i = 0; i < headers.length; i++) {
            tmp[headers[i + 1]] = row[i + 1];
          }
          // Add object to list
          json.push(tmp);
        }
      });
      if (json.length) {
        response.files.push({
          file: file,
          lines: json,
        });
      } else {
        response.errors.push(`The file ${file} has not all necessary values.`);
      }
    } catch (e) {
      response.errors.push(`The file ${file} is broken.`);
    }
  }
  res.json(response);
};
