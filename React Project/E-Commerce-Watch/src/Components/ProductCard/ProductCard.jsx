import React, { useContext } from 'react'
import { cartContext } from '../../ReactApp'

function ProductCard({ watch }) {



    return (
        <div className='bg-neutral-800 rounded-lg overflow-hidden'>

            <div className='h-64 group overflow-hidden'>
                <img
                    src={`./public/Images/${watch.imgPath}`}
                    alt="watch"
                    className='h-full w-full block transform transition-transform duration-300 ease-in-out group-hover:scale-110'
                />
            </div>

            <div className='px-3 py-5'>
                <p className='text-orange-500'>{watch.companyName}</p>
                <p className='text-zinc-400 my-4 h-24 overflow-hidden text-ellipsis line-clamp-4 -webkit-line-clamp-4 -webkit-box display[-webkit-box]'>{watch.description}</p>

                <div className='flex justify-between items-center'>
                    <span>{watch.price}</span>

                    {

                        (watch.availability)
                            ?
                            <AddCartButton watch={watch}/>
                            :
                            <span className='text-rose-500'>OUT OF STOCK</span>


                    }

                </div>
            </div>

        </div>
    )
}

export default ProductCard









function AddCartButton({watch}) {


    const { cart, setCart } = useContext(cartContext);

    const handleAddToCart = () => {
        
        
        if (cart.some(item => item.id === watch.id)) {
            alert('THE PRODUCT IS ALREADY IN CART');   
        }
        else{
            setCart([...cart, {...watch,quantity:1}]);   
        }
        
        
    };


    return (

        <button type='button' className='bg-violet-600 font-extrabold py-1 px-4 rounded-md transition duration-500 hover:bg-violet-400 hover:text-black text-white' onClick={handleAddToCart}>Add To Cart</button>

    );
}