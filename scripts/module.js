import {
  CALENDAR_OF_VARINTHIA,
  CalendarVarinthia,
} from "./varinthiaCalendar.mjs";

Hooks.on("dnd5e.setupCalendar", () => {
  CONFIG.DND5E.calendar.calendars.push({
    value: "varinthia",
    label: "Varinthia Calendar",
    config: CALENDAR_OF_VARINTHIA,
    class: CalendarVarinthia,
  });
  console.log(
    "Varinthia Calendar registered in CONFIG.DND5E.calendar.calendars"
  );
});
