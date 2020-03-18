import React, { useEffect } from 'react';
import './App.css';
import { connect } from "react-redux";

import Cards from './containers/cards';
import SearchBar from './containers/searchBar';
import { constants } from './../types/characters';


function App({ characters, getChacarterBySearch, getAllCharacter }) {
  useFetching(getAllCharacter);  
  return (
    !characters.error ? <>
      <SearchBar actionButton={getChacarterBySearch} />
      <Cards characters={characters} />
    </> : <>
        <h1>Upss.. no se pudo traer la información.</h1>
      </>
  );
}

const useFetching = someFetchActionCreator => {
  useEffect( () => {
    someFetchActionCreator();
  }, [])
}
/* export default App;
 */

const mapStateToProps = ({ characters }) => {
  return { characters }
}

const mapDispatchToProps = dispatch => {
  return {
    getChacarterBySearch: searchValue => searchValue ? dispatch({ type: constants.SEARCH_CHARACTERS, searchValue }): dispatch({ type: constants.FETCH_CHARACTERS }),
    getAllCharacter: () => dispatch({ type: constants.FETCH_CHARACTERS })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

