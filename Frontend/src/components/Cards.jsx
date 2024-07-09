import React from 'react'
import item from '../../public/item.jpg'
function Cards({item}) {
    console.log(item)
  return (<>
    <div>
    <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="item.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    </div>
  </>)
}

export default Cards