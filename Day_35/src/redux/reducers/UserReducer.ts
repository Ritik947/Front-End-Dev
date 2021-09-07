import { User } from '../actions';

const initialUser = {
  username: '',
  profilePic: '',
};

export interface ActionType {
  type: string;
  payload: User;
}

export const userReducer = (state: User = initialUser, action: ActionType) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return action.payload;
    default:
      return state;
  }
};
