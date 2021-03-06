
import React from 'react';
import { Button } from 'react-bootstrap';

const EventScheduledEntryView = (props) => {
  return (
    <li className="eventHeading">
      {props.event}
      <Button className="button" bsStyle="primary" block bsSize="small" onClick = { () => {
        props.onEventDelete(props.mainEvent);
      }}
      >Delete</Button>
    </li>
  );
};

export default EventScheduledEntryView;
