import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar';
import Post from './components/Post';
import Slider from './components/Slider';
import { updateUser, User } from './redux/actions';
import { reducerType } from './redux/reducers';

function App() {
  const user = useSelector((state: reducerType) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateUser());
  }, []);
  return (
    <div className="App">
      <Navbar />
      <main>
        <section className="sec1">
          <Slider />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </section>
      </main>
      <section className="sec2">
        <div className="current-user">
          <div
            style={{
              backgroundImage: `url(${user.profilePic})`,
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              boxShadow: '0 0 0 1px #aaa',
              margin: '0 12px',
              cursor: 'pointer',
            }}
          ></div>
          <div style={{ fontSize: '0.8rem' }}>
            <b>{user.username}</b>
          </div>
        </div>
        <div className="small-footer">
          <div>About&nbsp;</div>&#8226;
          <div>&nbsp;Help&nbsp;</div>&#8226;
          <div>&nbsp;Press&nbsp;</div>&#8226;
          <div>&nbsp;API&nbsp;</div>&#8226;
          <div>&nbsp;Jobs&nbsp;</div>&#8226;
          <div>&nbsp;Privacy&nbsp;</div>&#8226;
          <div>&nbsp;Terms&nbsp;</div>&#8226;
          <div>&nbsp;Locations&nbsp;</div>&#8226;
          <div>Top Accounts&nbsp;</div>&#8226;
          <div>&nbsp;Hashtags&nbsp;</div>&#8226;
          <div>&nbsp;Language</div>
        </div>
      </section>
    </div>
  );
}

export default App;
