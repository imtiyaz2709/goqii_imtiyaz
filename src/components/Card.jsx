import React from 'react'

const Card = (props) => {
  return (
    <div className="flex flex-1 flex-col hover:animate-bounce">
    <a href={`/product/${props.id}`}>
       <img src={props.urls.small} alt="" className="w-full object-cover object-center h-[250px]" />
    </a>
      <div className="p-2">
        <div className="flex flex-col justify-between">
          <h4 className="font-semibold">{props.alt_description}</h4>
          <div className="flex text-slate-600 text-sm">{props.fees}</div>
        </div>
      </div>
    </div>
  )
}

export default Card