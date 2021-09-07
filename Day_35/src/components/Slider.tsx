import React from 'react';
import { useSelector } from 'react-redux';

const Slider = () => {
  const user = useSelector((state: any) => state.user);
  return (
    <div className="slider-container">
      <div className="slider">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
          (index) => (
            <div
              key={index}
              className="slider-item"
              style={{
                position: 'relative',
                backgroundImage: `url(${user.profilePic})`,
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                boxShadow: '0 0 0 2px #ffffff, 0 0 0 3px #aaa',
                margin: '0 12px',
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  bottom: '-24px',
                  left: '0',
                  width: '64px',
                  overflow: 'hidden',
                  fontSize: '0.8rem',
                }}
              >
                {user.username}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Slider;
