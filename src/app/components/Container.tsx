import React from 'react'

export const Container = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='w-full max-w-4xl min-h-screen mx-auto'>
     {children}   
    </div>
  )
}
