function getLivros(req, res) {
  try {
    //esse throw new Error, faz com que um erro aconteça, assim o catch é emitido
    throw new Error("teste");
    res.send("Olá, toma ta");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getLivros,
};
