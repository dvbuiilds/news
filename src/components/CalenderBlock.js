import React, { useEffect } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import moment from "../../node_modules/moment/moment";
import Toolbar from "../../node_modules/react-big-calendar/lib/Toolbar";
import { DateBox } from "./DateBox";

const localizer = momentLocalizer(moment);

const Status = {
  Completed: "Completed",
  Cancelled: "Cancelled",
  Pending: "Pending",
  Scheduled: "Send Reminder",
};

const events = [
  {
    id: 0,
    title: "All Day Event very long title",
    name: "Naman Gupta",
    start: moment(new Date(2023, 2, 2, 9, 0, 0, 0)).toDate(),
    end: moment(new Date(2023, 2, 2, 9, 30, 0, 0)).toDate(),
    price: 200,
    status: Status.Completed,
    staffAssigned: "Valuru",
  },
  {
    id: 1,
    title: "Long Event",
    name: "Ashneer Gupta",
    start: moment(new Date(2023, 2, 2, 9, 30, 0, 0)).toDate(),
    end: moment(new Date(2023, 2, 2, 10, 0, 0, 0)).toDate(),
    price: 200,
    status: Status.Completed,
    staffAssigned: "Valuru",
  },
  {
    id: 2,
    title: "DTS STARTS",
    name: "Gagan Gupta",
    start: moment(new Date(2023, 2, 2, 10, 0, 0, 0)).toDate(),
    end: moment(new Date(2023, 2, 2, 10, 30, 0, 0)).toDate(),
    price: 200,
    status: Status.Completed,
    staffAssigned: "Valuru",
  },
  {
    id: 3,
    title: "DTS ENDS",
    name: "Abhinav Gupta",
    start: moment(new Date(2023, 2, 2, 10, 30, 0, 0)).toDate(),
    end: moment(new Date(2023, 2, 2, 11, 0, 0, 0)).toDate(),
    price: 200,
    status: Status.Completed,
    staffAssigned: "Valuru",
  },
  {
    id: 4,
    title: "Some Event",
    name: "Bhubaneshwar Gupta",
    start: moment(new Date(2023, 2, 2, 11, 0, 0, 0)).toDate(),
    end: moment(new Date(2023, 2, 2, 11, 30, 0, 0)).toDate(),
    price: 200,
    status: Status.Completed,
    staffAssigned: "Valuru",
  },
  {
    id: 5,
    title: "Conference",
    name: "Chaitanya Gupta",
    start: moment(new Date(2023, 2, 2, 11, 30, 0, 0)).toDate(),
    end: moment(new Date(2023, 2, 2, 12, 0, 0, 0)).toDate(),
    desc: "Big conference for important people",
    price: 200,
    status: Status.Completed,
    staffAssigned: "Valuru",
  },
  {
    id: 6,
    title: "Meeting",
    name: "Dheerendra Gupta",
    start: moment(new Date(2023, 2, 2, 12, 0, 0, 0)).toDate(),
    end: moment(new Date(2023, 2, 2, 12, 30, 0, 0)).toDate(),
    desc: "Pre-meeting meeting, to prepare for the meeting",
    price: 200,
    status: Status.Completed,
    staffAssigned: "Valuru",
  },
  {
    id: 7,
    title: "Lunch",
    name: "Eklavya Gupta",
    start: moment(new Date(2023, 2, 2, 12, 30, 0, 0)).toDate(),
    end: moment(new Date(2023, 2, 2, 13, 0, 0, 0)).toDate(),
    desc: "Power lunch",
    price: 200,
    status: Status.Completed,
    staffAssigned: "Valuru",
  },
  {
    id: 8,
    title: "Lunch",
    name: "Eklavya Gupta",
    start: moment(new Date(2023, 2, 2, 13, 0, 0, 0)).toDate(),
    end: moment(new Date(2023, 2, 2, 13, 30, 0, 0)).toDate(),
    desc: "Power lunch",
    price: 200,
    status: Status.Completed,
    staffAssigned: "Valuru",
  },
  {
    id: 9,
    title: "Lunch",
    name: "Eklavya Gupta",
    start: moment(new Date(2023, 2, 2, 13, 30, 0, 0)).toDate(),
    end: moment(new Date(2023, 2, 2, 14, 0, 0, 0)).toDate(),
    desc: "Power lunch",
    price: 200,
    status: Status.Completed,
    staffAssigned: "Valuru",
  },
  {
    id: 10,
    title: "Lunch",
    name: "Eklavya Gupta",
    start: moment(new Date(2023, 2, 2, 14, 0, 0, 0)).toDate(),
    end: moment(new Date(2023, 2, 2, 14, 30, 0, 0)).toDate(),
    desc: "Power lunch",
    price: 200,
    status: Status.Completed,
    staffAssigned: "Valuru",
  },
  {
    id: 11,
    title: "Lunch",
    name: "Eklavya Gupta",
    start: moment(new Date(2023, 2, 2, 14, 30, 0, 0)).toDate(),
    end: moment(new Date(2023, 2, 2, 15, 0, 0, 0)).toDate(),
    desc: "Power lunch",
    price: 200,
    status: Status.Completed,
    staffAssigned: "Valuru",
  },
  {
    id: 12,
    title: "Lunch",
    name: "Eklavya Gupta",
    start: moment(new Date(2023, 2, 2, 15, 0, 0, 0)).toDate(),
    end: moment(new Date(2023, 2, 2, 15, 30, 0, 0)).toDate(),
    desc: "Power lunch",
    price: 200,
    status: Status.Completed,
    staffAssigned: "Valuru",
  },
  {
    id: 13,
    title: "Lunch",
    name: "Eklavya Gupta",
    start: moment(new Date(2023, 2, 2, 15, 30, 0, 0)).toDate(),
    end: moment(new Date(2023, 2, 2, 16, 0, 0, 0)).toDate(),
    desc: "Power lunch",
    price: 200,
    status: Status.Completed,
    staffAssigned: "Valuru",
  },
  {
    id: 14,
    title: "Lunch",
    name: "Eklavya Gupta",
    start: moment(new Date(2023, 2, 2, 16, 0, 0, 0)).toDate(),
    end: moment(new Date(2023, 2, 2, 16, 30, 0, 0)).toDate(),
    desc: "Power lunch",
    price: 200,
    status: Status.Completed,
    staffAssigned: "Valuru",
  },
];

export default function CalenderBlock(props) {
  const view = Views.DAY;

  useEffect(() => {
    const rbcHeader = document.getElementsByClassName("rbc-time-header")[0];
    // @ts-ignore
    rbcHeader.style.visibility = "hidden";
    console.log("events", events);
  });
  return (
    <>

      <div style={{zIndex: "-1", marginTop: "200px"}} >
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor={"start"}
          endAccessor={"end"}
          style={{ height: "500", margin: "20px", backgroundColor: "white" }}
          onView={handleView}
          defaultView={view}
          toolbar={true}
          tooltipAccessor={tooltipEvent}
          min={new Date(2023, 2, 11, 9, 0, 0)}
          max={new Date(2020, 2, 11, 21, 0, 0)}
          onNavigate={handleNavigation}
          timeslots={1}
          onSelectEvent={singleTap}
          eventPropGetter={eventStyleGetter}
          slotGroupPropGetter={slotGroupStyle}
          // @ts-ignore
          components={{ event: EventComponent({ events }), toolbar: CustomToolbar({ handleChange }), }}
        />
      </div> 
      <div style={{position: "absolute"}} className="container-fluid mx-auto justify-content-center ">
        <div className="row">
        <DateBox />
        <DateBox />
        <DateBox />
        <DateBox />
        <DateBox />
        </div>
      </div> 
    </>
  );
}

function slotGroupStyle() {
  return {
    style: {
      minHeight: "150px",
      backgroundColor: "white",
      fontSize: "12px",
    },
  };
}

function eventStyleGetter(event, start, end, isSelected) {
  return {
    style: {
      backgroundColor: "#007BFF",
      minWidth: "200px",
      opacity: 1,
      color: "white",
      border: "0px",
      display: "block",
      borderColor: "white",
      paddingLeft: "5px",
    },
  };
}

const handleView = () => {
  alert("View change is not permitted!");
};

const tooltipEvent = (event) => {
  return event.title;
};

const singleTap = (CalEvent) => {
  alert(CalEvent.title);
};

const EventComponent = () => (props) => {
  return (
    <>
      {
        <script>
          document.getElementsByClassName('rbc-time-header')[0].style.visibility
          = 'hidden';
        </script>
      }
      <div className="container">
        <div className="row">
          <div
            className="col text-end"
            style={{ marginTop: "-16px", fontSize: "12px" }}
          >
            {props.event.status}
          </div>
        </div>
        <div className="row mx-auto">
          <div className="row text-bold my-1">{props.event.name}</div>
          <div className="row h5 mx-0 px-0 my-1">{props.event.title}</div>
          <div className="row justify-content-end mx-0 px-0 my-2 align-items-center">
            <div className="col-8 text-start mx-0 px-0 ">
              {props.event.staffAssigned}
            </div>
            <div className="col text-end mx-0 px-0 h5 ">
              Rs. {props.event.price}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

var CustomToolbar = ({ handleChange }) => {
  // @ts-ignore
  return class BaseToolBar extends Toolbar {
    // // eslint-disable-next-line
    // constructor(props) {
    //   super(props);
    // }
    handleDayChange = (event, mconte) => {
      mconte(event.target.value);
    };
    handleNamvigate = (detail, elem) => {
      detail.navigate(elem);
    };
    render() {
      return (
        <div className="posr">
          <div className="rbc-btn-group">
            <button
              type="button"
              className="defaultbtn"
              onClick={() => this.handleNamvigate(this, "TODAY")}
            >
              Today
            </button>
            <button
              type="button"
              className="nextp-btn"
              onClick={() => this.handleNamvigate(this, "PREV")}
            >
              Prev
            </button>
            <button
              type="button"
              className="nextp-btn"
              onClick={() => this.handleNamvigate(this, "NEXT")}
            >
              Next
            </button>
          </div>
          {/* <div className="rbc-toolbar-label">{this.props.label}</div> */}
        </div>
      );
    }
  };
};

const handleNavigation = (date, view, action) => {
  console.log(date, view, action);
};
const handleChange = () => {
  console.log("this block code executed");
};
