import React from 'react'
import { Carousel } from 'react-responsive-carousel'

function Banner(): React.ReactElement {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            loading="lazy"
            src="/assets/images/banners/banner1.jpg"
            alt="Banner"
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="/assets/images/banners/banner2.jpg"
            alt="Banner"
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="/assets/images/banners/banner3.jpg"
            alt="Banner"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="/assets/images/banners/banner4.jpg"
            alt="Banner"
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="/assets/images/banners/banner5.jpg"
            alt="Banner"
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="/assets/images/banners/banner6.jpg"
            alt="Banner"
          />
        </div>
      </Carousel>
      <div className="absolute w-full h-3/5 bottom-0 bg-gradient-to-t from-gray-200 to-transparent" />
    </div>
  )
}

export default Banner
