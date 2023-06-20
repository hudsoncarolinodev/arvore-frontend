
import {List} from './style'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from '../Card';
import Image from './../../assets/image.png'

const ProductList = () => {
    return (
        <List>
            <Swiper
                spaceBetween={7}
                slidesPerView={5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                
                >
                <SwiperSlide>
                    <Card 
                        title="O menino Nelson Mandela" 
                        imgUrl={Image} 
                        author="Viviana Mazza" 
                        isAvailable={true}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card 
                        title="O menino Nelson Mandela" 
                        imgUrl="" 
                        author="Viviana Mazza" 
                        isAvailable={true}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card 
                        title="O menino Nelson Mandela" 
                        imgUrl={Image} 
                        author="Viviana Mazza" 
                        isAvailable={false}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card 
                        title="O menino Nelson Mandela" 
                        imgUrl={Image} 
                        author="Viviana Mazza" 
                        isAvailable={true}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card 
                        title="O menino Nelson Mandela" 
                        imgUrl="" 
                        author="Viviana Mazza" 
                        isAvailable={true}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card 
                        title="O menino Nelson Mandela" 
                        imgUrl={Image} 
                        author="Viviana Mazza" 
                        isAvailable={false}
                    />
                </SwiperSlide>
            </Swiper>
        </List>
    )
}

export default ProductList