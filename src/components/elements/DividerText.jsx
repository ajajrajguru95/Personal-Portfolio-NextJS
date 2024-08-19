import React from 'react'

const DividerText = ({children}) => {
  return (
    <>
        <p className="m-0 before:content-[''] before:inline-flex before:bg-textLight before:w-4 before:h-[0.2rem] flex items-center gap-4 uppercase text-textLight">{children}</p>
    </>
  )
}

export default DividerText