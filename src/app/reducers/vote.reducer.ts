import * as VoteActions from './vote.actions';
import { Vote } from './vote.model';

export type Action = VoteActions.All;

const defaultState: Vote = {
  title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
  img_url: 'https://m.media-amazon.com/images/M/MV5BMTc0NTUwMTU5OV5BMl5BanBnXkFtZTcwNjAwNzQzMw@@._V1_SX300.jpg',
  rating: '6.9',
  plot: 'Four kids travel through a wardrobe to the land of Narnia \
  and learn of their destiny to free it with the guidance of a mystical lion.'
};

const newState = (state, newData) => {
  return Object.assign({}, state, newData);
};

export function voteReducer(state: Vote = defaultState, action: Action) {
 switch (action.type) {
    case VoteActions.CHANGE_MOVIE:
      return newState(state, { title: action.title, img_url: action.img_url, rating: action.rating, plot: action.plot });
    default:
      return state;
 }
}
