import React from 'react'
import logo from '../assets/covalent_logo.svg'
import { properties } from '../constants'

const Properties = () => {
  return (
    <section id='properties' className='mb-10 p-6'>
      <div className='flex flex-col justify-center items-center'>
            <div className='opacity-40'>
                <img src={logo} alt="logo" width={150} />
            </div>
            <div className='flex flex-col gap-10 justify-center items-center w-full'>
                <h1 className='text-3xl md:text-4xl text-slate-700 font-semibold uppercase'>Featured Properties</h1>
                <div className='flex justify-evenly items-center gap-6 flex-wrap md:flex-nowrap w-full'>
                    {properties.map((item) => {
                        return (
                        <a href='#' key={item.Image} className='flex flex-col justify-center items-center gap-3'>
                            <img src={item.Image} alt={item.Image}  className='rounded-lg w-[500px] max-w-full' />
                            <h2 className='text-xl md:text-3xl text-center  font-thin text-slate-600'>{item.name}</h2>
                            <div>
                                <p>{item.bedroom} | {item.bathroom} | {item.area}</p>
                            </div>
                            <p className='font-bold'>{item.price}</p>
                        </a>
                        );
                    })}
                </div>
            </div>
      </div>
    </section>
  )
}

export default Properties
