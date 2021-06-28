import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline'
import React from 'react'

const Header: React.FunctionComponent = () => {
  const [searchFocused, setSearchFocused] = React.useState(false)

  return (
    <header>
      <nav className="nav__top">
        <a href="/" className="nav__logo">
          <img
            src="/assets/images/amazon.png"
            alt="Amazon Logo"
            className="h-9"
          />
        </a>

        <form
          className={`nav__search__container ${
            searchFocused && 'focus-within:ring-0'
          }`}
        >
          <input type="text" className="nav__search__input" />
          <button
            type="submit"
            className="nav__search__button"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          >
            <SearchIcon className="h-7 px-2.5" />
          </button>
        </form>

        <div className="flex items-center">
          <a href="/" className="nav__button">
            <div>
              <p className="nav__text--small">Hello, Sign in</p>
            </div>{' '}
            <p className="nav__text--bold">Accounts &amp; Lists</p>
          </a>

          <a href="/" className="nav__button nav__hidden">
            <div>
              <p className="nav__text--small">Returns</p>
            </div>
            <p className="nav__text--bold">&amp; Orders</p>
          </a>

          <a href="/" className="relative nav__button">
            <span className="nav__item-counter">0</span>
            <ShoppingCartIcon className="h-9" />
          </a>
        </div>
      </nav>

      <nav className="nav__bottom">
        <a
          href="/"
          className="nav__button--bottom flex items-center py-0.5 focus:text-white"
        >
          <MenuIcon className="h-6 mr-0.5" />
          <p className="nav__text">All</p>
        </a>
        <a href="/" className="nav__text nav__button--bottom">
          Today&apos;s Deals
        </a>
        <a href="/" className="nav__text nav__button--bottom nav__hidden">
          Customer Service
        </a>
        <a href="/" className="nav__text nav__button--bottom">
          Gift Cards
        </a>
        <a href="/" className="nav__text nav__button--bottom nav__hidden">
          Registry
        </a>
        <a href="/" className="nav__text nav__button--bottom nav__hidden">
          Sell
        </a>
      </nav>
    </header>
  )
}

export default Header
