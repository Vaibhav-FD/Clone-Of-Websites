import React from 'react'

function Filter({ filterProducts, setFilterProducts }) {


    return (

        <aside className='w-1/5 p-4 border-2 border-emerald-600 sticky top-20'>

            <div className='mb-12 flex items-center'>

                <h4 className='text-xl mr-3'>FILTER</h4>

                <div>
                    <svg width='30' fill="#e6e944" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke="#55b980"><path d="M1672.853 0 1171.84 640H748.053L426.56 213.333h637.227L1241.173 0H0l746.667 991.147V1600l426.56 320V991.147L1920 0z" fillRule="evenodd" /></svg>
                </div>

            </div>


            <div>

                <label htmlFor='companyNameFilter'>Comapny Name :</label>

                <input type='text' id='companyNameFilter' placeholder='Enter Desired Company Name' className='block w-full p-1.5 my-3 rounded-sm text-md bg-zinc-700 text-white focus:outline-none focus:outline-blue-600' value={filterProducts.companyName} onChange={(e) => {
                    setFilterProducts({ ...filterProducts, companyName: e.target.value })
                }} />
            </div>


            <div>

                <label htmlFor='maxPriceFilter'>Enter Max Price :</label>

                <input type='number' id='maxPriceFilter' placeholder='Enter Maximum Price' value={filterProducts.maxPrice === Infinity ? '' : filterProducts.maxPrice} className='block w-full p-1.5 my-3 rounded-sm text-md bg-zinc-700 text-white focus:outline-none focus:outline-blue-600' onChange={(e) => {
                    setFilterProducts({ ...filterProducts, maxPrice: Number(e.target.value) })
                }} />
            </div>


            <div>

                <label htmlFor='starpFilter'>Strap Meterial :</label>

                <select name="starpFilter" id="starpFilter" className='block w-full p-1.5 my-3 rounded-sm text-md bg-zinc-700 text-white focus:outline-none focus:outline-blue-600' value={filterProducts.strapMaterial}

                    onChange={(e) => {
                        setFilterProducts({ ...filterProducts, strapMaterial: e.target.value })
                    }} >

                    <option value="all" defaultValue>All</option>
                    <option value="silicone">Silicone</option>
                    <option value="mesh">Mesh</option>
                    <option value="stainless-steel">Stainless Steel</option>
                    <option value="leather">Leather</option>
                </select>
            </div>


            <button
                type='button'
                className='bg-blue-700 block mt-12 px-3.5 py-1 rounded-md transition-transform duration-300 ease-in-out transform hover:-translate-y-1'
                onClick={() => {
                    setFilterProducts({
                        companyName: '',
                        maxPrice: Infinity,
                        strapMaterial: 'all'
                    })
                }}>
                RESET &nbsp;FILTER
            </button>




        </aside>
    )
}

export default Filter