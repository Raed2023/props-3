import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({list}) => {
// console.log(list)
  return (
    <div>
        {
            React.Children.toArray(list.map(el=><ProductCard item={el} />))
        }
    </div>
  )
}

export default ProductList