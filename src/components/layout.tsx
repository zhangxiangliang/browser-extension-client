import React from "react"

import Panel from "~components/panel"
import { useLayout } from "~providers/layout"

function Layout({ title = "", children }) {
  const { type, message, setMessage } = useLayout()

  return (
    <div className="w-[500px] bg-black text-white">
      <div className="border-b border-slate-300/30 p-4">
        <h1 className="text-xl font-medium text-white">{title}</h1>
      </div>

      <div>{children}</div>

      <Panel show={!!message}>
        <div
          className={`cursor-pointer w-full p-2 flex justify-between ${type === "error" ? "bg-red-500" : "bg-green-500"}`}
          onClick={() => setMessage("")}>
          <p>{message}</p>
          <p>❌</p>
        </div>
      </Panel>
    </div>
  )
}

export default Layout
