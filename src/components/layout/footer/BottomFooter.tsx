import React from 'react'

const BottomFooter: React.FunctionComponent = () => {
  return (
    <section className="footer__bottom">
      <p className="footer__text">
        Amazon Clone created by{' '}
        <a href="https://github.com/sp-95" className="footer__link">
          Shashanka Prajapati
        </a>{' '}
        with the help of{' '}
        <a
          href="https://www.youtube.com/user/ssangha32"
          className="footer__link"
        >
          PAPA React
        </a>
      </p>
    </section>
  )
}

export default BottomFooter
