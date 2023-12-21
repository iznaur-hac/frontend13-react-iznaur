import { Navigation, Scrollbar, A11y, EffectCube } from 'swiper/modules';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import {Autoplay} from 'swiper/modules';
import 'swiper/css/effect-cube';
import 'swiper/css/scrollbar';


import bamboo from '../../assets/images/bamboo.jpg'
import cron from '../../assets/images/cron.jpg'
import cactus from '../../assets/images/cactus.jpg'

function Slider () {



    return(
        <div className='spec-cont'>
        <Swiper
        modules={[Navigation, Scrollbar, A11y, EffectCube, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        effect={'cube'}
        cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          className="mySwiper"
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
            <SwiperSlide>
                <div className="swiper-img">
                    <img src={bamboo} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-img">
                    <img src={cron} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-img">
                    <img src={cactus} alt="" />
                </div>
            </SwiperSlide>
      </Swiper>
        </div>
    )
}

export default Slider;