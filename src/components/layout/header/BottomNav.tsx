import { MenuIcon } from '@heroicons/react/outline'
import React from 'react'

const BottomNav: React.FunctionComponent = () => {
  return (
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
  )
}

export default BottomNav
