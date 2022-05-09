import styled from "@emotion/styled";
import { Divider, IconButton, InputBase, Paper, Typography } from "@mui/material";
import { TopBar } from "../Components/TopBar";
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

const HomePage = () => (
  <div>
    <TopBar />
    <Background>
      <BackgroundContainer>
        <SearchContainer>
          <Title variant="h4" gutterBottom>
            Stunning free images & royalty free stock
          </Title>
          <Typography variant="subtitle1" gutterBottom component="div">
            Over 2.6 million+ high quality stock images, videos and music shared by our talented community.
          </Typography>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
          >
            <IconButton sx={{ p: '10px' }} aria-label="menu">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search images, videos, vectors and music"
              inputProps={{ 'aria-label': 'Search images, videos, vectors and music' }} />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
              Images
            </IconButton>
          </Paper>
          <SubTitle variant="subtitle2" gutterBottom>
            Popular Searches:
            background
            wallpaper
            nature
            flowers
            money
            flower
            sky
            eid mubarak
            cat
            business
            dog
            forest
            coronavirus
          </SubTitle>
        </SearchContainer>
      </BackgroundContainer>
    </Background>
  </div>
);
export default HomePage;
const Background = styled.div`
  height: 80vh;
  background: url(https://cdn.pixabay.com/index/2022/05/04/14-25-13-179_640.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: center;
`;
const BackgroundContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 77vh;
`;
const SearchContainer = styled.div`
  padding: 10px;
  max-width: 700px;
  color: #fff;
`;
const Title = styled(Typography)`
  font-weight: bold;
  text-align: center;
`;
const SubTitle = styled(Typography)`
  text-align: center;
  font-size: 12px;
`;