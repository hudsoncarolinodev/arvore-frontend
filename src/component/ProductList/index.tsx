
import {List} from './style'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from '../Card';


const ProductList = (props) => {
    const {books} = props
    console.log(books)
    return (
        <List>
            <Swiper
                spaceBetween={7}
                slidesPerView={5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                {
                    books.map(({volumeInfo,saleInfo}, index)=>(
                        <SwiperSlide  key={index}>
                            <Card 
                                title={volumeInfo.title}
                                imgUrl={volumeInfo.imageLinks?.thumbnail}
                                authors={volumeInfo?.authors}
                                isAvailable={saleInfo.saleability}
                                key={index}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </List>
    )
}

export default ProductList