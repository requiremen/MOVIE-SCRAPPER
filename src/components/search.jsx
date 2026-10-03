import React from 'react';

const Search = ({search,setsearchmovie}) => {
    return (
        <div className='search'>
           <div>
             <img src="./search.svg" alt="search"/>
              <input
           type='text'
           placeholder='type your movie'
           value = {search}
           onChange={(e)=> setsearchmovie(e.target.value)}
           />

           </div>
        </div>
    );
}

export default Search;
