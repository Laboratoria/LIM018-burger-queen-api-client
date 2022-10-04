import React, { useState, useEffect } from 'react';
import '../PageStyle/Menu.scss';
import NavBar from './Navbar';

export default function Menu() {
  const [products, setProducts] = useState([]);
  // const [client, setClient] = useState('');
  // const orderData = {
  //   userId: '3',
  //   client: { client }.client,
  // };
  // const postOrder = () => {
  //   fetch('http://localhost:3001/orders', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       // eslint-disable-next-line quote-props
  //       'authorization': `Bearer ${token}`,
  //     },
  //     body: JSON.stringify(orderData),
  //   });
  // };

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    fetch('http://localhost:3001/products', {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json())
      .then((result) => {
        setProducts(result);
      });
  }, []);

  // const optionAlmuerzo = () => products.filter((e) => e.type === 'Almuerzo y cena');
  const [optionProducts, setOptionProducts] = useState('Desayuno');
  const optionMenu = products.filter((e) => e.type === optionProducts);
  const [name, setName] = useState('');
  // const nuvValu = () => {
  //  setOptionProducts(() => { products.filter((e) => e.type === 'Almuerzo y cena'); });
  // };

  // console.log(desayunoMenu);

  return (
    <div className="Background-menu">
      <NavBar />
      <div className="Background-image">
        <h2 className="Title">Menú</h2>

        <div className="Container-all-menu">

          <div className="Menu-options-container">
            <button className="Menu-options" type="button" onClick={() => setOptionProducts('Almuerzo y cena')}>Almuerzo y cena</button>
            <button type="button" className="Menu-options" onClick={() => setOptionProducts('Desayuno')}>Desayuno</button>
          </div>

          <div className="Image-products-container">
            { optionMenu.map((product, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <div key={index} className="product-card">
                <h1 className="Price-product">{product.price}</h1>
                <picture className="Image">
                  <img src={product.image} alt="menu-cafe" className="Image-product" />
                </picture>
                <div className="Image-menu-name">
                  <button type="button" className="Btn-cantidad-plus">+</button>
                  <button type="button" className="Name-product" onClick={() => setName(product.name)}>{product.name}</button>
                  <button type="button" className="Btn-cantidad-minus">-</button>
                </div>
              </div>
            ))}

          </div>

          <div className="Order-table-container">
            {/* <input type="text" placeholder="Nombre del cliente" onChange={(e) =>
              setClient(e.target.value)} /> */}
            {/* <button type="button" onClick={getProducts}> Agregar</button> */}
            {/* <h4>{client}</h4> */}
            <div>
              <table className="Table-order">
                <thead>
                  <tr className="Row-head">
                    <th>PRODUCTO</th>
                    <th>CANT.</th>
                    <th>IMPORTE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="Row-body">{name}</tr>
                </tbody>
              </table>
            </div>
            <button type="button">Listo</button>
          </div>

        </div>
      </div>
    </div>
  );
}
