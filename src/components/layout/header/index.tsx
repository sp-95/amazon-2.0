import React from 'react'
import TopNav from './TopNav'
import BottomNav from './BottomNav'

const Header: React.FunctionComponent = () => {
  return (
    <header className="sticky top-0 shadow-xl z-50">
      <TopNav />
      <BottomNav />
    </header>
  )
}

export default Header
