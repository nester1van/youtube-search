import React, { useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setShowModalAdd } from '../../redux/appearance/actions';
import { setQueryName, setSortBy, setMaxResults } from '../../redux/search/actions';
import { setQueryF, setMaxResultsF, 
  setQueryNameF, setSortByF, addQueryToF } from '../../redux/favorites/actions';

const ModalAddToFavorites = ({ isShownEdit, setShowModalAdd,
    query, name, sortBy, maxResults,
    queryF, setQueryF, maxResultsF, setMaxResultsF, 
    nameF, setQueryNameF, sortByF, setSortByF, addQueryToF }) => {

  useEffect(() => {
    setQueryF(query);
    setMaxResultsF(maxResults);
    setQueryNameF(name);
    setSortByF(sortBy);
  }, [isShownEdit]);

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

  const handleAddF = () => {
    addQueryToF({queryF,
    maxResultsF,
    nameF,
    sortByF});
    setShowModalAdd(false);
  }

  return (
    <Modal show={isShownEdit} onHide={handleHide}>
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
            <Form.Label>Название</Form.Label>
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
              type='number' 
              min='0' max='50'
              value={maxResultsF}
              onChange={handleChangeMaxResults}/>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleHide}>Не изменять</Button>
        <Button onClick={handleAddF}>Изменить</Button>
      </Modal.Footer>
    </Modal>
  )
};

const mapStateToProps = (state) => {
  const { search: { query, name, maxResults, sortBy },
    appearance: { isShownEdit },
    favorites: { queryF, nameF, maxResultsF, sortByF }
  } = state;
  return ({
    isShownEdit, query, name, maxResults, sortBy,
    queryF, nameF, maxResultsF, sortByF
  })
};

export default connect(mapStateToProps, 
  { setShowModalAdd, setQueryF, setQueryNameF, 
    setMaxResultsF, setSortByF, addQueryToF })
  (ModalAddToFavorites);