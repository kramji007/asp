import React, { useState } from 'react';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Simulate a search with dummy data
    const dummySearchResults = [
      { id: 1, title: 'GIF 1', url: 'https://dummyurl.com/gif1' },
      { id: 2, title: 'GIF 2', url: 'https://dummyurl.com/gif2' },
      { id: 3, title: 'GIF 3', url: 'https://dummyurl.com/gif3' },
    ];

    setSearchResults(dummySearchResults);
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Search GIFs</h2>
      <div className="flex space-x-4 mb-4">
        <input
          type="text"
          placeholder="Enter a keyword..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg flex-grow"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded-lg">
          Search
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {searchResults.map((gif) => (
          <div key={gif.id} className="bg-white border border-gray-300 rounded-lg p-4">
            <img src={gif.url} alt={gif.title} className="w-full" />
            <p className="text-center mt-2">{gif.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
