import { useState } from "react";
import styles from "../styles/OrderDetail.module.css";

const OrderDetail = ({ total, cart, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = () => {
    const donat = []
    cart.products.map(item=>{
      donat.push({idProduct:item._id, quantity:item.quantity})
    })
    createOrder({ customer, address, donat, total, method: 0 });
  };

  // console.log(cart.products)
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Anda akan membayar Rp. 12.000 untuk pesan antar</h1>
        <div className={styles.item}>
          <label className={styles.label}>Nama</label>
          <input
            placeholder="Andi"
            type="text"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>No HP</label>
          <input
            type="text"
            placeholder="0896 1234 1333"
            className={styles.input}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Alamat</label>
          <textarea
            rows={5}
            placeholder="Jl. tubagus ismail bawah no. 2"
            type="text"
            className={styles.textarea}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className={styles.button} onClick={handleClick}>
          Order
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
