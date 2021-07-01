import React from 'react'

const BottomFooter: React.FunctionComponent = () => {
  return (
    <section className="footer__bottom">
      <p className="footer__text">
        Amazon Clone created by{' '}
        <a
          href="https://github.com/sp-95"
          target="_blank"
          rel="noreferrer"
          className="footer__link"
        >
          Shashanka Prajapati
        </a>{' '}
        with the help of{' '}
        <a
          href="https://www.youtube.com/user/ssangha32"
          target="_blank"
          rel="noreferrer"
          className="footer__link"
        >
          PAPA React
        </a>
      </p>
    </section>
  )
}

export default BottomFooter
