let shortLinks = [];

export function shortenUrls(urls) {
  const now = new Date();

  const newLinks = urls.map(url => {
    const code = url.shortcode || Math.random().toString(36).substring(2, 7);
    const shortUrl = `http://localhost:3000/${code}`;
    const expiryAt = new Date(now.getTime() + (url.validity || 30) * 60000).toISOString();

    const entry = {
      originalUrl: url.longUrl,
      shortUrl,
      expiryAt,
    };

    shortLinks.push(entry);
    return entry;
  });

  return newLinks;
}

export function getStatistics() {
  return shortLinks;
}
