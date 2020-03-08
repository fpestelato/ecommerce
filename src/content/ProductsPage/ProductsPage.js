import React from 'react';
import ProductList from '../../components/ProductList';

export default function ProductsPage() {
  return (
    <>
      <div className="bx--grid bx--grid--full-width products-page">
        <div className="bx--row products-page__banner">
          <div className="bx--col-lg-2 bx--col-md-1 products-page__banner-logo">
            <img
              id="products-page__logo"
              src={require("./ibm-logo.png")}
            />
          </div>
          <div className="bx--col-lg-14 bx--col-md-7">
            <h2>E-commerce test</h2>
            <p>The easiest way to shop with IBM merchandise items. Simply choose what and we'll work with vendors to have your order delivered as soon as possible.</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="products-page__product-list bx--col-lg-12 bx--offset-lg-2">
        <p>Merchandise products avaliable for quotation</p>
        <ProductList />
      </div>
    </>
  );
}