import React, { useEffect } from 'react'
import styles from './Newsletter.module.scss'
import { Form, useActionData, useNavigation } from 'react-router-dom'
import Modal from '../Modal/Modal'
import useModal from '../../hooks/useModal'

const Newsletter = () => {
  const data = useActionData()
  const { open, toogleOpen } = useModal(2000)
  const navigation = useNavigation()
  console.log(data && data.message && data.message)
  useEffect(() => {
    if (navigation.state === 'idle' && data && data.message) {
      toogleOpen()
    }
  }, [navigation.state, data, toogleOpen])

  return (
    <section className={styles.newsletter}>
      <h6 className={styles['newsletter-title']}>Join Our Newsletter</h6>
      <p className={styles['newsletter-description']}>Sign up for deals, new products and promotions</p>
      <Form method="post" action="">
        <div className={styles['newsletter-content']}>
          <input type="email" className={styles['newsletter-input']} placeholder="Email address" name="email" />

          <button>signup</button>
        </div>
      </Form>
      {data && <div className={styles['newsletter-error']}>{data.email}</div>}
      {open && <Modal open={open}>{data && data.message}</Modal>}
    </section>
  )
}

export default Newsletter
