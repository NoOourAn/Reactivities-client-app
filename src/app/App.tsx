import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Container, List } from "semantic-ui-react";
import { Activity } from "./models/activity";
import NavBar from "./NavBar";
import ActivityDashboard from "../features/activities/dashboard/ActivityDashboard";
import { v4 as uuid } from 'uuid';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]); //[] is initial state for activities value

  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);

  const [EditCreateMode, setEditCreateMode] = useState(false); //we do not need to define type of EditCreateMode as boolean

  useEffect(() => {
    axios
      .get<Activity[]>("http://localhost:5000/api/activities")
      .then((res) => {
        setActivities(res.data);
      });
  }, []); ///the deps list is empty to prevent rerender (just run once)

  function handleSelectedActivity(id: string) {
    setSelectedActivity(activities.find((a) => a.id === id));
  }

  function handleCancelSelectActivity() {
    setSelectedActivity(undefined);
  }

  function handleFormOpen(type: "edit" | "create") {
    ////if it is edit mode the selected activity is already selected
    if (type === "create") handleCancelSelectActivity();
    setEditCreateMode(true);
  }

  function handleFormClose() {
    setEditCreateMode(false);
  }

  function handleCreateOrEditActivity(activity:Activity){
    activity.id 
    ? setActivities([...activities.filter(a => a.id !== activity.id), activity]) ///Edit Mode
    : setActivities([...activities , {...activity , id: uuid()}])  ///Create Mode
    setEditCreateMode(false)
    setSelectedActivity(activity)
  }

  function handleDeleteActivity(id:string){
    setActivities([...activities.filter(a => a.id !== id)]);
    selectedActivity?.id === id && setSelectedActivity(undefined)
  }

  return (
    <Fragment>
      <NavBar FormOpen={handleFormOpen} />
      <Container style={{ marginTop: "5em" }}>
        <ActivityDashboard
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectedActivity}
          cancelSelectActivity={handleCancelSelectActivity}
          editCreateMode={EditCreateMode}
          handleFormOpen={handleFormOpen}
          handleFormClose={handleFormClose}
          handleCreateOrEditActivity = {handleCreateOrEditActivity}
          handleDeleteActivity = {handleDeleteActivity}
        />
      </Container>
    </Fragment>
  );
}

export default App;
