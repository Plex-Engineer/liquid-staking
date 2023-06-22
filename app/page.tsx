import DCard from "@/components/d_card";
import styles from "./page.module.css";
import { Space_Grotesk } from "next/font/google";

import { result } from "@/config/result";

const spaceGrotesk = Space_Grotesk({
  weight: "400",
  subsets: ["latin"],
});

//function change 2500000 to 2.5M or 250000 to 250K
function toCurrencyFormat(value: string) {
  const num = Number(value);
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num.toString();
}
export default function Home() {
  //   const data = Convert.toLSData(JSON.stringify(result));

  return (
    <main className={(styles.main, spaceGrotesk.className)}>
      <div className={styles.container}>
        <div className={styles["tiles-grid"]}>
          {result.LS_Dashboard.map((item, index) => (
            <DCard
              key={index}
              name={item.name}
              value={
                item.type == undefined
                  ? toCurrencyFormat(item.value)
                  : item.value
              }
              symbol={item.symbol}
              additional={item.additional}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
