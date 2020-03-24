import React, { useEffect } from 'react';

import './App.css';
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Cards from './containers/cards';
import SearchBar from './containers/searchBar';
import { constants } from './../types/characters';
import { getCharacterList } from '../selectors/character';
import { injectIntl, FormattedRelativeTime, FormattedMessage } from 'react-intl';
import { IntlProvider } from "react-intl";

import messages_de from "./../translations/de.json";
import messages_es from "./../translations/es.json";

const messages = {
  'de': messages_de,
  'es': messages_es
};


/* const language = "navigator.language.split(/[-_]/)[0]";  // language without region code
 */
const PostDate = injectIntl(({ date, intl }) => (
  <span title={intl.formatDate(date)}>
    <FormattedRelativeTime value={date} />
  </span>
));

const App = ({ characters, getChacarterBySearch, getAllCharacter }) => {
  useFetching(getAllCharacter);
  return (
    !characters.error ? <>
      <IntlProvider locale={"es"} messages={messages["language"]}>
        <PostDate date={new Date(1459913574887)} />

        <h1>

          <FormattedMessage id="app.learn-react-link" defaultMessage="Mensaje por defecto" description="bar" />;

        </h1>
      </IntlProvider>
      <SearchBar actionButton={getChacarterBySearch} />
      <Cards characters={characters} />
    </> : <>
        <h1>Upss.. no se pudo traer la información.</h1>
      </>
  );
}

// La forma como se tipea mi fai.

App.propTypes = {
  characters: PropTypes.object,
  getChacarterBySearch: PropTypes.func,
  getAllCharacter: PropTypes.func,
};


const useFetching = someFetchActionCreator => {
  useEffect(() => {
    someFetchActionCreator();
  }, [])
}

const mapStateToProps = (state) => {
  return { characters: getCharacterList(state) }
}

const mapDispatchToProps = dispatch => {
  return {
    getChacarterBySearch: searchValue => searchValue ? dispatch({ type: constants.SEARCH_CHARACTERS, searchValue }) : dispatch({ type: constants.FETCH_CHARACTERS }),
    getAllCharacter: () => dispatch({ type: constants.FETCH_CHARACTERS })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

