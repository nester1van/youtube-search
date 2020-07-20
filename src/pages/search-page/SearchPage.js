import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Form, InputGroup, Button, Modal } from 'react-bootstrap';
import getVideos, { setQuery, setMaxResults, setQueryName, setSortBy } from '../../redux/search/actions';
import VideoItem from './VideoItem';
import { setLayoutVideos } from '../../redux/appearance/actions';
import './searchPage.css';

const SearchPage = ({ query, setQuery, maxResults, setMaxResults, name, setQueryName, sortBy, setSortBy, getVideos, data, layout, setLayoutVideos }) => {

  const [show, setShow] = useState(false);

  const { items, pageInfo } = data;
  let totalResults;
  if (pageInfo) totalResults = pageInfo.totalResults;

  const handleChangeQuery = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getVideos();
  };

  const handleList = () => {
    setLayoutVideos('list');
  };

  const handleGallery = () => {
    setLayoutVideos('gallery');
  };

  const handleShow = () => {
    setShow(true);
  }

  const handleHide = () => {
    setShow(false);
  }

  const handleChangeMaxResults = (e) => {
    const value = e.target.value;
    setMaxResults(value);
  }

  const handleChangeSortBy = (e) => {
    const value = e.target.value;
    setSortBy(value);
  }

  const handleChangeName = (e) => {
    const value = e.target.value;
    setQueryName(value);
  }

  return (
    <>
      <h1>Поиск видео</h1>
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

      {(items && items.length !== 0) ? 
       <>
          <p>Видео по запросу "{query}" <span>{totalResults}</span></p>
          <Button onClick={handleList}>List</Button>
          <Button onClick={handleGallery}>Gallery</Button>
          {items.map(item => {
            const { id: {videoId},
              snippet: {channelTitle, title, thumbnails:{high: {url}}} } = item;
          return <VideoItem
            key={videoId}
            url={url}
            title={title}
            channelTitle={channelTitle}/> 
          })}
       </>
       : null}
      {/* 9829 black heart */}

      <Modal show={show} onHide={handleHide}>
        <Modal.Header>
          <Modal.Title>Сохранить запрос</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Запрос</Form.Label>
              <Form.Control
                disabled
                value={query}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Название</Form.Label>
              <Form.Control 
                required
                type='text'
                value={name}
                onChange={handleChangeName}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Сортировать по</Form.Label>
              <Form.Control 
                as='select' 
                value={sortBy}
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
                value={maxResults}
                onChange={handleChangeMaxResults}/>
              <Form.Control 
                type='number' 
                value={maxResults}
                onChange={handleChangeMaxResults}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleHide}>Не сохранять</Button>
          <Button>Сохранить</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
};

const mapStateToProps = (state) => ({
  query: state.search.query,
  maxResults: state.search.maxResults,
  name: state.search.name,
  sortBy: state.search.sortBy,
  data: state.search.data,
  layout: state.appearance.layout
}); 

export default connect(mapStateToProps, { setQuery, setMaxResults, setQueryName, setSortBy, getVideos, setLayoutVideos })(SearchPage);

