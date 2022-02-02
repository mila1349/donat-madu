import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/donat-footer.jpg" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            DONAT KREATIF YANG HALAL DAN SEHAT
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>TEMUKAN CABANG KAMI</h1>
          <p className={styles.text}>
            Donat Madu Cihanjuang - Arcamanik
            <br /> JajananAntapani, Bandung. 
            <br /> (602) 867-1010
          </p>
          <p className={styles.text}>
            Donat Madu Sarirasa
            <br /> Jl. Sarirasa No.16
            <br /> (602) 867-1011
          </p>
          <p className={styles.text}>
          Donat Madu Cihanjuang Ahmad Yani
            <br /> Jl. A. Yani No.681 · 0838-2938-9018
            <br /> (602) 867-1012
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>JAM BUKA</h1>
          <p className={styles.text}>
            SENIN SAMPAI JUMAT
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SABTU - MINGGU
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
