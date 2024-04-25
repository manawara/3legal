// import { createContext, useContext, useState } from 'react'

// const ContextModal = createContext()

// export const useContextModal = () => {
//   const ctx = useContext(ContextModal)
//   if (!ctx) {
//     throw new Error('Modal-related components must be wrapped by <Modal>.')
//   }
//   return ctx
// }

// export const Modal = ({ children }) => {
//   const [open, setOpen] = useState(false)

//   const toogleOpen = () => {
//     setOpen((prev) => !prev)
//   }
//   const contextModal = {
//     open,
//     toogleOpen,
//   }

//   return <ContextModal.Provider value={contextModal}>{children}</ContextModal.Provider>
// }
