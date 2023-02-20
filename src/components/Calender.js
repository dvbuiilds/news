import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { 
  useState, 
  // Component, 
  // useMemo, 
  // useCallback 
} from "react";
import { 
  Calendar as Cal, 
  dateFnsLocalizer, 
  // momentLocalizer, 
  Views 
} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from '../../node_modules/moment/moment';
import Toolbar from "../../node_modules/react-big-calendar/lib/Toolbar";


const locales = {
  "en-US" : require("date-fns/locale/en-US")
}

const localizer = //momentLocalizer(moment);
dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
});

const events = [
  {
    id: 0,
    title: 'All Day Event very long title',
    name: 'Naman Gupta',
    start:  moment(new Date(2023, 1, 17, 9, 0, 0, 0)).toDate(),
    end:  moment(new Date(2023, 1, 17, 9, 30, 0, 0)).toDate(),
  },
  {
    id: 1,
    title: 'Long Event',
    name: 'Ashneer Gupta',
    start:  moment(new Date(2023, 1, 17, 9, 30, 0, 0)).toDate(),
    end:  moment(new Date(2023, 1, 17, 10, 0, 0, 0)).toDate(),
  },
  {
    id: 2,
    title: 'DTS STARTS',
    name: 'Gagan Gupta',
    start:  moment(new Date(2023, 1, 17, 10, 0, 0, 0)).toDate(),
    end:  moment(new Date(2023, 1, 17, 10, 30, 0, 0)).toDate(),
  },
  {
    id: 3,
    title: 'DTS ENDS',
    name: 'Abhinav Gupta',
    start:  moment(new Date(2023, 1, 17, 10, 30, 0, 0)).toDate(),
    end:  moment(new Date(2023, 1, 17, 11, 0, 0, 0)).toDate(),
  },
  {
    id: 4,
    title: 'Some Event',
    name: 'Bhubaneshwar Gupta',
    start:  moment(new Date(2023, 1, 17, 11, 0, 0, 0)).toDate(),
    end:  moment(new Date(2023, 1, 17, 11, 30, 0, 0)).toDate(),
  },
  {
    id: 5,
    title: 'Conference',
    name: 'Chaitanya Gupta',
    start:  moment(new Date(2023, 1, 17, 11, 30, 0, 0)).toDate(),
    end:  moment(new Date(2023, 1, 17, 12, 0, 0, 0)).toDate(),
    desc: 'Big conference for important people',
  },
  {
    id: 6,
    title: 'Meeting',
    name: 'Dheerendra Gupta',
    start:  moment(new Date(2023, 1, 17, 12, 0, 0, 0)).toDate(),
    end:  moment(new Date(2023, 1, 17, 12, 30, 0, 0)).toDate(),
    desc: 'Pre-meeting meeting, to prepare for the meeting',
  },
  {
    id: 7,
    title: 'Lunch',
    name: 'Eklavya Gupta',
    start:  moment(new Date(2023, 1, 17, 12, 30, 0, 0)).toDate(),
    end:  moment(new Date(2023, 1, 17, 13, 0, 0, 0)).toDate(),
    desc: 'Power lunch',
  },
];


const handleNavigation = (date, view, action) => {
  console.log(date, view, action);
  //it returns current date, view options[month,day,week,agenda] and action like prev, next or today
};
const handleChange = () => {
  console.log("this block code executed");
};


export default function Calender(props) {
  const [view, setView] = useState(Views.DAY);
  // const [newEvent, setNewEvent] = useState({'title': "", start: "", end: ""});
  // const [allEvents, setAllEvents] = useState(events);
  // let change = handleChange;
  return (
    <>
      {/* {alert(moment(new Date(2023, 1, 12, 0, 0, 0)))} */}
      <Cal 
        localizer={localizer} events={events} startAccessor={"start"} endAccessor={"end"} 
        style={{height: "500", margin: "20px", backgroundColor: "white"}} 
        onView={handleView} defaultView={view} toolbar={true} tooltipAccessor={tooltipEvent} 
        min={new Date(2023, 2, 11, 9, 0, 0)} max={new Date(2020, 2, 11, 21, 0, 0)} 
        onNavigate={handleNavigation} 
        timeslots={1} onSelectEvent={singleTap} eventPropGetter={eventStyleGetter}
        slotGroupPropGetter={slotGroupStyle}
        // @ts-ignore 
        components={{ event: EventComponent({ events }), toolbar: CustomToolbar({ handleChange }) }}
      />
    </>
  )
}

function slotGroupStyle () {
  return ({
      style: {
        minHeight: "150px",
        backgroundColor: "white",
        fontSize: "12px",
        // paddingRight: "50px"
      }
    })
}

function eventStyleGetter (event, start, end, isSelected) {
  return {
      style: {
        backgroundColor: "#007BFF",
        minWidth: "200px",
        // borderRadius: '5px',
        opacity: 1,
        color: 'white',
        border: '0px',
        display: 'block',
        borderColor: "white",
        paddingLeft: "5px"
        // borderWidth: "20px"
    }
  };
}

const handleView = ()=>{
  // console.log('viewchanged');
  alert("View change is not permitted!")
}

const tooltipEvent = (event)=>{
  // console.log('event', event);
  return event.title;
}

const singleTap = (CalEvent)=>{
  alert(CalEvent.title);
}

const EventComponent = () => (props) => {
  return (
    <>{console.log('props', props)}
      <div className="container">
        <div className="row text-bold my-1">{props.event.name}</div>
        <div className="row h5">{props.event.title}</div>
        <div className="row"></div>
          {/* <div className="col-md-8">Heera Thakur</div>
          <div className="col-md-4 small">Completed</div> */}
          {/* <div className="col-md-4 small">{props.event.start}</div> */}
        {/* </div> */}
        {/* <div className="row">{props.event.start}-{props.event.end}</div> */}
      </div>
    </>
  );
};

// const Components = ()=> {
//   const { components, defaultDate } = useMemo(
//     () => ({
//       components: {
//         toolbar: CustomToolbar,
//       },
//       defaultDate: new Date(2023, 2, 11),
//     }),
//     []
//   )
// }


var CustomToolbar = ({ handleChange }) => {
  // @ts-ignore
  return class BaseToolBar extends Toolbar {
    constructor(props) {
      super(props);
    }
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