// action types
export const SET_LAYOUT_VIDEOS = 'SET_LAYOUT_VIDEOS';
export const SET_SHOW_MODAL_ADD = 'SET_SHOW_MODAL_ADD'; 
export const SET_SHOW_MODAL_EDIT = 'SET_SHOW_MODAL_EDIT'; 
export const SET_HEART_FAVORITES = 'SET_HEART_FAVORITES';

// action creators
export const setLayoutVideos = (layout) => ({
  type: SET_LAYOUT_VIDEOS,
  layout
});

export const setShowModalAdd = (isShownAdd) => ({
  type: SET_SHOW_MODAL_ADD,
  isShownAdd
});

export const setShowModalEdit = (isShownEdit) => ({
  type: SET_SHOW_MODAL_EDIT,
  isShownEdit
});

// heart: hidden, visible, marked
export const setHeartFavorites = (heart) => ({
  type: SET_HEART_FAVORITES,
  heart
});

