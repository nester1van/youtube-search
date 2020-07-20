import { SET_LAYOUT_VIDEOS } from './actions';

const initialAppearance = {
  layout: 'list'
}

const appearance = (state = initialAppearance, action) => {
  const { type, layout } = action;
  switch (type) {
    case SET_LAYOUT_VIDEOS:
      return {...state, layout};
    default:
      return state;
  }
};

export default appearance;