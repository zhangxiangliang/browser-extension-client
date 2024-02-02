import "~style.css"

import { useEffect } from "react"

import { ErrorPage } from "~pages/error"
import { HomePage } from "~pages/home"
import { TokenPage } from "~pages/token"
import { LayoutProvider } from "~providers/layout"
import { LocalProvider, useLocal } from "~providers/local"
import { PageProvider, usePage } from "~providers/page"
import { IS_ENCRYPT_SETUP } from "~utils/config"
import { validate } from "~utils/crypto"

function Popup() {
  return (
    <LayoutProvider>
      <LocalProvider>
        <PageProvider>
          <Content />
        </PageProvider>
      </LocalProvider>
    </LayoutProvider>
  )
}

function Content() {
  const { localCode, localToken } = useLocal()
  const { page, setPage } = usePage()

  useEffect(() => {
    if (!IS_ENCRYPT_SETUP) return setPage("error")
    if (!validate(localToken, localCode)) return setPage("token")
    setPage("home")
  }, [localCode, localToken, setPage])

  return (
    <>
      {page === "home" && <HomePage />}
      {page === "token" && <TokenPage />}
      {page === "error" && <ErrorPage />}
    </>
  )
}

export default Popup
