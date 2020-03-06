import React from 'react';
import ProductList from '../../components/ProductList';

export default function ProductsPage() {
  return (
    <>
      <div className="bx--grid bx--grid--full-width products-page">
        <div className="bx--row products-page__banner">
          <div className="bx--col-lg-2 bx--col-md-2">
            <img
              className="products-page__logo"
              src='https://logodownload.org/wp-content/uploads/2014/04/ibm-logo-0.png'
            />
          </div>
          <div className="bx--col-lg-14 bx--col-md-6">
            <h2>E-commerce test</h2>
            <p>The easiest way to shop with IBM merchandise items. Simply choose what and we'll work with vendors to have your order delivered as soon as possible.</p>
          </div>
        </div>
        <div className="bx--row products-page__catalog">
          <div className="bx--col-md-16 bx--col-lg-12 bx--offset-md-16 bx--offset-lg-2">
            <p>Merchandise products avaliable for quotation</p>
          </div>
          <ProductList />
        </div>
      </div>
    </>
  );
}