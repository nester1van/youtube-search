import React from 'react';
import { connect } from 'react-redux';
import FavoriteItem from './FavoriteItem';

const FavoriteItems = ({ dataF }) => {

  return (
    <>
      {dataF.map(queryData => {
        const { data: {queryF, nameF, maxResultsF, sortByF}, id } = queryData;

        return <FavoriteItem 
          key={id} 
          queryF={queryF}
          nameF={nameF}
          maxResultsF={maxResultsF}
          sortByF={sortByF}
          id={id}/>
      })}
      
    </>
  )
};

const mapStateToProps = (state) => ({
  dataF: state.favorites.dataF
});

export default connect(mapStateToProps)(FavoriteItems);