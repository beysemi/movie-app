import styled from "styled-components";

const NavigationContainer = styled.div`
    position: relative;
`;
const NavigationList = styled.ul`
    padding: 8px 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.navigation.backgroundColor};
`;
const NavigationItem = styled.li`
   
`;
const NavigationLink = styled.a`
    padding: 0 32px;
    background-color: ${({theme},props) => props.active ? theme.navigation.activeBgColor : 'transparent'};
    color: ${({ theme }) => theme.navigation.linkColor};
    font-size: 16px;
    line-height: 24px;
`;


const Navigation = () => {
    return (
        <NavigationContainer>
            <NavigationList>
                <NavigationItem>
                    
                </NavigationItem>
            </NavigationList>
        </NavigationContainer>
    )
}
export default Navigation;