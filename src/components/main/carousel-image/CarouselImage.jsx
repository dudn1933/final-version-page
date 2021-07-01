import styled from "styled-components"

const CarouselImage = ({ index }) => {
    console.log(index)
    return (
        <StyledCarouselImage image={index}>
        </StyledCarouselImage>
    )
}

export default CarouselImage

const StyledCarouselImage = styled.div`
    width:100%;
    height:40vh;
    background: ${({ image }) => `url(./image/${image}.jpg)`};
    background-repeat: no-repeat;
    background-size:cover;
    background-position:center;
`;