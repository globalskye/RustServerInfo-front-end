import React, { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Box,
  CardContent,
  Card,
  CardMedia,
  Link,
} from "@mui/material";

import styled from "styled-components";
import { getVkNews } from "../../../service";
import { ItemsEntity, ResponseVk } from "../../../types";

const ScrollableList = styled.div`
  overflow: auto;
  max-height: 140vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0.2em;
    background-color: #F5F5F5;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #555;
  }
`;
const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DateContainer = styled.div`
  float: right;
  font-size: 15px;
`;
const TextContainer = styled.div`
  padding: 10px;
  text-align: left;
`;
const Heading = styled(Typography)`
  font-size: 18px;
  font-weight: bold;
`;



const NewsList = () => {
  const [data, setData] = useState<ResponseVk>();
  useEffect(() => {
    getVkNews().then(
      (response) => {
        setData(response.data);
        console.log(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <Box
      bgcolor="#60EFE7"
      sx={{
        fontWeight: "bold",
        borderRadius: "10px",
        paddingRight: "12px",
        paddingLeft: "12px",
      }}
    >
      <Typography variant="h5" textAlign="center" style={{ fontWeight: 1000 }}>
        Новости
      </Typography>
      <List
        sx={{
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          height: 1400,
          

        }}
      >
         <ScrollableList>
        {data?.items?.map((item: ItemsEntity) => (
            <Card key={item.id} sx={{marginBottom:'20px'}}>
              
              <TextContainer>
              <Heading variant="h5" gutterBottom>
                {item.text.split('\n')[0]}
              </Heading>
              <div
                dangerouslySetInnerHTML={{
                  __html: item.text
                    .replace(/\n/g, "<br>")
                    .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1">$1</a>'),
                }}
                onClick={(event) => {}}
              />
              </TextContainer>
              
              <CardContent>
                <CenteredContainer>
                  {item.imageLink && (
                    <img src={item.imageLink} style={{ maxWidth: '100%' }} />
                  )}
                  {item.videoLink && (
                    <iframe
                      width="100%"
                      height="415"
                      src={item.videoLink}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                  )}
                </CenteredContainer>
              </CardContent>
              <DateContainer>
                {new Date(item.date*1000).toLocaleDateString()}
              </DateContainer>
            </Card>
        ))}
      </ScrollableList>
      </List>
    </Box>
  );
};

export default NewsList;
