import React, { useCallback } from "react";
import GSTC from "gantt-schedule-timeline-calendar";
import "gantt-schedule-timeline-calendar/dist/style.css";

export default function GSTCWrapper(props) {
  let state = GSTC.api.stateFromConfig(props.config);
  props.onState(state);
  const callback = useCallback(
    node => {
      if (node) {
        GSTC({
          element: node,
          state
        });
      }
    },
    [state]
  );

  return <div ref={callback} />;
}
