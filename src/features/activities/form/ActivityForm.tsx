import react, { ChangeEvent, useState } from "react";
import { Form, Segment, Button, InputOnChangeData } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
  selectedActivity: Activity | undefined;
  formClose: () => void;
  CreateOrEditActivity: (activity: Activity) => void;
}

export default function ActivityForm({
  formClose,
  selectedActivity,
  CreateOrEditActivity,
}: Props) {
  const initialState = selectedActivity ?? {
    ///set the activity to the values on right of ?? if it was null (create Mode)
    id: "",
    title: "",
    category: "",
    description: "",
    date: "",
    city: "",
    venue: "",
  };

  const [activity, setActivity] = useState(initialState);

  function handleSubmit() {
    console.log(activity)
    CreateOrEditActivity(activity)
  }

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  }
  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit}>
        {/** when we add only the value prop react made the field readonly as react is unable to track changes in real dom  */}
        <Form.Input
          placeholder="Title"
          label="Title"
          value={activity.title}
          name="title"
          onChange={handleChange}
        />
        <Form.TextArea
          placeholder="Description"
          label="Description"
          value={activity.description}
          name="description"
          onChange={handleChange}
        />
        <Form.Input
          placeholder="Category"
          label="Category"
          value={activity.category}
          name="category"
          onChange={handleChange}
        />
        <Form.Input
          placeholder="Date"
          label="Date"
          value={activity.date}
          name="date"
          onChange={handleChange}
        />
        <Form.Input
          placeholder="City"
          label="City"
          value={activity.city}
          name="city"
          onChange={handleChange}
        />
        <Form.Input
          placeholder="Venue"
          label="Venue"
          value={activity.venue}
          name="venue"
          onChange={handleChange}
        />
        <Button floated="right" content="Submit" type="submit" positive />
        <Button
          onClick={formClose}
          floated="right"
          content="Cancel"
          type="button"
        />
      </Form>
    </Segment>
  );
}
