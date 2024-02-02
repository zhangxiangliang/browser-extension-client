function Label({
  label = "",
  children = <></>,
  className = "space-y-2 p-2 w-1/4"
}) {
  return (
    <div className={`space-y-2 p-2 w-1/4 ${className}`}>
      <label className="block text-sm font-medium text-white">{label}</label>
      <div>{children}</div>
    </div>
  )
}

export default Label
