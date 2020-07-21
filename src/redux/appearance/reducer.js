import { SET_LAYOUT_VIDEOS, 
  SET_SHOW_MODAL_ADD, SET_SHOW_MODAL_EDIT,
  SET_HEART_FAVORITES } from './actions';

const initialAppearance = {
  layout: 'list', 
  isShownAdd: false,
  isShownEdit: false,
  heart: 'hidden'
}

const appearance = (state = initialAppearance, action) => {
  const { type, layout, isShownAdd, isShownEdit, heart } = action;
  switch (type) {
    case SET_LAYOUT_VIDEOS:
      return {...state, layout};
    case SET_SHOW_MODAL_ADD:
      return {...state, isShownAdd};
    case SET_SHOW_MODAL_EDIT:
      return {...state, isShownEdit};
    case SET_HEART_FAVORITES:
      return {...state, heart}
    default:
      return state;
  }
};

export default appearance;