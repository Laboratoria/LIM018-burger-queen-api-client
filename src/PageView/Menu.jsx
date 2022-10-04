import React, { useState, useEffect } from 'react';
import '../PageStyle/Menu.scss';
import NavBar from './Navbar';
// import Modal from './Modal';

export default function Menu() {
  const [products, setProducts] = useState([]);
  const [optionProducts, setOptionProducts] = useState('Desayuno');
  const [client, setClient] = useState('');
  const [nameProduct, setNameProduct] = useState([]);
  const sessionStorageCall = () => {
    const userInfo = sessionStorage.getItem('userData');
    const userObject = JSON.parse(userInfo);
    return userObject;
  };

  const postOrder = () => {
    const userData = sessionStorageCall();
    const orderData = {
      userId: userData.userId,
      client: { client }.client,
    };
    const { token } = sessionStorageCall();
    fetch('http://localhost:3001/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(orderData),
    }).then((res) => console.log(res));
  };

  useEffect(() => {
    const { token } = sessionStorageCall();
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

  const optionMenu = products.filter((e) => e.type === optionProducts);
  // const newOrder = () => (<Modal />);
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
            { optionMenu.map((product) => (
              // eslint-disable-next-line react/no-array-index-key
              <div key={product.id} className="product-card">
                <h1 className="Price-product">{product.price}</h1>
                <picture className="Image">
                  <img src={product.image} alt="menu-cafe" className="Image-product" />
                </picture>
                <div className="Image-menu-name">
                  <button type="button" onClick={() => setNameProduct(() => [...nameProduct, { name: product.name, price: product.price }])} className="Btn-cantidad-plus">+</button>
                  <p className="Name-product">{product.name}</p>
                  <button type="button" className="Btn-cantidad-minus">-</button>
                </div>
              </div>
            ))}

          </div>

          <div className="Order-table">
            <input type="text" placeholder="Nombre del cliente" onChange={(e) => setClient(e.target.dataset)} />
            <button type="button"> + Nueva orden  </button>
            <h4>{client}</h4>

            <table className="">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Cant.</th>
                  <th>Import.</th>
                </tr>
              </thead>
              <tbody>
                {nameProduct.map((product, i) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <tr key={i}>
                    <td>{product.name}</td>
                    <td>1</td>
                    <td>{product.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              {/* <div>
                <h5>Items</h5>
                <div>{nameProduct}</div>
              </div> */}

              {/* <div>
                <h5>Cant.</h5>
                <p>1</p>
                <p>2</p>
                <p>1</p>
              </div>
              <div>
                <h5>Imp.</h5>
                <p>$5.00</p>
                <p>$14.00</p>
                <p>$7.00</p>
              </div> */}
            </div>
            <button type="button" onClick={postOrder}>Listo</button>
          </div>

        </div>
      </div>
    </div>
  );
}
