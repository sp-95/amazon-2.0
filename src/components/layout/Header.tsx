import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline'
import React from 'react'

const Header: React.FunctionComponent = () => {
  return (
    <header>
      <nav className="nav__top">
        <div className="nav__logo">
          <img
            src="/assets/images/amazon.png"
            alt="Amazon Logo"
            className="h-9"
          />
        </div>

        <div className="nav__search__container">
          <input type="text" className="nav__search__input" />
          <span className="nav__search__button">
            <SearchIcon className="h-7 px-2.5" />
          </span>
        </div>

        <div className="flex items-center">
          <div className=" nav__button">
            <div>
              <p className="nav__text--small">Hello, Sign in</p>
            </div>{' '}
            <p className="nav__text--bold">Accounts &amp; Lists</p>
          </div>

          <div className=" nav__button nav__hidden">
            <div>
              <p className="nav__text--small">Returns</p>
            </div>
            <p className="nav__text--bold">&amp; Orders</p>
          </div>

          <div className="relative nav__button">
            <span className="nav__item-counter">0</span>
            <ShoppingCartIcon className="h-9" />
          </div>
        </div>
      </nav>

      <nav className="nav__bottom">
        <span className="nav__button--bottom flex items-center py-0.5">
          <MenuIcon className="h-6 mr-0.5" />
          <p className="nav__text">All</p>
        </span>
        <p className="nav__text nav__button--bottom">Today&apos;s Deals</p>
        <p className="nav__text nav__button--bottom nav__hidden">
          Customer Service
        </p>
        <p className="nav__text nav__button--bottom">Gift Cards</p>
        <p className="nav__text nav__button--bottom nav__hidden">Registry</p>
        <p className="nav__text nav__button--bottom nav__hidden">Sell</p>
      </nav>
    </header>
  )
}

export default Header
