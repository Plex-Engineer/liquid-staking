import DCard from "@/components/d_card";
import styles from "./page.module.css";
import { result } from "@/config/result";
import Table from "@/components/table";
import Header from "@/components/header";
import Text from "@/components/text";
import { testAll } from "./actions";

export const runtime = 'edge';

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
export default async function Home() {
  //   const data = Convert.toLSData(JSON.stringify(result));
  const data = await testAll();
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.container}>
        <Text size="lg" font="Video_Type">
          Liquid Staking Dashboard
        </Text>
        <div className={styles["tiles-grid"]}>
          {result.LS_Dashboard.map((item, index) => (
            <DCard
              key={index}
              name={item.name}
              value={
                item.type == undefined
                  ? //@ts-ignore
                    toCurrencyFormat(data[item.key])
                  : //@ts-ignore
                    data[item.key]
              }
              symbol={item.symbol}
              additional={item.additional}
            />
          ))}
        </div>
      </div>
      <div className={styles["table-container"]}>
        <Text size="lg" font="Video_Type">
          Insurances
        </Text>
        <Text size="md" font="Video_Type">
          Active (Paired Insurances)
        </Text>
        <Table
          headers={Object.keys(result.Insurances.active[0])}
          data={data!.insurances_active.map((item) =>
            Object.values(item ?? "null")
          )}
        />
      </div>

      <div className={styles["table-container"]}>
        <Text size="md" font="Video_Type">
          Candidates (Pairing Insurances)
        </Text>
        <Table
          headers={Object.keys(result.Insurances.candidates[0])}
          data={data!.insurances_candidate.map((item) =>
            Object.values(item ?? "null")
          )}
        />
      </div>
      <div
        style={{
          height: "4.3rem",
        }}
      ></div>
      <Text size="lg" font="Video_Type" align="center">
        Pending Requests
      </Text>
      <div className={styles.row}>
        <div className={styles["table-container"]}>
          <Text size="md" font="Video_Type">
            Withdraw Insurance Requests
          </Text>
          <Table
            headers={Object.keys(
              result.Insurances.pending.withdraw_requests[0]
            )}
            data={result.Insurances.pending.withdraw_requests.map((item) =>
              Object.values(item)
            )}
          />
        </div>
        <div className={styles["table-container"]}>
          <Text size="md" font="Video_Type">
            Liquid Unstake Requests
          </Text>
          <Table
            headers={Object.keys(result.Insurances.liquid_unstake_requests[0])}
            data={result.Insurances.liquid_unstake_requests.map((item) =>
              Object.values(item)
            )}
          />
        </div>
      </div>
    </main>
  );
}
