import { useState } from "react"

import Input from "~components/input"
import Label from "~components/label"
import Panel from "~components/panel"

import "~style.css"

import Layout from "~components/layout"
import { useLayout } from "~providers/layout"
import { useLocal } from "~providers/local"
import { EXTENSION_NAME } from "~utils/config"
import { validate } from "~utils/crypto"

export function TokenPage() {
  const [code, setCode] = useState("")
  const [token, setToken] = useState("")

  const { setLocalCode, setLocalToken } = useLocal()
  const { setSuccessMessage, setErrorMessage } = useLayout()

  const onConfirm = async () => {
    if (!validate(token, code)) {
      return setErrorMessage("Token or Code Error")
    }
    setLocalCode(code)
    setLocalToken(token)
    setSuccessMessage("Welcome 🎉")
  }

  return (
    <Layout title={`${EXTENSION_NAME} Setup`}>
      <Panel>
        <>
          <Input
            label="Token"
            placeholder="Please enter your token"
            className="space-y-2 p-2 w-full"
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />

          <Input
            label="Code"
            placeholder="Please enter your code"
            className="space-y-2 p-2 w-full"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

          <Label label="Action">
            <>
              <button
                className="border border-slate-300/30 px-4 py-3 rounded-lg"
                onClick={() => onConfirm()}>
                Confirm
              </button>
            </>
          </Label>
        </>
      </Panel>
    </Layout>
  )
}

export default TokenPage
