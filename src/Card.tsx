import React, { useState, useEffect } from 'react';
import './Card.scss';

const Card = ({ switchMode }: any) => {
  return (
    <div className={`about-wrapper about-wrapper__${switchMode}`}>
      <p className={`about-wrapper__text about-wrapper__text__${switchMode}`}>
        Hi my name is,
      </p>
      <p
        className={`about-wrapper__text about-wrapper__text__${switchMode}`}
        style={{ fontSize: '50px' }}
      >
        Serhan Silahyürekli
      </p>
      <p className={`about-wrapper__text about-wrapper__text__${switchMode}`}>
        I am a Fullstack Software Engineer at Trendyol.
      </p>
      <p className={`about-wrapper__text about-wrapper__text__${switchMode}`}>
        I graduated from Sabanci University in 2022 February.
      </p>
      <p className={`about-wrapper__text about-wrapper__text__${switchMode}`}>
        I am working with Node.js, React.js, TypeScript, Nest.js and Go.
      </p>
    </div>
  );
};

export default Card;
