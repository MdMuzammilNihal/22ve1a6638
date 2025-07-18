import React from 'react';
import './UrlCard.css';

const UrlCard = ({ item }) => {
  return (
    <div className="url-card">
      <p><strong>Original URL:</strong> {item.originalUrl}</p>
      <p><strong>Short URL:</strong> <a href={item.shortUrl} target="_blank" rel="noreferrer">{item.shortUrl}</a></p>
      <p><strong>Expires At:</strong> {new Date(item.expiryAt).toLocaleString()}</p>
    </div>
  );
};

export default UrlCard;
