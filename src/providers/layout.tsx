import React, { createContext, useContext, useState } from "react"

const LayoutContext = createContext(null)

export const LayoutProvider = ({ children }) => {
  const [type, setType] = useState("")
  const [message, setMessage] = useState("")

  const setTimeoutMessage = (newMessage) => {
    setMessage(newMessage)
    setTimeout(() => setMessage(""), 1500)
  }

  const setErrorMessage = (message) => {
    setType("error")
    setTimeoutMessage(message)
  }

  const setSuccessMessage = (message) => {
    setType("success")
    setTimeoutMessage(message)
  }

  return (
    <LayoutContext.Provider
      value={{
        type,
        message,
        setMessage,
        setErrorMessage,
        setSuccessMessage
      }}>
      {children}
    </LayoutContext.Provider>
  )
}

export const useLayout = () => useContext(LayoutContext)
