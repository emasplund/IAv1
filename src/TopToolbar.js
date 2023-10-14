import React, { useState } from 'react';

const TopToolbar = () => {
  const [activeCategory, setActiveCategory] = useState('food');

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    // You can add additional logic here based on the selected category
  };

  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '10px', borderBottom: '1px solid #ccc' }}>
      <button
        style={{ marginRight: '10px', backgroundColor: activeCategory === 'food' ? '#ddd' : 'transparent' }}
        onClick={() => handleCategoryChange('food')}
      >
        Food
      </button>
      <button
        style={{ backgroundColor: activeCategory === 'exercise' ? '#ddd' : 'transparent' }}
        onClick={() => handleCategoryChange('exercise')}
      >
        Exercise
      </button>
    </div>
  );
};

export default TopToolbar;