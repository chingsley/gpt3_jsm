import React from 'react';
import Img from '../img/Img';
import './brand.css';
import { google, slack, atlassian, dropbox, shopify } from './imports';

function Brand() {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <Img src={google} alt='google' />
      </div>
      <div>
        <Img src={slack} alt='slack' />
      </div>
      <div>
        <Img src={atlassian} alt='atlassian' />
      </div>
      <div>
        <Img src={dropbox} alt='dropbox' />
      </div>
      <div>
        <Img src={shopify} alt='shopify' />
      </div>
    </div>
  );
}

export default Brand;
