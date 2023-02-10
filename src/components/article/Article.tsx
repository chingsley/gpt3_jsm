import React from 'react';
import LazyLoadImg from '../lazyLoadImg/LazyLoadImg';
import './article.css';

interface ArticleProps {
  imgUrl: string;
  date: string;
  text: string;
}

const Article: React.FC<ArticleProps> = ({ imgUrl, date, text }) => (
  <div className='gpt3__blog-container_article'>
    <div className='gpt3__blog-container_article-image'>
      <LazyLoadImg image={{ src: imgUrl, alt: 'blog_image' }} />
    </div>
    <div className='gpt3__blog-container_article-content'>
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
);

export default Article;
