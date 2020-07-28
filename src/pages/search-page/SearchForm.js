import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import getVideos, { setQuery } from '../../redux/search/actions';
import { setShowModalAdd, setHeartFavorites } from '../../redux/appearance/actions';
import './searchForm.css';

const SearchForm = ({ getVideos, setQuery, data, sortBy,
   setShowModalAdd, query, heart, setHeartFavorites}) => {

  const { items } = data;

  const handleChange = (e) => {
    const value = e.target.value;
    if (query !== value) {
      setHeartFavorites('hidden');
    } else {
      setHeartFavorites('visible');
    }
  };

  const handleSubmit = (e) => {
    const value = e.target.q.value;
    e.preventDefault();
    setQuery(value);
    getVideos(value, 12, sortBy);
    setHeartFavorites('visible');
  };

  const handleShow = () => {
    if (heart !== 'hidden') setShowModalAdd(true);
  }

  const controlHeartFavorites = () => {
    // hidden, visible, marked
    if (heart === 'hidden') {
      return <span></span>;
    } else if (heart === 'visible') {
      return <span>&#9825;</span>; 
    } else {
      return <span>&#128153;</span>;
    }
  };

  return (
    <Form 
      className='search-form'
      inline 
      onSubmit={handleSubmit}>
        <Form.Group className='search-form__group'>
          <InputGroup>
          <Form.Control 
            className='search-form__query'
            type='text' 
            name='q' 
            placeholder='Что хотите посмотреть?'
            aria-describedby='favorites'
            onChange={handleChange}/>
          <InputGroup.Append>
            <InputGroup.Text 
              className='search-form__favorites'
              id='favorites'
              onClick={handleShow}  
            >{controlHeartFavorites()}</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        <Form.Control 
          className='search-form__btn-submit'
          type='submit' 
          value='Найти'
        />
      </Form.Group>
    </Form>
  );
};

const mapStateToProps = (state) => ({
  data: state.search.data,
  maxResults: state.search.maxResults,
  sortBy: state.search.sortBy,
  query: state.search.query,
  heart: state.appearance.heart
});

export default connect(mapStateToProps, 
  { getVideos, setQuery, setShowModalAdd, setHeartFavorites })(SearchForm);