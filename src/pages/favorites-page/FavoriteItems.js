import React from 'react';
import { connect } from 'react-redux';
import FavoriteItem from './FavoriteItem';

const FavoriteItems = ({ dataF }) => {

  return (
    <>
      {dataF.map(queryData => {
        const { queryF, nameF, maxResultsF, sortByF } = queryData;
        const key = queryF + nameF + maxResultsF;
        return <FavoriteItem 
          key={key} 
          queryF={queryF}
          nameF={nameF}
          maxResultsF={maxResultsF}
          sortByF={sortByF}/>
      })}
      
    </>
  )
};

const mapStateToProps = (state) => ({
  dataF: state.favorites.dataF
});

export default connect(mapStateToProps)(FavoriteItems);