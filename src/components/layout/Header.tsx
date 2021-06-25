import Image from 'next/image'
import React from 'react'
import { SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'

const Header: React.FunctionComponent = () => {
  return (
    <header className="bg-amazon-blue-900">
      <div className="p-2 mr-1 flex items-center space-x-4">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 flex-shrink-0">
          <Image
            src="/assets/images/amazon.png"
            width={110}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        <div className="hidden sm:flex h-11 w-full focus-within:ring focus-within:ring-amazon-orange-400 rounded-md">
          <input
            type="text"
            className="p-2.5 rounded-l-md w-full focus:outline-none"
          />
          <SearchIcon className="h-full p-2 px-2.5 cursor-pointer bg-amazon-orange-300 hover:bg-amazon-orange-400 rounded-r-md" />
        </div>

        <div className="flex items-center space-x-4 text-white">
          <div className="cursor-pointer">
            <div>
              <p className="m-0 text-xs whitespace-nowrap">Hello, Sign in</p>
            </div>{' '}
            <p className="m-0 text-sm font-bold whitespace-nowrap">
              Accounts &#38; Lists
            </p>
          </div>
          <div className="cursor-pointer">
            <div>
              <p className="m-0 text-xs whitespace-nowrap">Returns</p>
            </div>
            <p className="m-0 text-sm font-bold whitespace-nowrap">
              &#38; Orders
            </p>
          </div>
          <div className="cursor-pointer">
            <ShoppingCartIcon className="h-full w-10" />
          </div>
        </div>
      </div>
      <div />
    </header>
  )
}

export default Header
