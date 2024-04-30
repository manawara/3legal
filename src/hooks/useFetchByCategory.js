import { useEffect, useState } from 'react'
import useFetchData from './useFetchData'

const useFetchByCategory = (url) => {
  const [categories, setCategories] = useState({
    categoryRoom: '',
    price: {
      start: 0,
      end: 0,
    },
  })
  const { data, fetchDataWithParams } = useFetchData()
  const handleChange = (e) => {
    setCategories((prev) => {
      return { ...prev, [e.target.name]: e.target.name === 'price' ? JSON.parse(e.target.value) : e.target.value }
    })
  }

  useEffect(() => {
    let paramsQuery = `?populate=*&filters[category_id][name][$contains]=${categories.categoryRoom}&filters[price][$gt]=${categories.price.start}`
    if (categories.price.end > 0) {
      paramsQuery = `?populate=*&filters[category_id][name][$contains]=${categories.categoryRoom}&filters[price][$gt]=${categories.price.start}&filters[price][$lte]=${categories.price.end}`
    }
    fetchDataWithParams(url, paramsQuery)
  }, [fetchDataWithParams, categories, url])

  return { data, categories, setCategories, handleChange }
}

export default useFetchByCategory
