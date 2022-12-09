import './styles/_app.scss';

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Hats'
    },
    {
      id: 1,
      title: 'Jackets'
    },
    {
      id: 1,
      title: 'Sneakers'
    },
    {
      id: 1,
      title: 'Womens'
    },
    {
      id: 1,
      title: 'Mens'
    }
  ];
  return (
    <div className="categories-container">
      {categories.map(({ title, id }) => (
        <div key={id} className="category-container">
          <div className="background-image"></div>
          <div className="category-body-container">
            <h2>{title}</h2>
            <h2>Shop Now</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
