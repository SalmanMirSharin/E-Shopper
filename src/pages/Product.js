import React, { useContext } from 'react'
import {ShopContext} from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../componests/Breadcrums/Breadcrum'
import ProductDisplay from '../componests/ProductDisplay/ProductDisplay'
import DescriptionBox from '../componests/DescriptionBox/DescriptionBox'
import RelatedProducts from '../componests/Relatedproducts/RelatedProducts'
const Product = () => {
  const {all_product}= useContext(ShopContext)
  const {productId} = useParams()
  const product = all_product.find((e)=> e.id === Number(productId))

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}

export default Product
