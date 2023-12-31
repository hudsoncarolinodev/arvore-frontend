
import {CardStyled, Covertyled} from './style'
import Image from '../Image'
import { Heading } from '../Heading'

const Card = ({title, imgUrl, authors, isAvailable}) => {
   
    const saleability = {
        'FOR_SALE':true,
        'NOT_FOR_SALE':false
    }
    return (

        <CardStyled className='card'>
            
            <Covertyled isImg={imgUrl} isAvailable={saleability[isAvailable]}>
                {imgUrl && <Image src={imgUrl} alt={title} />}
                {!saleability[isAvailable] && <p>Título indisponível</p>}
            </Covertyled>
            {title && <Heading as="h4">{title}</Heading>}

            {authors && authors.map((author, index) => <p key={index}>{author}</p>)}
        </CardStyled>
    )
}

export default Card