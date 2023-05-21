
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const [character, setCharacter] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div>
    <h1>Detalles del personaje:</h1>
      <p>Nombre: {character.name}</p>
      <p>Especie: {character.species}</p>
      <p>Estado: {character.status}</p>
      <p>Género: {character.gender}</p>
      <p>Origen: {character.origin?.name}</p>
      <img src={character.image} alt={character.name} />
    </div>
  );
};

export default Detail; 