import { useCallback, useState } from 'react'

const useFetchData = () => {
  const [data, setData] = useState()
  const fetchDataWithParams = useCallback(async (url, query = '') => {
    const response = await fetch(url + query)
    if (!response.ok) {
      throw Error({ message: 'Something went wrong' }, { status: 422 })
    }
    const resData = await response.json()
    setData(resData.data)
  }, [])

  return { fetchDataWithParams, data }
}
export default useFetchData
