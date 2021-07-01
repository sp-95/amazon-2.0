import React from 'react'

const TopFooter: React.FunctionComponent = () => {
  return (
    <section className="footer__top">
      <button
        type="button"
        className="footer__top__button footer__text"
        onClick={() => window.scrollTo(0, 0)}
      >
        Back to top
      </button>
    </section>
  )
}

export default TopFooter
