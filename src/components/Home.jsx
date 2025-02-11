import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

function Home() {
  return (
    <div>
      <h1>Dashboard</h1>
      <List>
        <ListItem>{new Date().toLocaleString()}</ListItem>
        <ListItem>Daily Sales: </ListItem>
        <ListItem>Monthly Sales: </ListItem>
        <ListItem>Montly Comp Target: </ListItem>
        <ListItem>Top 3 Products:</ListItem>
      </List>
    </div>
  );
}

export default Home;
