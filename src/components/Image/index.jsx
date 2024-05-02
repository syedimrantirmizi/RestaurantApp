import React from 'react'

const Image = ({src, w, alt , h, style, style2}) => {
  return (
    <div className={`max-w-[${w}px] ${style}`} >
    <img src={src} width={w} alt={alt} className={`select-none  object-contain `} />
    </div>
  )
}

export default Image