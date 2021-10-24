import React, { Component } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ArticleLayout = ({ post }) => {

  return (
      <article className="postbox post format-image mb-40">
          <div className="postbox__thumb mb-30">
              <Link href={post.url} as={'/'+ post.url}>
                  <img src={'/'+ post.image} alt="blog image" />

              </Link>
          </div>
          <div className="postbox__text p-50">
              <div className="post-meta mb-15">
                <span> <i><FontAwesomeIcon icon={['fas', 'user']} /></i> Soamlia</span>
                <span> <i><FontAwesomeIcon icon={['fas', 'calendar']} /></i> 05 Aug 2019</span>
                <span> <i><FontAwesomeIcon icon={['fas', 'comments']} /></i> (03)</span>
              </div>
              <h3 className="blog-title">
                <Link href={post.url} as={'http://localhost:3000'+ post.url}>
                  {post.title}
                </Link>
              </h3>
              <div className="post-text mb-20">
                  <p>{post.text}</p>
              </div>
              <div className="read-more mt-30 btn">
                <Link href={post.url} as={'http://localhost:3000'+ post.url}>
                  <span className="btn-text">Read More <i><FontAwesomeIcon icon={['far', 'long-arrow-alt-right']} /></i></span>
                </Link>
              </div>
          </div>
      </article>
  );
}

export default ArticleLayout;