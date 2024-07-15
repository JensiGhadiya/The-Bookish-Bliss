import React from 'react'
import item from '../../public/item.jpg'
function Cards({item}) {
   
  return (<>
    <div className='mt-4 my-3 p-3'>
    <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border" >
  <figure>
    <img
      src="item.jpg"
      alt="item.title" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">Free</div>
    </h2>
    {item.title}
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">₹ {item.price}</div>
      <div className="badge badge-outline cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white  duration-200">Buy Now</div>
    </div>
  </div>
</div>
    </div>
  </>)
}

export default Cards