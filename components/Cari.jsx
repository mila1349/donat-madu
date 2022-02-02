import styles from "../styles/PizzaList.module.css";
import form from "../styles/OrderDetail.module.css";
import React, {useState} from "react";
import { useRouter } from "next/router";

const Cari = () => {
    const [id, setId] = useState("")
     const router = useRouter();


    function handleSearch(){
        console.log("oafk")
        if(id!==""){
            router.push(`/orders/${id}`);
        }
    }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>SUDAH ORDER? CARI DISINI</h1>
      <div className={styles.wrapper}>
        <input type="text" placeholder="Masukkan ID order" className={form.input2} onChange={(e)=>setId(e.target.value)}/>
        <div className={form.button} onClick={()=>handleSearch()}>Cari</div>
      </div>
    </div>
  );
};

export default Cari;
