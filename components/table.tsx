import styles from "./table.module.css";

interface Props {
  headers: string[];
  data: (string | number)[][];
}

function makeExcerpt(text: string, length: number) {
  if (text.length > length) {
    return text.substring(0, length) + "...";
  }
  return text;
}

function formatTitle(title: string) {
  return title
    .replace(/_/g, " ")
    .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
}

const Table = (props: Props) => {
  return (
    <div className={styles.table}>
      <div className={styles.row + " " + styles.header}>
        {props.headers.map((header, index) => {
          return (
            <div key={index} className={styles.cell}>
              {formatTitle(header)}
            </div>
          );
        })}
      </div>
      {props.data.map((row, index) => {
        return (
          <div key={index} className={styles.row}>
            {row.map((cell, index) => {
              return (
                <div key={index} className={styles.cell}>
                  {makeExcerpt(cell.toString(), 10)}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Table;
