import { AnyAsyncThunk } from '@reduxjs/toolkit/dist/matchers';

export interface User {
  username: string;
  profilePic: string;
}

export const updateUser = () => {
  return (dispatch: any) => {
    fetch('/data/userdata.json')
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: 'UPDATE_USER',
          payload: data,
        });
      });
  };
};
