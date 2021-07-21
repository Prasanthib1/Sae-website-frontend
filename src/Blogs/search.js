import * as FaIcons from 'react-icons/fa';
import './Blogsmain.css'

const SearchBar = ({onChange, placeholder}) => {
  return (
    <div className="Search">
      <form>
       <div class="search-wrapper">
       <span className="SearchSpan">
         <FaIcons.FaSearch />
       </span>
	     <input type="text" name="focus" required class="search-box" placeholder={placeholder} onChange={onChange}/>
		   <button class="close-icon" type="reset" onclick="document.location.reload()"></button>   
       </div>
       </form>
    </div>
  );
};

export default SearchBar