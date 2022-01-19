import React, { useState } from 'react';
import { connect } from 'react-redux';

import { fetchFail, FETCH_FAIL, getWord } from './../actions';

import axios from 'axios';

 

 const Dictionary = ({ word, isFetching, error, dispatch}) => {
    
    const [data, setData] = useState('');
    const [searchWord, setSearchWord] = useState('');

    const getMeaning = () => {
        axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/<word>')
          .then(resp => {
            dispatch(fetchSuccess(resp.data.results[0]))
          })
          .catch(err => {
              dispatch(fetchFail(err))
          })
      }
     
      return (
        <div className="App">
          <h1>Dictionary App</h1>
          <div className='search-box'>
            <input 
              type='text'
              placeholder='Word'
              onChange={(e) => {
                setSearchWord(e.target.value)
              }}
            />
            <br/>
            <button onClick={ () => { getMeaning() }}>Search</button>
          </div>
       </div>
      );
 }
 
 const mapStateToProps = state => {
    return {
      word: state.word,
      isFetching: state.isFetching,
      error: state.error
    };
  };
  
  export default connect(mapStateToProps)(Dictionary);