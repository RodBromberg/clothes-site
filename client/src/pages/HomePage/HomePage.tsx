import React from 'react';
import {SearchBar} from '../../components/SearchBar/SearchBar';
import './HomePage.css';

// import { CustomerReviews } from './CustomerReviews';

export const HomePage = () => {
  return (
    <div className="HomePage">
      <header className="HomePage-header">
        {/* <SearchBar /> */}
      </header>
      <main className="HomePage-main">
        {/* Add product categories, filters, and recommendations here */}
      </main>
      <aside className="HomePage-aside">
        {/* <CustomerReviews /> */}
      </aside>
    </div>
  );
};

export default HomePage;
