
import { List } from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Navigation, Pagination } from 'swiper';

SwiperCore.use([Navigation, Pagination]);

import Card from '../Card';

const ProductList = (props) => {
    const {books} = props
    return (
        <List>
            <Swiper
                spaceBetween={7}
                slidesPerView={5}
                navigation={true}
                pagination={false}
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