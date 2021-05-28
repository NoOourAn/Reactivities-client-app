import react from "react";
import { Form, Segment ,Button} from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
  activity: Activity | undefined;
  formClose:()=>void
}

export default function ActivityForm({formClose,activity}:Props) {
  return (
    <Segment clearing>
      <Form>
        <Form.Input  placeholder='Title' label='Title'/>      
        <Form.TextArea  placeholder='Description' label='Description' />      
        <Form.Input  placeholder='Category' label='Category' />      
        <Form.Input  placeholder='Date' label='Date' />      
        <Form.Input  placeholder='City' label='City' />      
        <Form.Input  placeholder='Venue' label='Venue' /> 
        <Button floated='right' content="Submit" type='submit' positive/>
        <Button onClick={formClose} floated='right' content="Cancel" type='button' />
     
      </Form>
    </Segment>
  );
}
