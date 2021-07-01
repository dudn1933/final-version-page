import styled from 'styled-components';


const Aside = () => {

    return (
        <StyledAside>
            <Logo />
            <StyledMenu>
                <div>Products</div>
                <div>Customer</div>
                <div>Support</div>
                <div>About us</div>
            </StyledMenu>
        </StyledAside>
    )
}

export default Aside

const StyledMenu = styled.div`
    ${({theme}) => theme.center};
    width:50rem;
    font-size:1.5rem;
    font-weight:bold;

    > div {
        cursor:pointer;
        &:not(:first-child) {
            padding-left:2rem;
        }
    }
`;

const Logo = styled.div`
    cursor: pointer;
    background: url('./image/mezoo-logo.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width:10rem;
    height:5rem;
    margin-left: 2rem;
`;
const StyledAside = styled.div`
    z-index:10;
    position:fixed;
    box-sizing: border-box;
    width:100%;
    padding: 1rem 3rem;
    display:flex;
    justify-content: space-between;
    background-color: transparent;
`;
