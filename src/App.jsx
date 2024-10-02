import MultiSelect from "./MultiSelect"
import SingleSelect from "./SingleSelect"
import styles from './Select.module.scss'
import { useState } from "react"
import Select from 'react-select'
import './CustomSelect.scss'
import makeAnimated from 'react-select/animated'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'cheese', label: 'Cheese' },
  { value: 'milk', label: 'Milk' },
  { value: 'bread', label: 'Bread' }
]
const isMulti = true

const animatedComponents = makeAnimated()

function App() {

  const [products, setProducts] = useState(['chocolate'])

  const getValue = () => {
    return isMulti
      ? options.filter(c => products.indexOf(c.value) >= 0)
      : options.find(c => c.value == products)
  }

  const onChange = (newValue) => {
    setProducts(isMulti ? newValue.map(i => i.value) : newValue.value)
  }

  return (
    <>
      <SingleSelect />
      <MultiSelect />
      <div className={styles.main}>
        <h1>Choose product (multi-styles + animate )</h1>
        <Select
          components={animatedComponents}
          classNamePrefix='custom-select'
          onChange={onChange}
          value={getValue()}
          options={options}
          isMulti={isMulti} />
      </div>
    </>
  )
}

export default App
