import { useState, useEffect, useCallback } from 'react'

const useModal = (time) => {
  const [open, setOpen] = useState(false)

  const toogleOpen = useCallback(() => {
    setOpen((prev) => !prev)
  }, [])

  useEffect(() => {
    if (!time || !open) return
    const timer = setTimeout(() => {
      setOpen(false)
    }, time)
    return () => {
      clearTimeout(timer)
    }
  }, [open, time])
  return { open, toogleOpen }
}

export default useModal
