import './App.css';
import Cards from './components/cards/Cards';
import BotonMusic from './components/Botonmusic/BotonMusic'
import Nav from './components/Nav/Nav'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { BrowserRouter,Route, Routes,useLocation, useNavigate} from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form/Form'
const EMAIL = 'aquinoedissonfacundo@gmail.com';
const PASSWORD = '123456';

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

      const navigate = useNavigate();
      const [access, setAccess] = useState(false);
     
      
      const login = (userData) => {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         axios(URL + `?email=${email}&password=${password}`)
         .then(({ data }) => {
            const { access } = data;
            setAccess(access);
            access && navigate('/home');
         });
      }



      useEffect(() => {
         !access && navigate('/');
      }, [access]);

      const {pathname} = useLocation()
  
   return (

      <div className='App'>
      <BotonMusic      />
         

       
       {pathname!=='/' ? <Nav onSearch ={onSearch}/> :''}

       <Routes>
         <Route path='/'element={<Form login= {login}/>}   />
        <Route path="/home" exact element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/detail/:id" exact element={<Detail />} />
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





   