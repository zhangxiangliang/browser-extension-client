import Panel from "~components/panel"

import "~style.css"

import Layout from "~components/layout"

export function ErrorPage() {
  return (
    <Layout title="Error">
      <Panel>
        <div className="cursor-pointer bg-red-500 w-full p-2 flex justify-between">
          <p>Miss PUBLIC_KEY and PRIVATE_KEY</p>
        </div>
      </Panel>
    </Layout>
  )
}

export default ErrorPage
