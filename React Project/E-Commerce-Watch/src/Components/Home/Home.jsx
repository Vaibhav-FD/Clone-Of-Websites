import React from 'react'
import { Link } from 'react-router-dom'


function Home() {

  return (

    <>

      <div className='mx-9 my-28'>

        <h1 className='mx-auto text-5xl bg-gradient-to-r from-violet-400 to-red-400 bg-clip-text text-transparent w-fit'>ELEVATE YOUR WRIST GAME</h1>



        <p className='text-xl text-zinc-400 text-center my-16'> <span className='text-blue-400 text-2xl'>"</span> Step Up Your Accessory Game With Our Latest Collection Of Trendy Watches. Designed For Those Who Appreciate The Finer Things In Life, Our Timepieces Are Crafted To Make A Bold Statement. Whether You're Dressing Up For A Special Occasion Or Looking For Something Stylish For Everyday Wear, We've Got You Covered. Each Watch In Our Collection Is A Testament To Quality And Attention To Detail, Merging Innovative Design With Timeless Elegance. From Sleek, Minimalist Styles To Bold, Eye-Catching Pieces, Our Selection Caters To Every Taste And Preference. <span className='text-blue-400'>"</span></p>


        <div className='flex justify-around'>

          <img src="./public/Images/watch1-home-section.png" alt="watch" className='w-96' />

          <img src="./public/Images/watch2-home-section.png" alt="watch" className='w-96' />

          <img src="./public/Images/watch3-home-section.png" alt="watch" className='w-96' />

        </div>

      </div>



      <section className='mx-9 my-28 flex gap-9 bg-neutral-800 px-6 py-12 rounded-lg'>


        <div className='w-4/5 flex flex-col justify-evenly items-start'>

          <h2 className='text-4xl text-teal-500'>TIMELSS ELEGANCE FOR THE MODERN MEN</h2>

          <p className='text-lg text-zinc-400'>Unveil A Collection Of Men’s Watches That Seamlessly Combines Sophistication With Functionality. From Classic Leather Bands To Sporty Designs, Each Piece Is Crafted To Make A Lasting Impression. Whether You Prefer The Timeless Elegance Of A Traditional Chronograph Or The Modern Flair Of A Sleek Digital Watch, Our Selection Caters To Every Taste.</p>


          <Link to={'/mens-collection'}>
            <button type='button' className='bg-orange-600 text-neutral-900 font-extrabold py-2 px-6 rounded-md transition duration-500 hover:bg-orange-400'>EXPLORE <span className='ml-3'>➤</span></button>
          </Link>

        </div>

        <div className='w-1/5 h-96'>
          <img src="./public/Images/men-watch-home-section.png" alt="watch" className='w-full h-full' />
        </div>


      </section>



      <section className='mx-9 my-28 flex gap-9 bg-neutral-800 px-6 py-12 rounded-lg'>


        <div className='w-1/5 h-96'>
          <img src="./public/Images/women-watch-home-section.png" alt="watch" className='w-full h-full' />
        </div>


        <div className='w-4/5 flex flex-col justify-evenly items-start'>

          <h2 className='text-4xl text-teal-500'>TIMELSS BEAUTY FOR THE MODERN WOMEN</h2>

          <p className='text-lg text-zinc-400'>Discover Watches That Are As Unique As You Are. From Classic Styles To Trendy Innovations, Each Timepiece Is Designed To Complement Your Lifestyle, Allowing You To Express Your Individuality With Every Tick. Our Collection Features A Diverse Range Of Designs, From Elegant Dress Watches Adorned With Sparkling Details To Sporty Options That Are Perfect For Active Days. Crafted With High-Quality Materials And Attention To Detail, Each Watch Is A Testament To Fine Craftsmanship And Timeless Aesthetics.</p>

          <Link to={'/womens-collection'}>

            <button type='button' className='bg-orange-600 text-neutral-900 font-extrabold py-2 px-6 rounded-md transition duration-500 hover:bg-orange-400'>EXPLORE <span className='ml-3'>➤</span></button>

          </Link>

        </div>


      </section>



      <section className='mx-9 my-28 flex gap-9 bg-neutral-800 px-6 py-12 rounded-lg'>


        <div className='w-4/5 flex flex-col justify-evenly items-start'>

          <h2 className='text-4xl text-teal-500'>EMPOWER YOUR DAY WITH SMART FEATURES</h2>

          <p className='text-lg text-zinc-400'>Improve Your Daily Routine With Features Like GPS Tracking, Music Control, And Voice Commands. Our Smartwatches Are Designed To Empower You, Making Everyday Tasks More Manageable And Enjoyable, All While Keeping You Stylish. With Intuitive Interfaces, You Can Easily Navigate Through Notifications, Control Your Music On The Go, And Access Navigation Features Right From Your Wrist.</p>


          <Link to={'/smart-watches'}>
            <button type='button' className='bg-orange-600 text-neutral-900 font-extrabold py-2 px-6 rounded-md transition duration-500 hover:bg-orange-400'>EXPLORE <span className='ml-3'>➤</span></button>
          </Link>

        </div>

        <div className='w-1/5 h-96'>
          <img src="./public/Images/smart-watch-home-section.png" alt="watch" className='w-full h-full' />
        </div>


      </section>


      <Footer />

    </>
  )
}

export default Home















function Footer() {

  return (
    <footer className='bg-gradient-to-tr from-zinc-800 to-gray-800 p-9 pb-3'>
      <h3 className='font-bold text-xl text-blue-500'>WRIST COMPANION</h3>

      <div className='my-6'>

        <h4 className='text-teal-400 mb-3.5 text-lg'>Contact Us</h4>

        <div>
          <span>E-Mail &nbsp;: &nbsp; </span>

          <address className='inline-block not-italic'>
            Dummy123@gmail.com
          </address>
        </div>


        <div>
          <span>Tel &nbsp;: &nbsp; </span>

          <address className='inline-block not-italic'>
            +91 9876543210
          </address>
        </div>


        <div>
          <span>Address &nbsp;: &nbsp; </span>

          <address className='inline-block not-italic'>
            ABC Road CDE Apartment 9<sup>th</sup> Floor - 999 , Near FGH Mall , IJK City
          </address>
        </div>

      </div>


      <div className='my-6'>
        <h4 className='text-teal-400 mb-3.5 text-lg'>Follow Us</h4>

        <div className='h-9 w-9 inline-block mr-3'>
          <a href='#' onClick={e => e.preventDefault()}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width='100%' height='100%' viewBox="0,0,256,256">
              <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(8.53333,8.53333)"><path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.016 4.432,10.984 10.206,11.852v-8.672h-2.969v-3.154h2.969v-2.099c0,-3.475 1.693,-5 4.581,-5c1.383,0 2.115,0.103 2.461,0.149v2.753h-1.97c-1.226,0 -1.654,1.163 -1.654,2.473v1.724h3.593l-0.487,3.154h-3.106v8.697c5.857,-0.794 10.376,-5.802 10.376,-11.877c0,-6.627 -5.373,-12 -12,-12z" /></g></g>
            </svg>
          </a>
        </div>


        <div className='h-9 w-9 inline-block mr-3'>
          <a href='#' onClick={e => e.preventDefault()}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width='100%' height='100%' viewBox="0,0,256,256">
              <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10}  strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.12,5.12)"><path d="M16,3c-7.17,0 -13,5.83 -13,13v18c0,7.17 5.83,13 13,13h18c7.17,0 13,-5.83 13,-13v-18c0,-7.17 -5.83,-13 -13,-13zM37,11c1.1,0 2,0.9 2,2c0,1.1 -0.9,2 -2,2c-1.1,0 -2,-0.9 -2,-2c0,-1.1 0.9,-2 2,-2zM25,14c6.07,0 11,4.93 11,11c0,6.07 -4.93,11 -11,11c-6.07,0 -11,-4.93 -11,-11c0,-6.07 4.93,-11 11,-11zM25,16c-4.96,0 -9,4.04 -9,9c0,4.96 4.04,9 9,9c4.96,0 9,-4.04 9,-9c0,-4.96 -4.04,-9 -9,-9z" /></g></g>
            </svg>
          </a>
        </div>


        <div className='h-9 w-9 inline-block mr-3'>
          <a href='#' onClick={e => e.preventDefault()}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width='100%' height='100%' viewBox="0,0,256,256">
              <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.12,5.12)"><path d="M11,4c-3.866,0 -7,3.134 -7,7v28c0,3.866 3.134,7 7,7h28c3.866,0 7,-3.134 7,-7v-28c0,-3.866 -3.134,-7 -7,-7zM13.08594,13h7.9375l5.63672,8.00977l6.83984,-8.00977h2.5l-8.21094,9.61328l10.125,14.38672h-7.93555l-6.54102,-9.29297l-7.9375,9.29297h-2.5l9.30859,-10.89648zM16.91406,15l14.10742,20h3.06445l-14.10742,-20z" /></g></g>
            </svg>

          </a>
        </div>

      </div>





      <div className='text-center'>
        Copyright © 2024 WristCompanion. All Rights Reserved.
      </div>
    </footer>
  );
}