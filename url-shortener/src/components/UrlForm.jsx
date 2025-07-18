import React, { useState } from 'react';
import { shortenUrls } from '../services/mockApi';
import './UrlForm.css';

const UrlForm = () => {
  const [urls, setUrls] = useState([{ longUrl: '', validity: '', shortcode: '' }]);
  const [results, setResults] = useState([]);

  const handleChange = (index, field, value) => {
    const newUrls = [...urls];
    newUrls[index][field] = value;
    setUrls(newUrls);
  };

  const addUrl = () => {
    if (urls.length < 5) {
      setUrls([...urls, { longUrl: '', validity: '', shortcode: '' }]);
    }
  };

  const handleSubmit = () => {
    if (urls.some(url => !url.longUrl)) {
      alert('Please fill in all required original URLs.');
      return;
    }

    const output = shortenUrls(urls);
    setResults(output);
  };

  return (
    <div className="url-form">
      {urls.map((url, i) => (
        <div className="url-form-row" key={i}>
          <input
            type="text"
            placeholder="Original URL"
            value={url.longUrl}
            onChange={e => handleChange(i, 'longUrl', e.target.value)}
          />
          <input
            type="number"
            placeholder="Validity (min)"
            value={url.validity}
            onChange={e => handleChange(i, 'validity', e.target.value)}
          />
          <input
            type="text"
            placeholder="Shortcode (optional)"
            value={url.shortcode}
            onChange={e => handleChange(i, 'shortcode', e.target.value)}
          />
        </div>
      ))}

      <div className="url-form-buttons">
        <button onClick={addUrl}>Add Another</button>
        <button onClick={handleSubmit}>Shorten</button>
      </div>

      <div className="url-results">
        {results.map((res, index) => (
          <div className="url-card" key={index}>
            <p><strong>Original:</strong> {res.originalUrl}</p>
            <p><strong>Short:</strong> {res.shortUrl}</p>
            <p><strong>Expires:</strong> {new Date(res.expiryAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UrlForm;
