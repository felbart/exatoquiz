import React from 'react'
import styles from './Modal.module.css'

const Modal = ({ isOpen, onClose, children, darkMode = false }) => {
  if (!isOpen) return null

  return (
    <div className={styles.overlay}>
      <div className={`${styles.modal} ${darkMode ? styles.dark : ''}`}>
        <button className={styles.closeBtn} onClick={onClose}>
          &times;
        </button>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Modal
