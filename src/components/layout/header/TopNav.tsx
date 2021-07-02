import { selectItems } from '@/slices/cartSlice'
import { SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import { signIn, signOut, useSession } from 'next-auth/client'
import React from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'

const TopNav: React.FunctionComponent = () => {
  const [searchFocused, setSearchFocused] = React.useState(false)
  const [session] = useSession()

  const username =
    (session && session.user && session.user.name?.split(' ')[0]) || ''

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
          className="nav__button--top"
          onClick={() => (!session ? signIn() : signOut())}
        >
          <p className="nav__text--small">
            {username ? `Hello, ${username}` : 'Sign In'}
          </p>
          <p className="nav__text--bold">Accounts &amp; Lists</p>
        </button>

        <Link href="/orders">
          <button type="button" className="nav__button--top nav__hidden">
            <p className="nav__text--small">Returns</p>
            <p className="nav__text--bold">&amp; Orders</p>
          </button>
        </Link>

        <Link href="/checkout">
          <button
            type="button"
            className="relative nav__button--top flex flex-row items-end"
          >
            <span className="nav__item-counter">{items.length}</span>
            <ShoppingCartIcon className="h-9 -mb-1 -ml-1" />
            <p className="nav__text--bold hidden lg:block">Cart</p>
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default TopNav
