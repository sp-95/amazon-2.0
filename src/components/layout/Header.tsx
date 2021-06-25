import React from 'react'
import Image from 'next/image'

const Header: React.FunctionComponent = () => {
  return (
    <header>
      <div className="flex items-center bg-amazon-blue-900 p-2">
        <div className="mt-2 flex items-center">
          <Image
            src="/assets/images/amazon.png"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
      </div>
      <div />
    </header>
  )
}

export default Header
