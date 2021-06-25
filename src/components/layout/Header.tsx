import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'

const Header: React.FunctionComponent = () => {
  return (
    <header>
      <nav className="nav__top">
        <div className="nav__logo">
          <Image src="/assets/images/amazon.png" width={110} height={40} />
        </div>

        <div className="nav__search__container">
          <input type="text" className="nav__search__input" />
          <span className="nav__search__button">
            <SearchIcon className="h-7 px-2.5" />
          </span>
        </div>

        <div className="nav__button--top">
          <div>
            <p className="nav__text--small">Hello, Sign in</p>
          </div>{' '}
          <p className="nav__text--bold">Accounts &amp; Lists</p>
        </div>

        <div className="nav__button--top nav__hidden">
          <div>
            <p className="nav__text--small">Returns</p>
          </div>
          <p className="nav__text--bold">&amp; Orders</p>
        </div>

        <div className="nav__item-counter__container">
          <span className="nav__item-counter">0</span>
          <ShoppingCartIcon className="h-full" />
        </div>
      </nav>

      <nav className="nav__bottom">
        <span className="nav__button--bottom flex items-center">
          <MenuIcon className="h-full mr-0.5" />
          <p className="nav__text">All</p>
        </span>
        <p className="nav__text nav__button--bottom">Today&apos;s Deals</p>
        <p className="nav__text nav__button--bottom">Gift Cards</p>
        <p className="nav__text nav__button--bottom nav__hidden">
          Customer Service
        </p>
        <p className="nav__text nav__button--bottom nav__hidden">Registry</p>
        <p className="nav__text nav__button--bottom nav__hidden">Sell</p>
      </nav>
    </header>
  )
}

export default Header
