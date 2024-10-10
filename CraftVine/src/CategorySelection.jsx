import React, { useState } from 'react';

const categories = [
  'Jewellery',
  'Home Decor',
  'Kitchen & Dining',
  'Beauty & Grooming',
  'Handbags & Totes',
  'Stationery & Party Supplies',
  'Clothing',
  'Toys & Games',
];

const CategorySelection = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategorySelection = (category) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((c) => c !== category)
        : [...prevSelected, category]
    );
  };

  return (
    <div>
      <h2>Select categories:</h2>
      <div className="flex flex-col space-y-1 sm:flex-row sm:space-x-2 justify-between">
        {categories.map((category) => (
          <label key={category}>
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategorySelection(category)}
            />
            {category}
          </label>
        ))}
      </div>
    </div>
  );
};
export default CategorySelection;
