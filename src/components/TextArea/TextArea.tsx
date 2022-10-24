import './TextArea.css'

type Props = {
  title: string
  text1: string
  text2: string
  text3: string
  infoColor1: string
  infoColor2: string
  infoColor3: string
}
const TextArea = ({
  title,
  text1,
  text2,
  text3,
  infoColor1,
  infoColor2,
  infoColor3,
}: Props) => {
  return (
    <div className={'textarea'}>
      <h5>{title}</h5>
      <p style={{ color: infoColor1 }}>{text1}</p>
      <p style={{ color: infoColor2 }}>{text2}</p>
      <p style={{ color: infoColor3 }}>{text3}</p>
    </div>
  )
}

export default TextArea
