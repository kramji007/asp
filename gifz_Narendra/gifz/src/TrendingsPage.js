import React, { useState, useEffect } from 'react';

function TrendingsPage() {
  const [trendingGIFs, setTrendingGIFs] = useState([]);

  useEffect(() => {
    // Simulate fetching trending GIFs with dummy data after component mounts
    const dummyTrendingGIFs = [
      { id: 1, title: 'Trending GIF 1', url: 'https://dummyurl.com/trending1' },
      { id: 2, title: 'Trending GIF 2', url: 'https://dummyurl.com/trending2' },
      { id: 3, title: 'Trending GIF 3', url: 'https://dummyurl.com/trending3' },
    ];

    setTrendingGIFs(dummyTrendingGIFs);
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Trending GIFs</h2>
      <div className="grid grid-cols-3 gap-4">
        {trendingGIFs.map((gif) => (
          <div key={gif.id} className="bg-white border border-gray-300 rounded-lg p-4">
            <img src={gif.url} alt={gif.title} className="w-full" />
            <p className="text-center mt-2">{gif.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingsPage;
