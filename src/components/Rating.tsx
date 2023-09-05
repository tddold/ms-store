import { Flex, Text } from '@chakra-ui/react'
import { colors } from '@src/app/theme'
import { IRating } from '@src/model';
import ReactStars from 'react-stars'

interface IRatingProps {
    rating: IRating;
}

export const Rating = ({ rating }: IRatingProps) => {
    return (
        <Flex>
            <ReactStars
                count={5}
                value={rating.rate}
                half={true}
                size={18}
                color2={colors.brand.primary}
                edit={false}
            />
            <Text>({rating.count})</Text>
        </Flex>
    )
}
