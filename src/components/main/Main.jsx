import styled from "styled-components"
import { FiChevronRight } from 'react-icons/fi';
import CarouselImage from "./carousel-image/CarouselImage";

const Main = () => {

    const infinityCarouselSlider = () => {
        return new Array(3).fill('').map((v, i) => {
            return <CarouselImage key={i} index={i}/>
        });
    }

    return (
        <StyledMain>
            <StyledBackground />
            <StyledCarouselImage>
                <StyledProductTitle />
                <StyledLearnMore>
                    <div>Learn More</div>
                    <FiChevronRight />
                </StyledLearnMore>
                {infinityCarouselSlider()}
            </StyledCarouselImage>
        </StyledMain>
    )
}

export default Main

const StyledBackground = styled.div`
    position:absolute;
    z-index:1;
    top:8rem;
    width:100%;
    height:40vh;
    background:rgba(0,0,0,0.2);
`;

const StyledLearnMore = styled.div`
    position: absolute;
    width:10rem;
    height:3rem;
    border-radius: 50px;
    font-weight:bold;
    font-size:1.2rem;
    background-color:white;
    ${({ theme }) => theme.center}
    right: 35%;
    bottom: 17%;
    > svg {
        padding-top:3px;
    }

    &:hover {
        color:white;
        background-color: #cf227e;
    }

    transition: all 0.3s ease-in-out;
`;

const StyledCarouselImage = styled.div`
    position:relative;
    top:8rem;
    width:100%;
    height:40vh;
    display:grid;
    grid-template-columns: repeat(3,100%);
    // overflow:hidden;
`;

const StyledProductTitle = styled.div`
    position:absolute;
    z-index:2;
    left: 5rem;
    bottom: .1rem;
    width:60%;
    height:40vh;
    background: url('./image/say-hi.png');
    background-repeat:no-repeat;
    background-size: cover;
    background-position:center;
    background-color:transparent;
`;

const StyledMain = styled.div`
    width:100%;
    height:100vh;
`;
