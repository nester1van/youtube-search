import React, { useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setShowModalAdd, setHeartFavorites } from '../../redux/appearance/actions';
import { setQueryF, setMaxResultsF, 
  setQueryNameF, setSortByF, addQueryToF } from '../../redux/favorites/actions';
import './modalAddToFavorites.css';

const ModalAddToFavorites = ({ isShownAdd, setShowModalAdd, login,
    query, name, sortBy, maxResults, queryF, setQueryF, maxResultsF, 
    setMaxResultsF, nameF, setQueryNameF, sortByF, setSortByF, 
    addQueryToF, dataF, setHeartFavorites }) => {

  useEffect(() => {
    setQueryF(query);
    setMaxResultsF(maxResults);
    setQueryNameF(name);
    setSortByF(sortBy);
  }, [isShownAdd]);

  const handleHide = () => {
    setShowModalAdd(false);
  }

  const handleChangeName = (e) => {
    const value = e.target.value;
    setQueryNameF(value);
  }

  const handleChangeSortBy = (e) => {
    const value = e.target.value;
    setSortByF(value);
  }

  const handleChangeMaxResults = (e) => {
    let value = e.target.value;
    if (value < 0) value = 0;
    if (value > 50) value = 50;
    setMaxResultsF(value);
  }

  const handleAddF = (e) => {
    if (nameF) {
      addQueryToF({queryF,
        maxResultsF,
        nameF,
        sortByF});
      setShowModalAdd(false);
      setHeartFavorites('marked');      
      e.preventDefault();   
    }
  }

  

  return (
    <Modal 
      className='modalAdd' 
      show={isShownAdd} 
      onHide={handleHide}>
      <Modal.Header>
        <Modal.Title>Сохранить запрос</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Запрос</Form.Label>
            <Form.Control
              disabled
              value={queryF}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>* Название</Form.Label>
            <Form.Control 
              required
              type='text'
              value={nameF}
              onChange={handleChangeName}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Сортировать по</Form.Label>
            <Form.Control 
              as='select' 
              value={sortByF}
              onChange={handleChangeSortBy}>
              <option>date</option>
              <option>rating</option>
              <option>relevance</option>
              <option>title</option>
              <option>videoCount</option>
              <option>viewCount</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Максимальное количество</Form.Label>
            <Form.Control 
              type='range' 
              min='0' max='50' 
              value={maxResultsF}
              onChange={handleChangeMaxResults}/>
            <Form.Control 
              className='modalAdd__input-number'
              type='number' 
              min='0' max='50'
              value={maxResultsF}
              onChange={handleChangeMaxResults}/>
          </Form.Group>
          <Button 
            className='modalAdd__btn-no-save' 
            onClick={handleHide}>Не сохранять</Button>
          <Button 
            className='modalAdd__btn-save' 
            type='submit' 
            onClick={handleAddF}>Сохранить</Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
};

const mapStateToProps = (state) => {
  const { user: { login },
    search: { query, name, maxResults, sortBy },
    appearance: { isShownAdd },
    favorites: { queryF, nameF, maxResultsF, sortByF, dataF }
  } = state;
  return ({
    login,
    isShownAdd, query, name, maxResults, sortBy,
    queryF, nameF, maxResultsF, sortByF, dataF
  })
};

export default connect(mapStateToProps, 
  { setShowModalAdd, setQueryF, setQueryNameF, 
    setMaxResultsF, setSortByF, addQueryToF, setHeartFavorites })
  (ModalAddToFavorites);