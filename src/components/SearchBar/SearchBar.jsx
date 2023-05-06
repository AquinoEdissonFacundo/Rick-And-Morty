import React, { useState } from 'react';

const SearchBar = ({onSearch}) =>{
  const [id, SetId] = useState('');

  const handleOnChange = (event) => {
    SetId(event.target.value);
  };


  return (
    <div>
      <input type="text" onChange={handleOnChange}value={id} />
      <button onClick={()=>{onSearch(id)}}>Agregar card</button>
    </div>
  );
};
export default SearchBar