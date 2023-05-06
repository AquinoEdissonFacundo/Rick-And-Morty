import './App.css';
import Cards from './components/cards/Cards';
import BotonMusic from './components/Botonmusic/BotonMusic'
import Nav from './components/Nav/Nav'
import { useState } from 'react';
import axios from 'axios'
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Deatil from './components/Deatil';
function App() {
   



   
   const [characters, setCharacters] = useState([]);
      console.log (characters)
 
      function onSearch(id) {
         axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         // Buscar si el personaje ya está en el array
         const characterExists = characters.find(char => char.id === data.id);
         if (characterExists) {
            window.alert('¡Este personaje ya está en pantalla!');
         } else {
            setCharacters(oldChars => [...oldChars, data]);
         }
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   })
      }
   
      const onClose =(id)=>{
         setCharacters(
         characters.filter((char)=>{
         return char.id !==id
         })
        )
      };
  
   return (

      <div className='App'>
       <Nav onSearch={onSearch}/>
     
       <BotonMusic      />
        
       <Routes>
         <Route path='/home' element={  <Cards characters={characters} onClose={onClose}/>} /> 
         <Route path='/about' element={<About/>} />
        <Route path='/detail/:id'element={Deatil}/>
       </Routes>
     
        
      </div>
   );
}

export default App;


/*     <button onClick={onSearch}>Add Character</button>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.name}{character.imagen}</li>
        ))}
      </ul>  */


      /*  const onSearch = (id) => {
      console.log(id)
      
     setCharacters([...characters, example]);
   }; 
   const handleOnClose = () => {
      window.alert('Se cerró la tarjeta');}
   
   */

      // import characters, { Rick } from './data.js';
