import { ExclamationIcon } from '@heroicons/react/outline'
import React from 'react'

function Disclaimer(): React.ReactElement {
  const [isHidden, setIsHidden] = React.useState(false)

  return (
    <button
      type="button"
      className={`relative disclaimer ${isHidden && 'hidden'}`}
      onClick={() => setIsHidden(true)}
    >
      <ExclamationIcon className="w-32 flex-none" />

      <h2>
        Disclaimer: This website is an Amazon clone made solely for educational
        purposes. Your login details are being handled using Firebase by Google
        hence I do not have the ability to access it. Please DO NOT enter any
        other sensitive information within this website.
      </h2>

      <p className="disclaimer__footer">Click anywhere to close</p>
    </button>
  )
}

export default Disclaimer
