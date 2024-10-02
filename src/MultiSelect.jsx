import styles from './Select.module.scss'
import { useState } from "react"
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'cheese', label: 'Cheese' },
  { value: 'milk', label: 'Milk' },
  { value: 'bread', label: 'Bread' }
]
const isMulti = true

function MultiSelect() {


  const [products, setProducts] = useState(['chocolate'])

  const getValue = () => {
    return isMulti
      ? options.filter(c => products.indexOf(c.value) >= 0)
      : options.find(c => c.value == products)

    // if (products) {
    //   return isMulti
    //     ? options.filter(c => products.indexOf(c.value) >= 0)
    //     : options.find(c => c.value === products)
    // } else {
    //   return isMulti ? [] : ''
    // }
  }

  const onChange = (newValue) => {
    setProducts(isMulti ? newValue.map(i => i.value) : newValue.value)
  }

  return (
    <>
      <div className={styles.main}>
        <h1>Choose product (multi)</h1>
        <Select
          onChange={onChange}
          value={getValue()}
          options={options}
          isMulti={isMulti}

        />
      </div>
    </>
  )
}

export default MultiSelect
