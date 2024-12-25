import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { cartContext } from '../../ReactApp'


function NavBar() {


    return (
        <header className='fixed w-full top-0 z-50 bg-neutral-900'>
            <nav className='flex justify-between items-center my-3 mx-9'>
                <div className='bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent font-bold text-lg'>
                    WRIST&nbsp;COMPANION
                </div>

                <ul className='flex'>
                    <li className='mx-2'>
                        <NavLink
                            to={'/'}
                            className={({ isActive }) =>
                                `px-4 rounded-md transition duration-500 py-1 ${isActive ? 'text-green-400' : 'hover:bg-rose-700'}`
                            }
                        >
                            HOME
                        </NavLink>
                    </li>

                    <li className='mx-2'>
                        <NavLink
                            to={'/mens-collection'}
                            className={({ isActive }) =>
                                `px-4 rounded-md transition duration-500 py-1 ${isActive ? 'text-green-400' : 'hover:bg-rose-700'}`
                            }
                        >
                            MEN
                        </NavLink>
                    </li>

                    <li className='mx-2'>
                        <NavLink
                            to={'/womens-collection'}
                            className={({ isActive }) =>
                                `px-4 rounded-md transition duration-500 py-1 ${isActive ? 'text-green-400' : 'hover:bg-rose-700'}`
                            }
                        >
                            WOMEN
                        </NavLink>
                    </li>

                    <li className='mx-2'>
                        <NavLink
                            to={'/smart-watches'}
                            className={({ isActive }) =>
                                `px-4 rounded-md transition duration-500 py-1 ${isActive ? 'text-green-400' : 'hover:bg-rose-700'}`
                            }
                        >
                            SMART WATCHES
                        </NavLink>
                    </li>
                </ul>

                <Cart />
            </nav>
        </header>
    )
}

export default NavBar









function Cart() {

    const { cart, setCart } = useContext(cartContext);

    const [hideCart, setHideCart] = useState(true);

    let totalPrice = 0;



    return (

        <div className='relative'>

            <div className='relative hover:cursor-pointer' onClick={() => setHideCart(!hideCart)}>
                <svg height="36" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#000000">
                    <style type="text/css" dangerouslySetInnerHTML={{ __html: " .st0{fill:#ffffff;} " }} />
                    <path className="st0" d="M486.998,140.232c-8.924-12.176-22.722-19.878-37.785-21.078l-311.616-24.68l-5.665-32.094 c-5.179-29.305-28.497-51.998-57.932-56.352l-5.662-0.845L34.65,0.185c-9.385-1.378-18.118,5.09-19.51,14.475 c-1.395,9.393,5.086,18.127,14.471,19.514v-0.008l39.357,5.834l0.009,0.026c14.788,2.164,26.526,13.586,29.131,28.324 l53.338,302.302c5.005,28.375,29.647,49.047,58.461,49.056h219.192c9.49,0,17.176-7.694,17.176-17.172 c0-9.486-7.686-17.18-17.176-17.18H209.906c-12.133,0.009-22.536-8.725-24.642-20.672l-7.461-42.299h244.342 c24.189,0,45.174-16.691,50.606-40.262l22.967-99.523C499.118,167.887,495.93,152.424,486.998,140.232z" />
                    <path className="st0" d="M223.012,438.122c-20.402,0-36.935,16.554-36.935,36.948c0,20.394,16.533,36.931,36.935,36.931 c20.401,0,36.944-16.537,36.944-36.931C259.955,454.676,243.413,438.122,223.012,438.122z" />
                    <path className="st0" d="M387.124,438.122c-20.406,0-36.935,16.554-36.935,36.948c0,20.394,16.529,36.931,36.935,36.931 c20.402,0,36.944-16.537,36.944-36.931C424.068,454.676,407.526,438.122,387.124,438.122z" />
                </svg>

                <span className='absolute top-0.5 -left-2.5 text-red-400 text-xl'>
                    {cart.length === 0 ? '' : cart.length}
                </span>
            </div>




            <div className='absolute -top-3
            -right-full w-80 h-screen bg-gradient-to-tr from-zinc-800 to-gray-800' hidden={hideCart}>

                <button type="button" className='text-3xl text-red-600 absolute bg-gray-500 rounded-md p-1' onClick={() => setHideCart(!hideCart)}>✖</button>

                {
                    (cart.length === 0) && <p className='text-center mt-3'>YOUR CART IS EMPTY</p>

                }

                <div className='my-12
mx-3.5 overflow-y-scroll rounded-md border-4 border-emerald-700 px-3.5 pt-3.5' style={{maxHeight:'75%'}}>

                    {
                        cart.map((product) => {

                            totalPrice = totalPrice + (parseInt(product.price) * product.quantity);
                        

                            return (
                                <div key={product.id} className='flex justify-between mb-16'>

                                    <div>
                                        <img src={`./public/Images/${product.imgPath}`} alt="watch-photo" className='rounded-md h-16 w-16 mb-2.5' />
                                        <p>{product.price}</p>
                                        <p>{product.companyName}</p>

                                    </div>



                                    <div className='text-center'>

                                        <ProductQuantity productObj={product} />

                                        <RemoveCartProduct removeId={product.id} />

                                    </div>


                                </div>
                            )



                        })

                    }
                </div>


                <p className='text-center'>YOUR TOTAL IS : &nbsp; {totalPrice} &nbsp;₹</p>
            </div>

        </div>

    );

}











function RemoveCartProduct({ removeId }) {

    const { cart, setCart } = useContext(cartContext);


    return (
        <button type='button' className='bg-red-700 block px-2.5 py-0.5 rounded-md mt-1 ml-auto' onClick={() => {
            setCart(cart.filter(item => item.id !== removeId))
        }}>Remove</button>
    );

}







function ProductQuantity({ productObj }) {


    const { cart, setCart } = useContext(cartContext);

    const handleIncrease = () => {

        setCart(cart.map(item => {

            if (item.id === productObj.id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;

        }));
    };



    const handleDecrease = () => {

        setCart(cart.map(item => {

            if (item.id === productObj.id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;

        }));
    };

    console.log(cart);

    return (
        <>
            <button
                type="button"
                onClick={handleIncrease}
                className="bg-black px-2.5 rounded-md text-xl"
            >
                +
            </button>

            <p>{productObj.quantity}</p>

            <button
                type="button"
                onClick={handleDecrease}
                className="bg-black px-2.5 rounded-md text-xl mb-2"
            >
                -
            </button>
        </>
    );
}

