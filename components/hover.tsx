import styles from "./hover.module.css";

interface Props {
  content: string;
  children: React.ReactNode;
}
const Hover = ({ children, content }: Props) => {
  return (
    <div className={styles.item} data-content={content}>
      {children}
      <span className={styles.caption}>{content}</span>
    </div>
  );
};

export default Hover;
