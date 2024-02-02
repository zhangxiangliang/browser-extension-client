import Panel from "~components/panel"

import "~style.css"

import Label from "~components/label"
import Layout from "~components/layout"
import { useLocal } from "~providers/local"
import { EXTENSION_NAME } from "~utils/config"

export function HomePage() {
  const { setLocalCode, setLocalToken } = useLocal()

  const onResetToken = () => {
    setLocalCode("")
    setLocalToken("")
  }

  return (
    <Layout title={`${EXTENSION_NAME}`}>
      <Panel>
        <>
          <Label label="Status" className="w-full">
            <p className="cursor-pointer bg-green-500 p-2 inline-block">
              Running
            </p>
          </Label>

          <Label label="Action">
            <button
              className="border border-slate-300/30 px-4 py-3 rounded-lg"
              onClick={() => onResetToken()}>
              Reset Token
            </button>
          </Label>
        </>
      </Panel>
    </Layout>
  )
}

export default HomePage
