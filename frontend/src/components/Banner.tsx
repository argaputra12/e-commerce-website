import TextButton from './button/TextButton';
// import styles from './Hero.module.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// swiperjs
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

const sliders = [
  {
    id: 2,
    image:
      'https://storage.googleapis.com/startup-campus/banners/banner-2.webp',
    title: 'New Cocktail Dresses',
    rightText: false,
  },
  {
    id: 1,
    image:
      'https://storage.googleapis.com/startup-campus/banners/banner-1.webp',
    title: 'Night Summer Dresses',
    rightText: true,
  },
  {
    id: 3,
    image:
      'https://storage.googleapis.com/startup-campus/banners/banner-3.webp',
    title: 'The Weekend Promotions',
    rightText: false,
  },
];

const Slideshow = () => {
  return (
    <>
      <div className="relative w-full z-20">
        <Swiper
          style={
            {
              '--swiper-navigation-color': 'rgba(0, 0, 0, 0.7)',
              '--swiper-navigation-size': '2rem',
            } as React.CSSProperties
          }
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={2000}
          navigation
          pagination={{
            type: 'fraction',
            clickable: true,
          }}
          className="mySwiper"
        >
          {sliders.map((slider) => (
            <SwiperSlide key={slider.id}>
              <div className="block">
                <img
                  src={slider.image}
                  className="h-screen"
                  alt={'some name'}
                />
              </div>

              <div
                className={`absolute bg-white p-4 opacity-90 sm:bg-transparent sm:p-0 sm:opacity-100 bottom-10 right-1/2 transform translate-x-1/2 sm:transform-none sm:top-1/3 ${
                  slider.rightText
                    ? 'sm:right-12 md:right-20 lg:right-40 flex flex-col items-center sm:items-end'
                    : 'sm:left-12 md:left-20 lg:left-40 flex flex-col items-center sm:items-start'
                }`}
              >
                <span
                  className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl my-4 text-center ${
                    slider.rightText ? 'sm:text-right' : 'sm:text-left'
                  }`}
                >
                  {convertTitle(slider.title).titleUp}
                  <br />
                  {convertTitle(slider.title).titleDown}
                </span>
                <TextButton value={'Shop Now'} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

const convertTitle = (title: string) => {
  const index = title.indexOf(' ', title.length / 2);
  const titleUp = title.slice(0, index);
  const titleDown = title.slice(index + 1);
  return { titleUp, titleDown };
};

export default Slideshow;
