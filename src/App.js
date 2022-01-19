import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

import Dictionary from './components/Dictionary';

function App() {
  return (
    <div>
      <Dictionary />
    </div>
  )
  // const [data, setData] = useState('');
  // const [searchWord, setSearchWord] = useState('');

  // const getMeaning = () => {
  //   axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/<word>')
  //     .then(resp => {
  //       setData(resp.data[0])
  //     })
  // }

  // return (
  //   <div className="App">
  //     <h1>Dictionary App</h1>
  //     <div className='search-box'>
  //       <input 
  //         type='text'
  //         placeholder='Search'
  //         onChange={(e) => {
  //           setSearchWord(e.target.value)
  //         }}
  //       />
  //       <button
  //         onClick={() => {
  //           getMeaning()
  //         }}
  //       />
  //     </div>
      
  //   </div>
  // );
}

export default App;