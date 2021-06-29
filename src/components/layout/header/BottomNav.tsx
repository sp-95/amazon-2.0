import { MenuIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import React from 'react'

const BottomNav: React.FunctionComponent = () => {
  return (
    <nav className="nav__bottom">
      <Link href="/">
        <button
          type="button"
          className="nav__button--bottom flex items-center py-0.5 focus:text-white"
        >
          <MenuIcon className="h-6 mr-0.5" />
          <p className="nav__text">All</p>
        </button>
      </Link>
      <Link href="/">
        <button type="button" className="nav__text nav__button--bottom">
          Today&apos;s Deals
        </button>
      </Link>
      <Link href="/">
        <button
          type="button"
          className="nav__text nav__button--bottom nav__hidden"
        >
          Customer Service
        </button>
      </Link>
      <Link href="/">
        <button type="button" className="nav__text nav__button--bottom">
          Gift Cards
        </button>
      </Link>
      <Link href="/">
        <button
          type="button"
          className="nav__text nav__button--bottom nav__hidden"
        >
          Registry
        </button>
      </Link>
      <Link href="/">
        <button
          type="button"
          className="nav__text nav__button--bottom nav__hidden"
        >
          Sell
        </button>
      </Link>
    </nav>
  )
}

export default BottomNav
