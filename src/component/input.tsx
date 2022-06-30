import React from "react"

type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: InputProps) => {
    const {value, handleChange} = props
  return (
    <div>
        <input value={value} onChange={handleChange}  />
    </div>
  )
}

export default Input