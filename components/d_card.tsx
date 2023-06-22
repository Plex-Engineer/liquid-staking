import { LSDashboard } from "@/utils/data";
import styles from "./card.module.css";

const DCard = (props: LSDashboard) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_title}>{props.name}</div>
      <p className={styles.card_value}>
        {props.value} <span className={styles.card_symbol}>{props.symbol}</span>
      </p>
      <p className={styles.card_additional}>{props.additional}</p>
    </div>
  );
};

export default DCard;
