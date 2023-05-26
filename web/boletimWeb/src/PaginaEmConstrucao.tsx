import { Box, Heading, Highlight, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

export default function Vazia() {
    return (
        <Box>
            <Heading lineHeight='tall'>
                <Highlight
                    query='Em breve'
                    styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
                >
                    Em breve... página em construção
                </Highlight>
            </Heading>
            <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
        </Box>
    )
}