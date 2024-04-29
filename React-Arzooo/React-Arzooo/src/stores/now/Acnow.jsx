import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign, faLocation, faMapMarker, faTruck } from '@fortawesome/free-solid-svg-icons';

function Acnow() {
  const [price, setPrice] = useState(1499);
  const [quantity, setQuantity] = useState(1);
  const [addprice, setAddPrice] = useState(99);

  const [totalfee, setTotalFee] = useState(price + addprice);


  const haddleInc = () => {
    setQuantity(quantity + 1);
    setTotalFee(totalfee + price);

  }
  const haddleDec = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotalFee(totalfee - price);
    } else {
      alert("are to sure to cancle the order");
    }
  }

  return (
    <div>
      <Navbar />
      <div className="containernow">
        <div className="col-40">
          <p style={{ paddingLeft: 10 }}>
            <FontAwesomeIcon icon={faTruck} style={{ padding: '0px 10px 0px 0px' }} />
            Estimated Delivery</p>
          <hr />
          <div>
            <div className="col-3">
              <img className="img8" src="/assets/Ac/1.jpg" alt="wm" />
            </div>
            <div className="col-4">
              <h4 style={{ marginTop: '10px' }}>AC</h4>
              <p><FontAwesomeIcon icon={faIndianRupeeSign} />{price}</p>
              <p>Size : Free Size</p>
              <p style={{ marginBottom: '10px' }}>Quantity : {quantity}</p>
            </div>
          </div>
          <hr />
          <h3>
            <FontAwesomeIcon icon={faMapMarker} style={{ fontSize: 'medium', padding: '15px 10px 0px 10px' }} />
            Delivery Address
          </h3>
        </div>
        <div className="col-30">
          <h3>Price Details</h3>
          <div className="col-5">
            <p className="p">Product Price</p>
          </div>
          <div className="col-6">
            <p className="p" style={{ float: 'right' }}>+<FontAwesomeIcon icon={faIndianRupeeSign} />{price}</p>
          </div>
          <div className="col-5">
            <p className="p">Additional Fees</p>
          </div>
          <div className="col-6">
            <p className="p" style={{ float: 'right' }}>+<FontAwesomeIcon icon={faIndianRupeeSign} />{addprice}</p>
          </div>
          <hr />
          <div className="col-5">
            <p className="p" style={{ fontSize: 'larger' }}>Total Price</p>
          </div>
          <div className="col-6">
            <p className="p" style={{ fontSize: 'larger', float: 'right' }}><FontAwesomeIcon icon={faIndianRupeeSign} style={{ fontSize: 'medium' }} />{totalfee}
            </p>
          </div>
          <div className="button4">
            <button className='ba' onClick={haddleDec}><b>-</b></button>
            <button className='ba'><b>{quantity}</b></button>
            <button className='ba' id="inc" onClick={haddleInc}><b>+</b></button>
          </div>
          <a href="continue.html">
            <button className="button5"><b>Continue</b></button>
          </a>
        </div>
      </div>
    </div>
  )
}
export default Acnow;