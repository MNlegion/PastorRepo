import React from 'react';

const CategoryCard = ({ category }) => {
  return (
    <div className="card m-3" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{category.title}</h5>
        <p className="card-text">{category.description}</p>
        <a href="#" className="btn btn-primary">Explore</a>
      </div>
    </div>
  );
};

const CategoryList = () => {
  // Sample categories data (replace with your own)
  const categories = [
    {
      id: 1,
      title: 'Technology',
      description: 'Explore the latest in technology trends.'
    },
    {
      id: 2,
      title: 'Travel',
      description: 'Discover amazing destinations around the world.'
    },
    {
      id: 3,
      title: 'Food & Drink',
      description: 'Indulge in culinary delights from across the globe.'
    }
  ];

  return (
    <div className="container">
      <h2 className="my-4">Selected Categories</h2>
      <div className="row">
        {categories.map(category => (
          <div key={category.id} className="col-md-4">
            <CategoryCard category={category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
