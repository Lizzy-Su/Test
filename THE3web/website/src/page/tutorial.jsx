import React from "react";
import { Box, Grid, Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function TutorialPage() {
  // Tutorial Labels
  const cardsData = [
    {
      id: 1,
      title: "TechWith3小组入口",
      description: "TouchDesigner入门课程",
      image: "static/basic.png",
      link: "https://www.xiaohongshu.com/goods-detail/660661d5d391df0001824b72",
    },
    {
      id: 2,
      title: "贝塞尔曲线专项课程",
      description: "TouchDesigner专项课程",
      image: "static/Bezier.png",
      link: "https://www.xiaohongshu.com/goods-detail/65b850b2f8a5d50001539f18",
    },
    {
      id: 3,
      title: "物理仿真课程",
      description: "TouchDesigner专项课程",
      image: "static/bullet.jpg",
      link: "https://www.xiaohongshu.com/goods-detail/65d8126a746f43000109bf99",
    },
    {
      id: 4,
      title: "多米诺特邀课程",
      description: "TouchDesigner进阶课程",
      image: "static/domino.png",
      link: "https://www.xiaohongshu.com/goods-detail/6643021efa6f290001ab001e",
    },
  ];
  return (
    <Grid container spacing={3}>
      {cardsData.map((card) => (
        <Grid key={card.id} item xs={6} md={3}>
          <Card sx={{ maxWidth: 360 }}>
            <CardMedia
              component="img"
              alt={card.title}
              height="120"
              image={card.image}
            />
            <CardContent sx={{ paddingTop:1, paddingBottom:1 }}>
              <Typography gutterBottom variant="h7" component="div">
                {card.title}
              </Typography>
              <Typography variant="body4" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "flex-end" }}>
              <Button
                color="tutorial"
                component={Link}
                to={card.link}
                size="small"
                variant="text"
              >
                详情
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
export default TutorialPage;
