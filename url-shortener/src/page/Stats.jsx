import React from 'react';
import { getStatistics } from '../api/mockApi';
import UrlCard from '../component/UrlCard';

export default function Stats() {
  const data = getStatistics();

  return (
    <div style={{ padding: 24 }}>
      <h2>Shortened URL Stats</h2>
      {data.map((item, i) => (
        <UrlCard key={i} item={item} />
      ))}
    </div>
  );
}
