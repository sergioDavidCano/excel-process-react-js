import './socials.scss';
import React from 'react';

// import icons
import { social } from '../../data';

const Socials = () => {
  return (
    <ul className='container-social'>
      {social.map((item, index) => {
        return (
          <li
            className='container-social__item'
            key={index}
          >
            <a className='container-social__item__icon' href={item.href}>
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
