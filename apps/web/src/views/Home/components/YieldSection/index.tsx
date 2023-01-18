import { Heading, Text, Grid, Box } from '@pancakeswap/uikit'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  padding: 50px;
  text-align: center;
  // margin: 50px auto;


  @media only screen and (max-width: 468px) {
    padding: 10px;
  }
`
const Styledcard = styled.div`
  height: fit-content;
  width: 100%;
  max-width: 248px;
  box-sizing: border-box;
  border-radius: 24px;
  box-shadow: 3px 5px 5px #1be0aa;
  // background: linear-gradient(90deg, #201761 1.04%, #1ca695 100%)
  padding: 24px;
  text-align: left;
  border: 1px solid rgba(217, 217, 217, 0.05);
  min-height: 254px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin:10px auto;
`

const StyledGrid = styled(Grid)`
  grid-template-columns: 300px;
  justify-content: center;
  
  @media only screen and (min-width: 680px) {
     {
      grid-template-columns: 300px 300px;
    }
  }
  @media only screen and (min-width: 1224px) {
     {
      grid-template-columns: 300px 300px 300px;
    }
  }
`
const YieldSection = () => {
  return (
    <>
      <StyledWrapper>
        <Heading scale="xl" margin="15px auto" textAlign={['left', 'left', 'center']}>
          Providing Tools for Reliable   <Heading  scale="xl" color="#1be0aa" >and Sustainable Yields </Heading> 
        </Heading>
        <StyledGrid marginTop="50px">
          <Styledcard>
            <Box minHeight="165px">
              <Heading color="#1be0aa" margin="10px 0">
                Dungeons
              </Heading>
              <Text>
                Stake MMO LP tokens to explore Dungeons as you begin your valiant quest for $MMO tokens with bonus
                trading fees.
              </Text>
            </Box>
          </Styledcard>
          <Styledcard>
            <Box minHeight="165px">
              <Heading color="#1be0aa" margin="10px 0">
                Raids
              </Heading>
              <Text>Stake $MMO tokens to discover Raids with legendary rewards in $MMO or partner tokens.</Text>
            </Box>
          </Styledcard>
          <Styledcard>
            <Box minHeight="165px">
              <Heading color="#1be0aa" margin="10px 0">
                Play 2 Earn (P2E)
              </Heading>
              <Text>Test your skills in any number of games and see if you have what it takes to win the riches.</Text>
            </Box>
          </Styledcard>
          {/* <Styledcard>
            <Box minHeight="165px">
              <Heading color="#1be0aa" margin="10px 0">
                Raids
              </Heading>
              <Text>Stake your $KNIGHT tokens to earn $KNIGHT or partner tokens in Raids.</Text>
            </Box>
          </Styledcard> */}
        </StyledGrid>
      </StyledWrapper>
    </>
  )
}

export default YieldSection
