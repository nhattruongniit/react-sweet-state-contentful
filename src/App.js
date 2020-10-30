import React, { Fragment, useEffect, useState } from 'react';

// services
import deliveryRequest from './services/deliveryRequest';

// components
import Counter from './Counter';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      const res = await deliveryRequest.getEntries('2PqfXUJwE8qSYKuM0U6w8M');
      setItems(res.items);
    }
    fetchItems();
  }, [])

  function renderProducts(products) {
    return products.map(renderSingleProduct)
  }
  
  function renderSingleProduct(product) {
    const fields = product.fields;
    
    return (
      <Fragment key={fields.slug}>
        {fields.image && <div className="product-in-list">
          <div className="product-image">
              <a href="product/hudson-wall-cup">
              <img src={fields.image[0].fields.file.url} alt="Meat" width="150" height="150" />
            </a>
          </div>
          <div className="product-details">
            <div className="product-header">
              <h2>
                <a href="product/hudson-wall-cup">Hudson Wall Cup</a>
              </h2> by 
              <a href="brand/651CQ8rLoIYCeY6G0QG22q">Normann Copenhagen</a>
            </div>
            <p className="product-categories">Home &amp; Kitchen</p>
            <p></p>
            <p>Wall Hanging Glass Flower Vase and Terrarium</p>
            <p></p>
            <p>11 €</p>
            <p className="product-tags">
              <span>Tags:</span> vase, flowers, accessories
            </p>
          </div>
        </div>}
      </Fragment>
    )
  }

  return (
    <div className="App">
      <h2>Demo react-sweet-state</h2>
      <h3>Simple counter</h3>
      <Counter />
      <br/>
      <h2>Demo contenful javascript delivery</h2>
      {items.length > 0 && renderProducts(items)}
      <br/>
      <br/>
    </div>
  );
}

export default App;
