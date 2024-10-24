import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const Card = ({ item }) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>hello</span>
        <span className={styles.number}>34565</span>
        <span className={styles.detail}>sdfu dfsdghfhsd </span>
      </div>
    </div>
  );
};

export default Card;
