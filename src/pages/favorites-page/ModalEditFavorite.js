import React, { useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setShowModalAdd, setShowModalEdit } from '../../redux/appearance/actions';
import { setQueryF, setMaxResultsF, 
  setQueryNameF, setSortByF, editQueryInF } from '../../redux/favorites/actions';
import './modalEditFavorite.css';

const ModalAddToFavorites = ({ isShownEdit, setShowModalEdit,
    queryF, setQueryF, maxResultsF, setMaxResultsF, 
    nameF, setQueryNameF, sortByF, setSortByF, selectedId, editQueryInF }) => {

  const handleHide = () => {
    setShowModalEdit(false);
  }

  const handleChangeQuery = (e) => {
    const value = e.target.value;
    setQueryF(value);
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

  const handleEditF = (e) => {
    
    if (nameF) {
      editQueryInF(selectedId, {
        queryF,
        maxResultsF,
        nameF,
        sortByF
      });
      e.preventDefault();
      setShowModalEdit(false);
    }
  }

  return (
    <Modal 
      className='modalEdit'
      show={isShownEdit} 
      onHide={handleHide}>
      <Modal.Header>
        <Modal.Title>Сохранить запрос</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form >
          <Form.Group>
            <Form.Label>Запрос</Form.Label>
            <Form.Control
              value={queryF}
              onChange={handleChangeQuery}/>
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
              className='modalEdit__input-number'
              type='number' 
              min='0' max='50'
              value={maxResultsF}
              onChange={handleChangeMaxResults}/>
          </Form.Group>
          <Button
            className='modalEdit__btn-no-change' 
            onClick={handleHide}>Не изменять</Button>
          <Button 
            className='modalEdit__btn-change'
            type='submit' 
            onClick={handleEditF}>Изменить</Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
};

const mapStateToProps = (state) => {
  const { search: { query, name, maxResults, sortBy },
    appearance: { isShownEdit },
    favorites: { queryF, nameF, maxResultsF, sortByF, selectedId }
  } = state;
  return ({
    isShownEdit, query, name, maxResults, sortBy,
    queryF, nameF, maxResultsF, sortByF, selectedId
  })
};

export default connect(mapStateToProps, 
  {setShowModalAdd, setShowModalEdit, setQueryF, setQueryNameF, 
    setMaxResultsF, setSortByF, editQueryInF})
  (ModalAddToFavorites);