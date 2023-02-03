import React from 'react';
import './HomePage.css';

import { SearchBar } from '../../components/SearchBar/SearchBar';
import { CustomerReviews } from '../../components/CustomerReviews/CustomerReviews';
// import ProductCategories from './ProductCategories';
// import ProductFilters from './ProductFilters';
// import ProductRecommendations from './ProductRecommendations';
// import CustomerReviews from './CustomerReviews';

export const HomePage = () => {
  return (
    <div className="HomePage">
      <header className="HomePage-header">
        <SearchBar />
      </header>
      <main className="HomePage-main">
        {/* <ProductCategories />
        <ProductFilters />
        <ProductRecommendations /> */}
      </main>
      <aside className="HomePage-aside">
        <CustomerReviews />
      </aside>
    </div>
  );
};

export default HomePage;