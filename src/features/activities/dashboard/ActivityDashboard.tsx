import { Grid, GridColumn, List } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";

interface Props {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  selectActivity: (id: string) => void; //function
  cancelSelectActivity: () => void;
  editCreateMode: boolean;
  handleFormOpen: (type: "edit") => void;
  handleFormClose: () => void;
}

export default function ActivityDashboard({
  activities,
  selectedActivity,
  selectActivity,
  cancelSelectActivity,
  editCreateMode,
  handleFormOpen,
  handleFormClose,
}: Props) {
  return (
    <Grid>
      <GridColumn width="10">
        <ActivityList activities={activities} selectActivity={selectActivity} />
      </GridColumn>
      <GridColumn width="6">
        {activities[0] && !editCreateMode && (
          <ActivityDetails
            activity={selectedActivity}
            cancelSelectActivity={cancelSelectActivity}
            formOpen = {handleFormOpen}
          />
        )}

        {editCreateMode && <ActivityForm formClose = {handleFormClose} activity={selectedActivity}/>}
      </GridColumn>
    </Grid>
  );
}
