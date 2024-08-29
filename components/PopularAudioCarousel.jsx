'use client';

import Audio from './Audio';
// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// Import required modules
import { Pagination } from 'swiper/modules';

const PopularAudioCarousel = ({ audios }) => {
    return (
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            960: { slidesPerView: 3 },
            1240: { slidesPerView: 4 },
        }}
        pagination={{
            clickable: true,
        }}
        modules={[Pagination]}
        className='popular-audio-slider mb-8'
    >
        {audios.map(audio => {
            return <SwiperSlide key={audio._id}>
                <Audio audio={audio} />
            </SwiperSlide>
        })}
    </Swiper>
    )
};

export default PopularAudioCarousel