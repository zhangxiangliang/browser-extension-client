import Label from "./label"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Input({
  label = "",
  type = "text",
  value = "",
  placeholder = "",
  className = "space-y-2 p-2 w-1/4",
  onChange = (e) => {}
}: InputProps) {
  return (
    <Label className={className} label={label}>
      <input
        type={type}
        value={value as any}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-lg border border-slate-300/30 bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter border-form-strokedark bg-form-input focus:border-primary"
      />
    </Label>
  )
}

export default Input
