import React, { useState, useEffect } from 'react'

const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const checkMobile = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', checkMobile)
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  return width
}

export default useResize
