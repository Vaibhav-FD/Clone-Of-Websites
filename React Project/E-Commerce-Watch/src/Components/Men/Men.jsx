import React, { Fragment, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard.jsx'
import { productsData } from '../../ProductsData.js'
import Filter from '../ProductCard/Filter.jsx';



function Men() {


  const [filterProducts,setFilterProducts] = useState({
    companyName : '',
    maxPrice : Infinity,
    strapMaterial : 'all'
  });

  
  

  if (filterProducts.maxPrice === 0) {
      setFilterProducts({...filterProducts,maxPrice : Infinity})
  }
  


  const mensWatches = productsData.filter(
    (productObj) => {

      return (
        productObj.section === 'men' &&

        productObj.companyName.toLowerCase().startsWith(filterProducts.companyName.trim().toLowerCase()) &&

        parseInt(productObj.price) <= filterProducts.maxPrice &&

        (filterProducts.strapMaterial === 'all' || productObj.strapMaterial.toLowerCase() === filterProducts.strapMaterial.toLowerCase())
      )

    }
  );
  

  




  return (
    <div className='mx-9 my-28 flex gap-9 items-start'>

   

      <Filter setFilterProducts={setFilterProducts} filterProducts={filterProducts}/>
      

      


      <div className='grid grid-cols-4 gap-9 w-4/5 ml-auto'>

        {
          mensWatches.map((productObj) => (
            <ProductCard watch={productObj} key={productObj.id} />
          ))
        }

        {
          mensWatches.length === 0 && <p className='text-3xl col-span-4'>SORRY NO MATCH FOUND :(</p>
        }

      </div>

    </div>
  );

}

export default Men