import Image from 'next/image'
import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'

const Header: React.FunctionComponent = () => {
  return (
    <header>
      <div className="p-2 flex items-center bg-amazon-blue-900">
        <div className="mt-2 flex items-center">
          <Image
            src="/assets/images/amazon.png"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        <div className="flex h-11 w-full focus-within:ring focus-within:ring-amazon-orange-400 rounded-md">
          <input
            type="text"
            className="p-2.5 rounded-l-md w-full focus:outline-none"
          />
          <SearchIcon className="h-full p-2 px-2.5 bg-amazon-orange-300 hover:bg-amazon-orange-400 rounded-r-md" />
        </div>
      </div>
      <div />
    </header>
  )
}

export default Header
