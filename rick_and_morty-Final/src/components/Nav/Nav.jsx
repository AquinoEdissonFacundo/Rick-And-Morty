import SearchBar from '../SearchBar/SearchBar'
import style from './nav.module.css'
import {Link} from 'react-router-dom'
const Nav = (props) =>{
    return(
      
        <div className={style.Nav}>
         
        <SearchBar onSearch={props.onSearch} />
        <button>
            <Link to='/about'>About</Link>
        </button>

        <button>
            <Link  to='/home'>home</Link>
        </button>
        <button>log out</button>
        </div>
    )
}
export default Nav