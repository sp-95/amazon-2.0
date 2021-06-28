import { selectItems } from '@/slices/basketSlice'
import { SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import { signIn, signOut, useSession } from 'next-auth/client'
import React from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'

const TopNav: React.FunctionComponent = () => {
  const [searchFocused, setSearchFocused] = React.useState(false)
  const [session] = useSession()

  const username = (session && session.user && session.user.name) || ''

  const items = useSelector(selectItems)

  return (
    <nav className="nav__top">
      <Link href="/">
        <button type="button" className="nav__logo">
          <img
            src="/assets/images/amazon.png"
            alt="Amazon Logo"
            className="h-9"
          />
        </button>
      </Link>

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

        <Link href="/checkout">
          <button type="button" className="relative nav__button">
            <span className="nav__item-counter">{items.length}</span>
            <ShoppingCartIcon className="h-9" />
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default TopNav
