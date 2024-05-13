import React from 'react'
import Cart from '../../layout/Cart'
import Input from '../Input/Input'
import Select from '../Input/Select'
import data from '../../country/country.json'
import styles from './Checkout.module.scss'
import Button from '../Button/Button'
import OrderSummary from '../OrderSummary/OrderSummary'
const Checkout = () => {
  return (
    <>
      <form>
        <Cart title="Contact information">
          <div className={styles['checkout-col']}>
            <Input label="FIRST NAME" placeholder="First name" />
            <Input label="LAST NAME" placeholder="Last name" />
          </div>
          <Input label="PHONE NUMBER" placeholder="Phone number" />
          <Input label="EMAIL ADDRESS" placeholder="Email address" />
        </Cart>
        <Cart title="Shipping address">
          <Input label="STREET ADDRESS *" placeholder="Street address" />
          <Select data={data} defualtOption="Country" name="country" label="Country *" redirect />
          <Input type="text" label="TOWN / CITY *" placeholder="Town / City" />
          <div className={styles['checkout-col']}>
            <Input type="text" label="STATE" placeholder="State" />
            <Input type="number" label="ZIP CODE" placeholder="Zip Code" />
          </div>
        </Cart>
        <Button>Place Order</Button>
      </form>
      <Cart title="Order Summary">
        <OrderSummary />
      </Cart>
    </>
  )
}

export default Checkout
