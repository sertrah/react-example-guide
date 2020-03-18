import React from 'react';
import './character.css';
import { connect } from "react-redux";
/* 
import { constants } from './../../../types/characters';
 */

import {
    useParams
} from "react-router-dom";

function CharacterPage() {
    let { id } = useParams();
    console.log(id);

    return (
        <div style={{background: "red", width: "100px", height: "100px"}} >
           <div className="avatar-contaienr">

           </div>
           <div className="descrip-container">
              <h1>lorem </h1>
              <h2>about</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nihil non nulla, perferendis, eaque quod mollitia deleniti ad ducimus pariatur eos quas nostrum ipsum culpa a officia fuga, sapiente accusantium.</p>
           </div>
        </div>
    );
}

/* const useFetching = someFetchActionCreator => {
  useEffect( () => {
    console.log(someFetchActionCreator);
    someFetchActionCreator();
  }, [])
} */
/* export default App;
 */

/* const mapStateToProps = ({ characters }) => {
  return { character }
}

const mapDispatchToProps = dispatch => {
  return {
    getChacarterBySearch: searchValue => searchValue ? dispatch({ type: constants.SEARCH_CHARACTERS, searchValue }): dispatch({ type: constants.FETCH_CHARACTERS }),
    getAllCharacter: () => dispatch({ type: constants.FETCH_CHARACTERS })
  }
} */
export default connect(null, null)(CharacterPage);

