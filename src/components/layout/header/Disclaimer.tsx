import React from 'react'
import { ExclamationIcon, XIcon } from '@heroicons/react/outline'

function Disclaimer(): React.ReactElement {
  const [isHidden, setIsHidden] = React.useState(false)

  return (
    <div className={`relative nav__disclaimer ${isHidden && 'hidden'}`}>
      <button type="button" onClick={() => setIsHidden(true)}>
        <XIcon className="nav__disclaimer__close-button" />
      </button>
      <ExclamationIcon className="w-min" />
      <h2>
        Disclaimer: This website is an Amazon clone made solely for educational
        purposes. Your login details are being handled using Firebase by Google
        hence I do not have the ability to access it. Please DO NOT enter any
        other sensitive information within this website.
      </h2>
    </div>
  )
}

export default Disclaimer
