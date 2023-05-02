const axios = require("axios");
const secretHeader = { Authorization: "Bearer aSuperSecretKey" };

module.exports = async (req, res) => {
  // Getting all the secret files
  const secretFiles = await axios({
    method: "get",
    url: "https://echo-serv.tbxnet.com/v1/secret/files",
    headers: secretHeader,
  });
  const response = secretFiles.data.files;
  res.json(response);
};
