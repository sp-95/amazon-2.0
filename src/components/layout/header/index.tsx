import React from 'react'
import TopNav from './TopNav'
import BottomNav from './BottomNav'

const Header: React.FunctionComponent = () => {
  return (
    <header>
      <TopNav />
      <BottomNav />
    </header>
  )
}

export default Header
