function Panel({ children = <></>, show = true }) {
  if (!show) return <></>
  return <div className="py-2 px-2">{children}</div>
}

export default Panel
