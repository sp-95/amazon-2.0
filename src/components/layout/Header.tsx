import Image from 'next/image'
import React from 'react'
import {
  SearchIcon,
  ShoppingCartIcon,
  MenuIcon,
} from '@heroicons/react/outline'

const Header: React.FunctionComponent = () => {
  return (
    <header>
      <div className="py-1 pr-1 flex items-center bg-amazon-blue-900">
        <div className="nav__button--top pt-3 pb-0 px-2 flex items-center flex-grow sm:flex-grow-0 flex-shrink-0">
          <Image
            src="/assets/images/amazon.png"
            width={110}
            height={40}
            objectFit="contain"
          />
        </div>

        <div className="px-1.5 h-14 w-full hidden sm:flex items-center focus-within:ring focus-within:ring-amazon-orange-400 rounded-md">
          <input
            type="text"
            className="p-2.5 h-4/5 w-full rounded-l-md focus:outline-none"
          />
          <span className="h-4/5 flex items-center cursor-pointer bg-amazon-orange-300 hover:bg-amazon-orange-400 rounded-r-md">
            <SearchIcon className="h-7 px-2.5" />
          </span>
        </div>

        <div className="flex items-center text-white">
          <div className="nav__button--top">
            <div>
              <p className="nav__text--small">Hello, Sign in</p>
            </div>{' '}
            <p className="nav__text--bold">Accounts &amp; Lists</p>
          </div>
          <div className="nav__button--top hidden sm:block">
            <div>
              <p className="nav__text--small">Returns</p>
            </div>
            <p className="nav__text--bold">&amp; Orders</p>
          </div>
          <div className="relative flex nav__button--top">
            <span className="absolute top-2 right-2 h-4 w-4 bg-amazon-orange-200 text-black text-center font-bold text-xs rounded-full">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
          </div>
        </div>
      </div>

      <div className="p-1 bg-amazon-black-600 text-white text-sm font-semibold flex items-center">
        <span className="nav__button--bottom flex items-center">
          <MenuIcon className="h-6 mr-0.5" />
          <p className="nav__text">All</p>
        </span>
        <p className="nav__text nav__button--bottom">Today&apos;s Deals</p>
        <p className="nav__text nav__button--bottom">Gift Cards</p>
        <p className="nav__text nav__button--bottom hidden sm:block">
          Customer Service
        </p>
        <p className="nav__text nav__button--bottom hidden sm:block">
          Registry
        </p>
        <p className="nav__text nav__button--bottom hidden sm:block">Sell</p>
      </div>
    </header>
  )
}

export default Header
