import React, { useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { db } from "./services/firebase";
import { MenuItem } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

import Button from "./components/button";
import {
  eat,
  sleeps,
  worksout,
  readsABook,
  getsATreat,
  itemsFetchData,
} from "./redux/petStatus/petStatus.actions";
import routes from "./routes/routes";
import Nav from "./components/nav/nav";

import "./App.css";

function App() {
  const {
    health,
    strength,
    intellect,
    mood,
    asyncLoading,
    asyncError,
    asyncSuccess,
    errorMessage,
  } = useSelector((state) => state.petStatus);

  const dispatch = useDispatch();
  const petEats = () => dispatch(eat());
  const petWorksOut = () => dispatch(worksout());
  const petReadsABook = () => dispatch(readsABook());
  const petGetsTreat = () => dispatch(getsATreat());
  const petSleeps = () => dispatch(sleeps());
  const fetchItems = () => dispatch(itemsFetchData());

  console.log("SUCCESS", asyncSuccess);

  return (
    <>
      <Nav>
        <MenuItem component={Link} to="/">
          Home
        </MenuItem>
        <MenuItem component={Link} to="/create">
          create
        </MenuItem>
        <MenuItem component={Link} to="/manage">
          manage
        </MenuItem>
      </Nav>
      <div>Health: {health}</div>
      <div>Strength: {strength}</div>
      <div>Intellect: {intellect}</div>
      <div>Mood: {mood}</div>
      <Button onClick={petEats}>Eat</Button>
      <Button onClick={petReadsABook}>Read</Button>
      <Button onClick={petWorksOut}>Work Out</Button>
      <Button onClick={petGetsTreat}>Get Treat</Button>
      <Button onClick={petSleeps}>Sleep</Button>
      <Button onClick={fetchItems}>LOAD POSTS</Button>
      {asyncLoading ? (
        <div style={{ background: "lightblue", padding: 20 }}>
          Loading Posts
        </div>
      ) : !asyncError ? (
        // asyncSuccess.map((doc) => console.log(doc))
        <div>Hi</div>
      ) : (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {errorMessage?.message}
        </Alert>
      )}

      <Switch>
        {routes.map((route, i) => (
          <Route key={i} {...route} />
        ))}
      </Switch>
    </>
  );
}

export default App;
