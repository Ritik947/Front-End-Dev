import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ellipsis from '../assets/ellipsis.png';
import comment from '../assets/comment.svg';
import save from '../assets/save.png';
import send from '../assets/send.svg';

const Post = () => {
  const user = useSelector((state: any) => state.user);
  const [fillColor, setColor] = useState(false);
  const [input, setInput] = useState('');
  return (
    <div className="post-wrapper">
      <div className="post-header">
        <div className="user-section">
          <div
            className="profile-picture"
            style={{
              backgroundImage: `url(${user.profilePic})`,
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              cursor: 'pointer',
              margin: '0 1rem',
            }}
          ></div>
          <div>{user.username}</div>
        </div>
        <div className="more-options">
          <img src={ellipsis} alt="" width="16px" height="16px" />
        </div>
      </div>
      <div
        className="post-content"
        style={{
          backgroundColor: '#000',
          backgroundImage: `url(https://thedrum-media.imgix.net/thedrum-prod/s3/news/tmp/349138/meme7.png)`,
          width: '100%',
          minHeight: '40rem',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          cursor: 'pointer',
        }}
      ></div>
      <div className="post-footer">
        <div className="post-widgets">
          <div style={{ display: 'flex', padding: '0.5rem 0' }}>
            <svg
              onClick={() => {
                setColor(!fillColor);
              }}
              fill={fillColor ? 'red' : '#aaa'}
              width="24px"
              height="24px"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 122.88 107.39"
            >
              <path d="M60.83,17.18c8-8.35,13.62-15.57,26-17C110-2.46,131.27,21.26,119.57,44.61c-3.33,6.65-10.11,14.56-17.61,22.32-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.55C29.16,76.89,1,55.92,0,29.94-.63,11.74,13.73.08,30.25.29c14.76.2,21,7.54,30.58,16.89Z" />
            </svg>
            <img src={comment} alt="" width="24px" height="24px" />
            <img src={send} alt="" width="24px" height="24px" />
          </div>
          <div style={{ display: 'flex', padding: '0.3rem 0.5rem' }}>
            <img src={save} alt="" width="28px" height="32px" />
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            padding: '0 1rem',
            justifyContent: 'flex-start',
          }}
        >
          <a href="#">View all Comments</a>
        </div>
        <div className="add-comment">
          <input
            type="text"
            placeholder="Add a Comment..."
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <div
            style={{
              color: '#0E9BF6',
              fontWeight: 600,
              cursor: 'pointer',
              opacity: `${input.trim() === '' ? 0.25 : 1}`,
            }}
          >
            Post
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
