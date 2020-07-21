import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import getVideos, { setQuery } from '../../redux/search/actions';
import { setShowModalAdd } from '../../redux/appearance/actions';

const SearchForm = ({ getVideos, query, setQuery, data, setShowModalAdd}) => {

  const { items } = data;

  const handleSubmit = (e) => {
    e.preventDefault();
    getVideos();
  };

  const handleChangeQuery = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  const handleShow = () => {
    setShowModalAdd(true);
  }

  return (
    <Form inline onSubmit={handleSubmit}>
      <InputGroup>
        <Form.Control 
          type='text' 
          value={query} 
          placeholder='Что хотите посмотреть?'
          aria-describedby='favorites'
          onChange={handleChangeQuery}/>
        {(items && items.length !== 0) ?
        <InputGroup.Append>
          <InputGroup.Text 
            id='favorites'
            onClick={handleShow}  
          >&#9825;</InputGroup.Text>
        </InputGroup.Append> : null }
      </InputGroup>
      <Form.Control 
        type='submit' 
        value='Найти'
      />
    </Form>
  );
};

const mapStateToProps = (state) => ({
  query: state.search.query,
  data: state.search.data
});

export default connect(mapStateToProps, 
  { getVideos, setQuery, setShowModalAdd })(SearchForm);