import { SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import { signIn, signOut, useSession } from 'next-auth/client'
import React from 'react'

const TopNav: React.FunctionComponent = () => {
  const [searchFocused, setSearchFocused] = React.useState(false)
  const [session] = useSession()

  const username = (session && session.user && session.user.name) || ''

  return (
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
        <button
          type="button"
          className="nav__button flex flex-col justify-start"
          onClick={() => (!session ? signIn() : signOut())}
        >
          <p className="nav__text--small">
            {username ? `Hello, ${username}` : 'Sign In'}
          </p>
          <p className="nav__text--bold">Accounts &amp; Lists</p>
        </button>

        <a href="/" className="nav__button nav__hidden">
          <div>
            <p className="nav__text--small">Returns</p>
          </div>
          <p className="nav__text--bold">&amp; Orders</p>
        </a>

        <a href="/checkout" className="relative nav__button">
          <span className="nav__item-counter">0</span>
          <ShoppingCartIcon className="h-9" />
        </a>
      </div>
    </nav>
  )
}

export default TopNav