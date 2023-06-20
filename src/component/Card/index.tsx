
import {CardStyled, Covertyled} from './style'
import Image from '../Image'
import { Heading } from '../Heading'

const Card = ({title, imgUrl, authors, isAvailable}) => {
    console.log(isAvailable)
    const saleability = {
        'FOR_SALE':true,
        'NOT_FOR_SALE':false
    }
    return (
        <CardStyled className='card'  isAvailable={saleability[isAvailable]}>
            <Covertyled isImg={imgUrl} isAvailable={saleability[isAvailable]}>
                {imgUrl && <Image src={imgUrl} alt={title} />}
                {!saleability[isAvailable] && <p>Título indisponível</p>}
            </Covertyled>
            {title && <Heading as="h4">{title}</Heading>}

            {authors && authors.map((author) => <p>{author}</p>)}
        </CardStyled>
    )
}

export default Card