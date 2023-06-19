
import {CardStyled, Covertyled} from './style'
import Image from '../Image'
import { Heading } from '../Heading'

const Card = ({title, imgUrl, author, isAvailable}) => {
    return (
        <CardStyled isAvailable={isAvailable}>
            <Covertyled isImg={imgUrl} isAvailable={isAvailable}>
                {imgUrl && <Image src={imgUrl} alt={title} />}
                {!isAvailable && <p>Título indisponível</p>}
            </Covertyled>
            {title && <Heading as="h4">{title}</Heading>}
            {author && <p>{author}</p>}
        </CardStyled>
    )
}

export default Card