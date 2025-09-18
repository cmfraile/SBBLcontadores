import styles from "@/styles/logo.module.css";

export const Logo = ({imgsrc}:{imgsrc:string}) => {

    return <img src={imgsrc} className={styles.imglogo}/>

};
