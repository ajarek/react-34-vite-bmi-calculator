import React from 'react'
import './FieldSet.css'
type Props = {
  desc: string
  type: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const FieldSet = ({ desc, type, value, onChange }: Props) => {
  return (
    <div className='field-set'>
      <fieldset>
        <legend>{desc}</legend>
        <input
          type={type}
          value={value}
          onChange={onChange}
        />
      </fieldset>
    </div>
  )
}

export default FieldSet
