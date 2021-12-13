import React from "react";
import GenericTemplate from "../templates/GenericTemplate";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // pluginは、あとから
import allLocales from "@fullcalendar/core/locales-all";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction"; // needed for dayClick

const HomePage: React.FC = (props) => {
  const handleDateClick = React.useCallback((arg: DateClickArg) => {
    console.log(arg);
    alert(arg.dateStr);
  }, []);

  const fixedDigits = (int: number, digits: number) => {
    const tempInt = Math.floor(10 ** digits + int);
    return String(tempInt).substr(-digits);
  };
  const thisMonth = () => {
    const today = new Date();
    return `${today.getFullYear()}-${fixedDigits(today.getMonth() + 1, 2)}`;
  };

  return (
    <GenericTemplate>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: "event 1", date: `${thisMonth()}-01` },
          {
            title: "event 2",
            date: `${thisMonth()}-02`
          }
        ]}
        dateClick={handleDateClick}
        locales={allLocales}
        locale="ja"
      />
    </GenericTemplate>
  );
};

export default HomePage;
