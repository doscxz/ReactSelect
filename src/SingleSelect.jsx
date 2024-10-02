import { useState } from 'react'
import styles from './Select.module.scss'
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'cheese', label: 'Cheese' },
  { value: 'milk', label: 'Milk' },
  { value: 'bread', label: 'Bread' }
]

function SingleSelect() {
  const [product, setProduct] = useState('chocolate')

  const getValue = () => {
    return product ? options.find(prod => prod.value === product) : ''
  }

  const onChange = (newValue) => {
    setProduct(newValue.value)
  }

  return (
    <>
      <div className={styles.main}>
        <h1>Choose product (single)</h1>
        <Select onChange={onChange} value={getValue()} options={options} />
      </div>
    </>
  )
}

export default SingleSelect
