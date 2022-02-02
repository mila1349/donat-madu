import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Admin.module.css";
import Add from "../../components/Add"
import Order from "../../components/Order";

const Index = ({ orders, products }) => {
  const [close, setClose] = useState(true);
  const [openDetail, setOpenDetail] = useState(false)
  const [pizzaList, setPizzaList] = useState(products);
  const [orderList, setOrderList] = useState(orders);
  const status = ["Disiapkan", "Diantar", "Selesai"];

  const [selectedOrder, setSelectedOrder] = useState({donat:[]})

  const handleDelete = async (id) => {
    console.log(id);
    try {
      const res = await axios.delete(
        "http://localhost:3000/api/products/" + id
      );
      setPizzaList(pizzaList.filter((pizza) => pizza._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleStatus = async (id) => {
    const item = orderList.filter((order) => order._id === id)[0];
    const currentStatus = item.status;

    if(currentStatus<2){
      try {
        const res = await axios.put("http://localhost:3000/api/orders/" + id, {
          status: currentStatus + 1,
        });
        setOrderList([
          res.data,
          ...orderList.filter((order) => order._id !== id),
        ]);
      } catch (err) {
        console.log(err);
      }
    }
  };


  function handleOpen(order){
    const donat = []
    order.donat.map(item=>{
      console.log("nahhadhfja")
      for (let index = 0; index < pizzaList.length; index++) {
        if(pizzaList[index]._id===item.idProduct){
          const temp = {
            img:pizzaList[index].img,
            title:pizzaList[index].title,
            price:pizzaList[index].price,
            quantity:item.quantity,
            total:item.quantity*pizzaList[index].price
          }
          donat.push(temp)
        }
      }

    })
    setSelectedOrder({id:order._id, customer:order.customer, donat:donat, total:order.total, status:order.status})
    setOpenDetail(true)
  }

  return (
    <div className={styles.container}>
      <Order
        selectedOrder={selectedOrder}
        open={openDetail}
        setOpen={setOpenDetail}
        handleStatus={handleStatus}
      />

      <div className={styles.item}>
        <button onClick={()=>setClose(false)} className={styles.button}>TAMBAH DONAT</button>
        {!close && <Add setClose={setClose} />}
        <h1 className={styles.title}>Donat</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Donat</th>
              <th>Id</th>
              <th>Nama</th>
              <th>Harga</th>
              <th>Aksi</th>
            </tr>
          </tbody>
          {pizzaList.map((product) => (
            <tbody key={product._id}>
              <tr className={styles.trTitle}>
                <td>
                  <Image
                    src={product.img}
                    width={50}
                    height={50}
                    objectFit="cover"
                    alt=""
                  />
                </td>
                <td>{product._id.slice(0, 5)}...</td>
                <td>{product.title}</td>
                <td>Rp. {product.price}</td>
                <td>
                  <button
                    className={styles.button}
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>Pesanan</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Id</th>
              <th>Pelanggan</th>
              <th>Total</th>
              <th>Bayar</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </tbody>
          {orderList.map((order) => (
            <tbody key={order._id}>
              <tr className={styles.trTitle}>
                <td>{order._id.slice(0, 5)}...</td>
                <td>{order.customer}</td>
                <td>Rp. {order.total}</td>
                <td>
                  {order.method === 0 ? <span>cash</span> : <span>paid</span>}
                </td>
                <td>{status[order.status]}</td>
                <td>
                  <button onClick={() => handleStatus(order._id)} className={styles.button}>
                    Next Stage
                  </button>
                  <button onClick={() => handleOpen(order)} className={styles.button}>
                    Lihat
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";

  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  const productRes = await axios.get("http://localhost:3000/api/products");
  const orderRes = await axios.get("http://localhost:3000/api/orders");

  return {
    props: {
      orders: orderRes.data,
      products: productRes.data,
    },
  };
};

export default Index;
