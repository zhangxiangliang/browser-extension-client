import React, { createContext, useContext, useEffect } from "react"

import { useStorage } from "@plasmohq/storage/hook"

const LocalContext = createContext(null)

export const LocalProvider = ({ children }) => {
  const [localToken, setLocalToken, { setStoreValue: setStoreLocalToken }] =
    useStorage<string>("token", (v) => (v === undefined ? "" : v))

  const [localCode, setLocalCode, { setStoreValue: setStoreLocalCode }] =
    useStorage<string>("code", (v) => (v === undefined ? "" : v))

  useEffect(() => {
    console.log(`current ${localCode} ${localToken}`)
  }, [localCode, localToken])

  return (
    <LocalContext.Provider
      value={{
        localCode,
        setLocalCode,
        setStoreLocalCode,
        localToken,
        setLocalToken,
        setStoreLocalToken
      }}>
      {children}
    </LocalContext.Provider>
  )
}

export const useLocal = () => useContext(LocalContext)
