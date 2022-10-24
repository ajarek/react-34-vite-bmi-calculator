import { useEffect, useState } from 'react'
import Button from './components/Button/Button'
import FieldSet from './components/FieldSet/FieldSet'
import Header from './components/Header/Header'
import TextArea from './components/TextArea/TextArea'
function App() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [result, setResult] = useState('')
  const [color1, setColor1] = useState('black')
  const [color2, setColor2] = useState('black')
  const [color3, setColor3] = useState('black')

  const calculateBmi = () => {
    setResult(
      ((Number(weight) / Math.pow(Number(height), 2)) * 10000)
        .toFixed(2)
        .toString()
    )
  }

  useEffect(() => {
    if (result !== '') {
      if (Number(result) < 18.6) {
        setColor1('blue')
      } else if (Number(result) >= 18.6 && Number(result) <= 24.9) {
        setColor2('green')
      } else if (Number(result) > 24.9) {
        setColor3('red')
      } else {
        setColor1('black')
        setColor2('black')
        setColor3('black')
      }
    }
    return clearBmi()
  }, [result])

  const clearBmi = () => {
    setTimeout(() => {
      setHeight('')
      setWeight('')
      setResult('')
      setColor1('black')
      setColor2('black')
      setColor3('black')
    }, 4000)
  }

  return (
    <div className='App'>
      <Header title={'BMI Calculator'}>
        <img
          src='./src/assets/bmi.png'
          alt='icon bmi'
        />
      </Header>
      <FieldSet
        desc={'Height in cm.'}
        type={'number'}
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <FieldSet
        desc={'Weight in kg.'}
        type={'number'}
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <Button
        label={'Calculate'}
        bg={'red'}
        color={'white'}
        onClick={() => calculateBmi()}
      />
      <h2>BMI:{result}</h2>
      <TextArea
        title={'Guide to your BMI weight'}
        text1={'Underweight - less than 18.6'}
        text2={' Normal - range 18.6 to 24.9'}
        text3={' Overweight - over 24.9'}
        infoColor1={color1}
        infoColor2={color2}
        infoColor3={color3}
      />
    </div>
  )
}

export default App
