import React from 'react'
type Props = {
  title: string,
  text1: string,
  text2: string,
  text3: string,
}
const TextArea = ({title,text1,text2,text3}:Props) => {
  return (
    <div>
      <h4>{title}</h4>
    <p>{text1}</p>
    <p>{text2}</p>
    <p>{text3}</p>
    </div>
  )
}

export default TextArea