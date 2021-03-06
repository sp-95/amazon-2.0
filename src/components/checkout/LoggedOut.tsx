import React from 'react'
import Link from 'next/link'
import { signIn } from 'next-auth/client'

function LoggedOut(): React.ReactElement {
  return (
    <div className="p-5 mt-10 flex flex-col lg:flex-row items-center lg:items-start space-x-4 space-y-4">
      <img
        src="/assets/images/svgs/kettle.svg"
        alt="Kettle"
        className="max-w-md lg:w-1/3"
      />

      <div>
        <h2>Your Amazon Cart is empty</h2>
        <div>
          <Link href="/">
            <button type="button" className="amazon-link">
              Shop today&apos;s deals
            </button>
          </Link>
        </div>
        <button
          type="button"
          className="amazon-button-2 my-5 p-3 pt-0 pb-1 text-lg"
          onClick={() => signIn()}
        >
          Sign in to your account
        </button>
      </div>
    </div>
  )
}

export default LoggedOut
