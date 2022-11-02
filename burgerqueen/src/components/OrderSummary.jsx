import '../styles/orderSummary.css';

export default function OrderSummary({order}) {

 console.log(order)
  return (
    <>
      <form action="" className='formOrder'>
       <section className='orderContainer'>
          <table>
            <thead>
              <tr>
              <th className='titleOrder'>Cantidad</th>
                <th className='titleOrder'>Productos</th>
                <th className='titleOrder'>s/.</th>
                <th className='titleOrder'></th>
              </tr>
            </thead>
            <tbody>
               
                {order.map((prod,i) => {
                                   
                  // console.log(prod)
                  
                  return (
                    
                    <tr key ={i}>
                      <td id= 'quantity'>{prod.qty}</td>
                      <td id= 'products'>{prod.name}</td>
                      <td id= 'total'>{(prod.price)*(prod.qty)}</td>
                      <td id= 'editDelete'><button onClick={prod.onremoveMenu}>x</button></td>
                      
                    </tr>   
                  )})}
 
            </tbody>
          </table>
          <div>
              <hr/>
              <p><b>Total s/.{}</b></p>
          </div>
       </section>
       
       <section className='DataClientContainer'>
        <div className='dataClient'>
           <div >
             <label htmlFor="Cliente">Cliente:</label>
             <input type="text" className='inputClient' />
           </div>
           <div >
              <label htmlFor="Mesa"># Mesa:</label>
              <input type="text" className='inputClient'/>
            </div>
        </div>  
        <button type='button' className='btnSendOrder'>Enviar a cocina</button>
      
       </section>   
    </form>
  </>
    
  )
}
