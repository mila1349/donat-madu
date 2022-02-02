import styles from "../styles/Cart.module.css";
import modal from "../styles/OrderDetail.module.css";
import Image from "next/image";
import React from "react";

const Cart = ({selectedOrder, open, setOpen, handleStatus}) => {
  const status = ["Disiapkan", "Diantar", "Selesai"];

  function changeStatus(){
    handleStatus(selectedOrder.id)
    if(selectedOrder.status<2){
      selectedOrder.status=selectedOrder.status+1
    }
    
  }
  return (
    <div className={open?modal.container:modal.close}>
    <div className={modal.wrapper2}>
      
      <div className={styles.left}>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Donat</th>
              <th>Nama</th>
              <th>Harga</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </tbody>
          <tbody>
            {selectedOrder.donat.map((product) => (
              <tr className={styles.tr} key={product._id}>
                <td>
                  <div className={styles.imgContainer}>
                    <Image
                      src={product.img}
                      layout="fill"
                      objectFit="cover"
                      alt=""
                    />
                  </div>
                </td>
                <td >
                  <span className={styles.name}>{product.title}</span>
                </td>
                <td>
                  <span className={styles.price}>Rp. {product.price}</span>
                </td>
                <td>
                  <span className={styles.quantity}>{product.quantity}</span>
                </td>
                <td>
                  <span className={styles.total}>
                    Rp. {product.total}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>TOTAL ORDER</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Pembeli:</b>{selectedOrder.customer}
          </div>

          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>ID Pesan:</b>{selectedOrder.id}
          </div>

          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>Rp. {selectedOrder.total}
          </div>

          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Status:</b>{status[selectedOrder.status]}
          </div>
          
          <button  className={styles.button} onClick={()=>changeStatus()}>
            Next Stage
          </button>
          <button onClick={() => setOpen(false)} className={styles.button}>
            Close
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Cart;
