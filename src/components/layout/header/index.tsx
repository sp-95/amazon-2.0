import React from 'react'
import TopNav from './TopNav'
import BottomNav from './BottomNav'
import Disclaimer from './Disclaimer'

const Header: React.FunctionComponent = () => {
  return (
    <header>
      <TopNav />
      <BottomNav />
      <Disclaimer />
    </header>
  )
}

export default Header
