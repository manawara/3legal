import React, { Suspense, useState } from 'react'
import { Await, json, useLoaderData, defer } from 'react-router-dom'
import Banner from '../../components/Banner/Banner'
import Select from '../../components/Input/Select'
import ToolBar from '../../components/ToolBar/ToolBar'
import Newsletter from '../../components/Newsletter/Newsletter'
import FilterProduct from '../../components/FilterProduct/FilterProduct'
import useFetchByCategory from '../../hooks/useFetchByCategory'
import imageBanner from '../../assets/bannerShop.png'
import toolbar2x2 from '../../assets/toolbar2x2.svg'
import toolbar3x3 from '../../assets/toolbar3x3.svg'
import styles from './Shop.module.scss'
const Shop = () => {
  const { category } = useLoaderData()
  const { data, handleChange } = useFetchByCategory('http://localhost:1337/api/products')
  const [sortGrid, setSortGrid] = useState({
    grid: {
      cols: 3,
    },
  })
  const handleSortGrid = (total) => {
    return setSortGrid({ grid: { cols: total } })
  }
  return (
    <div className={styles.shop}>
      <Banner image={imageBanner} title="Shop Page" description="Let’s design the place you always imagined." />
      <div className={styles['shop-header']}>
        <div className={styles['shop-header-category']}>
          <Suspense fallback={<p>Loading</p>}>
            <Await resolve={category.data}>
              {(loadedCategory) => (
                <Select
                  fnChange={handleChange}
                  data={loadedCategory}
                  id="categories"
                  label="Categories"
                  defualtOption="All room"
                  defualtValue=""
                  name="categoryRoom"
                />
              )}
            </Await>
          </Suspense>
          <Select
            fnChange={handleChange}
            data={[
              { name: '$0 - 99.99', value: JSON.stringify({ start: 0, end: 99 }), uid: '99' },
              { name: '$100.00 - 199.99', value: JSON.stringify({ start: 100, end: 199.99 }), uid: '199' },
              { name: '$200.00 - 299.99', value: JSON.stringify({ start: 200, end: 299.99 }), uid: '299' },
              { name: '$300.00 - 399.99', value: JSON.stringify({ start: 300, end: 399.99 }), uid: '399' },
              { name: '$400.00+', value: JSON.stringify({ start: 400, end: null }), uid: '400' },
            ]}
            id="price"
            label="PRICE"
            defualtOption="All Price"
            name="price"
            defualtValue={JSON.stringify({ start: 0 })}
          />
        </div>

        <div className={styles['shop-toolbar']}>
          <ToolBar image={toolbar3x3} onAction={() => handleSortGrid(3)} />
          <ToolBar image={toolbar2x2} onAction={() => handleSortGrid(2)} />
        </div>
      </div>
      <FilterProduct grid={sortGrid.grid.cols} data={data} />
      <Newsletter />
    </div>
  )
}

const loaderCategories = async () => {
  const response = await fetch('http://localhost:1337/api/categories')

  if (!response.ok) {
    throw json({ message: 'Could not fetch categories' }, { status: 500 })
  } else {
    const resData = response.json()

    return resData
  }
}

export const loader = async () => {
  return defer({
    category: await loaderCategories(),
  })
}

export default Shop
