function status(require, response) {
  response
    .status(200)
    .json({ chave: "O matheus vai conseguir aprender programação" });
}

export default status;
