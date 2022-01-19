import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchFail, FETCH_FAIL, getPerson} from './../actions';

import axios from 'axios';

const Dictionary = ({ dictionary, isFetching, error,  dispatch }) => {

  useEffect(()=> {
    dispatch(getDictionary());
  }, []);

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching person for ya!</h2>;
  }

  const handleClick = () => {
    dispatch(getDictionary());
  }

  return (
    <>
      <div>
        <h2>Say Hi to: {dictionary.name} {person.name.last}</h2>
        <img src={person.picture.large}/>
      </div>
      <button onClick={handleClick}>Get new person</button>
      <button onClick={()=> {
        dispatch(fetchFail("Error Triggered"));
      }}>Trigger an error</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    person: state.person,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps)(Dictionary);