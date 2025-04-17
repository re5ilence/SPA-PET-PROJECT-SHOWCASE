import styles from './bubbles.module.css'

function Bubbles() {
    return (
        <div className={styles["bubble-container"]}>
            <div className={styles.bubble} />
            <div className={styles.bubble} />
            <div className={styles.bubble} />
            <div className={styles.bubble} />
        </div>
    );
}

export default Bubbles;