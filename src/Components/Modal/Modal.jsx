import styles from './modal.module.css';

const Modal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null; 

  return (
    <div className={styles["modal-overlay"]}>
      <div className={styles["modal-content"]}>
        <h1>Registration Coming Soon!</h1>
        <h2>I am working hard to bring<br/> this feature to you. Stay tuned!</h2>
        <button className={styles["close-modal"]} onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;