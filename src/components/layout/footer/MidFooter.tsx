import React from 'react'
import Link from 'next/link'

const MidFooter: React.FunctionComponent = () => {
  return (
    <section className="footer__mid">
      <Link href="/">
        <button type="button" className="footer__mid__logo">
          <img
            src="/assets/images/amazon.png"
            alt="Amazon Logo"
            className="h-7"
          />
        </button>
      </Link>
    </section>
  )
}

export default MidFooter
