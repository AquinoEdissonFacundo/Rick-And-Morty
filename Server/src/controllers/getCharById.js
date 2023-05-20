const axios = require('axios');

const getCharById = (res, id) => {
  axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => {
      const { name, gender, species, origin, status, image } = response.data;
      const character = {
        id,
        name,
        gender,
        species,
        origin: origin.name,
        status,
        image
      };
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify(character));
    })
    .catch(error => {
      res.writeHead(500, { "content-type": "text/plain" });
      res.end(error.message);
    });
};

module.exports = {
  getCharById
};
