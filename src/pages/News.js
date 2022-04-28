import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadingGif from "../assets/loading.gif";
import newsImg from "../assets/news.jpg"
import { getNews } from "../redux/thunk/newsThunk";
import ShareIcon from '@mui/icons-material/Share';
import InfoIcon from '@mui/icons-material/Info';
// import { setLoading, clearLoading } from "../redux/actions/appActions";
// import { setNewsList } from "../redux/actions/newsActions";
// import axios from "axios";

const News = () => {
  const dispatch = useDispatch();
  const { newsList } = useSelector((state) => state.news);
  const { loading } = useSelector((state) => state.app);



  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <>
      {loading && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <img src={loadingGif} alt="gif" width="90%" height="800px" />
        </Box>
      )}
      {!loading && (
        <Box
          xs={{ d: "flex" }}
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          flexWrap="wrap"
        >
          {newsList?.map((item, index) => (
            <Card sx={{ maxWidth: 345,minWidth:345, m: 5, maxHeight: 500,minHeight:500,backgroundColor:"bisque" }} key={index}>
              <CardMedia
                component="img"
                height="250"
                image={item?.image_url ? item?.image_url : newsImg}
                alt="img"
              />
              <CardContent sx={{height:150}}>
                <Typography gutterBottom variant="h6" component="div">
                  {item?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{height:"55px",overflow: "hidden",whiteSpace: "pre",textOverflow: "ellipsis"}} component="div">
                  {item?.content ? item?.content : item?.description}
                </Typography>
              </CardContent>
              <CardActions sx={{marginTop:"5px",marginBottom:0}}>
                <Button size="small"><ShareIcon sx={{color:"#222831",fontSize:40}}/></Button>
                <Button size="small" href={item?.link} target="_blank" >
                  <InfoIcon  sx={{color:"#222831",fontSize:40}}/>
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      )}
    </>
  );
};

export default News;

