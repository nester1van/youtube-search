import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import getVideos, { setQuery } from '../../redux/search/actions';
import { setShowModalAdd } from '../../redux/appearance/actions';

const SearchForm = ({ getVideos, query, setQuery, data, setShowModalAdd}) => {

  const { items } = data;

  const handleSubmit = (e, v) => {
    const value = e.target.q.value;
    e.preventDefault();
    setQuery(value);
    getVideos(value);
  };

  const handleShow = () => {
    setShowModalAdd(true);
  }

  return (
    <Form inline onSubmit={handleSubmit}>
      <InputGroup>
        <Form.Control 
          type='text' 
          name='q' 
          placeholder='Что хотите посмотреть?'
          aria-describedby='favorites'/>
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