import { useEffect, useState } from 'react'
import Button from './components/Button/Button'
import FieldSet from './components/FieldSet/FieldSet'
import Header from './components/Header/Header'
import TextArea from './components/TextArea/TextArea'
function App() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [result, setResult] = useState('')

  const calculateBmi = () => {
    setResult(
      ((Number(weight) / Math.pow(Number(height), 2)) * 10000)
        .toFixed(2)
        .toString()
    )
    setHeight('')
    setWeight('')
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
        onChange={(e) => setHeight(Number(e.target.value))}
      />
      <FieldSet
        desc={'Weight in kg.'}
        type={'number'}
        value={weight}
        onChange={(e) => setWeight(Number(e.target.value))}
      />
      <Button
        label={'Calculate'}
        bg={'red'}
        color={'white'}
        onClick={() => calculateBmi()}
      />
      <h2>result:{result}</h2>
      <TextArea
        title={'Guide to your BMI weight'}
        text1={'Underweight - less than 18.6'}
        text2={' Normal - range 18.6 to 24.9'}
        text3={' Overweight - over 24.9'}
      />
    </div>
  )
}

export default App
