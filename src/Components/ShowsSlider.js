import React, { Component } from 'react'
// Import Swiper React components
// Core modules imports are same as usual
import { Navigation, Pagination } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { withResizeDetector } from 'react-resize-detector';
// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module
export class ShowsSlider extends Component {
    state = {
        video: null
    }
    componentDidMount = () => {

    }
    render() {
        return (
            <div className="flex flex-col my-[40px]">
                <h3 className="text-white font-extrabold text-3xl mb-[20px]">{this.props.title}</h3>
                <div className="flex flex-row w-full items-center justify-between flex-wrap">

                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={10}
                        slidesPerView={this.props.width > 768 ? 10 : 3}
                        freeMode
                        navigation
                        loop
                    >
                        {
                            Object.values(this.props?.shows)?.map(show => {

                                return <SwiperSlide key={show.id}><img
                                    className="m-auto w-[60vw] md:w-[9vw] rounded-2xl
                                                 cursor-pointer transition-all "
                                    src={`https://image.tmdb.org/t/p/w500/${show.poster_path ?? show.profile_path}`} alt="Show poster" /></SwiperSlide>


                            })
                        }
                    </Swiper>
                </div>
            </div>
        )
    }
}

export default withResizeDetector(ShowsSlider)
