import React, { Component } from 'react'
import { _getVideos } from '../API/moviesApi'
// Import Swiper React components
// Core modules imports are same as usual
import { Navigation, Pagination, Autoplay } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module
export class MainShow extends Component {
    state = {
        video: null
    }

    render() {

        return (
            <div className="md:h-[60vh] w-full relative overflow-hidden rounded"
            >
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={1}
                    freeMode
                    autoplay={{ delay: 5000 }}

                >
                    {
                        this.props?.shows?.map(show => {

                            return <SwiperSlide key={show.id}>        <>
                                <img
                                    className="w-auto"
                                    src={`https://image.tmdb.org/t/p/original/${show?.backdrop_path}`} alt="" />
                                {/* <div className="absolute left-[1%] md:left-[4%] top-[65%] md:top-[20%] ">
                                    <h1 className="text-lg md:text-3xl text-white font-extrabold">{show?.original_title}</h1>
                                    <p className="hidden md:flex text-sm text-white w-[50%]">{show?.overview}</p>
                                </div> */}
                                <div className="absolute top-0 w-full h-full flex flex-col  justify-end pb-[5%] pl-[5%]  md:h-[60vh] bg-gradient-to-t from-prblack">
                                    <h1 className="text-lg md:text-3xl text-white font-extrabold md:mb-4">{show?.original_title}</h1>
                                    <p className="hidden md:flex text-sm text-white w-[50%]">{show?.overview}</p>
                                </div>
                            </></SwiperSlide>


                        })
                    }
                </Swiper>
            </div>
        )
    }
}

export default MainShow
