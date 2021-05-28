import react, { Fragment } from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
  activity: Activity | undefined;
  cancelSelectActivity: () => void;
  formOpen:(type:"edit")=>void
}

export default function ActivityDetails({
  activity,
  cancelSelectActivity,
  formOpen,
}: Props) {
  return (
    <Fragment>
      {activity && (
        <Card fluid>
          <Image src={`./assets/categoryImages/${activity.category}.jpg`} />
          <Card.Content>
            <Card.Header>{activity.title}</Card.Header>
            <Card.Meta>
              <span>{activity.date}</span>
            </Card.Meta>
            <Card.Description>{activity.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button.Group widths="2">
              <Button
                inverted
                color="blue"
                content="Edit"
                style={{ marginRight: "5px" }}
                onClick={()=>formOpen("edit")}
              />
              <Button
                onClick={cancelSelectActivity}
                inverted
                color="grey"
                content="Cancel"
                style={{ color: "grey" }}
              />
            </Button.Group>
          </Card.Content>
        </Card>
      )}
    </Fragment>
  );
}
