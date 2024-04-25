import React, { useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import styles from './Modal.module.scss'

const Modal = ({ open, onClose, children }) => {
  const dialogRef = useRef()
  useEffect(() => {
    if (open) {
      dialogRef.current.show()
    } else {
      dialogRef.current.close()
    }
  }, [open])

  return createPortal(
    <dialog open={open} ref={dialogRef} className={styles.modal} onClose={onClose}>
      <div> {children}</div>
    </dialog>,
    document.getElementById('modal')
  )
}

export default Modal
