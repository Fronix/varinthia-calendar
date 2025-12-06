/**
 * Extension of the core calendar with support for extra formatters.
 */
export class CalendarVarinthia extends foundry.data.CalendarData {
  /* -------------------------------------------- */
  /*  Formatter Functions                         */
  /* -------------------------------------------- */

  /** @inheritDoc */
  static formatMonthDay(calendar, components, options) {
    return CalendarVarinthia.formatLocalized(
      "DND5E.CALENDAR.Varinthia.Formatters.MonthDay",
      calendar,
      components,
      options
    );
  }

  /* -------------------------------------------- */

  /** @inheritDoc */
  static formatMonthDayYear(calendar, components, options) {
    return CalendarVarinthia.formatLocalized(
      "DND5E.CALENDAR.Varinthia.Formatters.MonthDayYear",
      calendar,
      components,
      options
    );
  }
}

/* -------------------------------------------- */

export const CALENDAR_OF_VARINTHIA = {
  name: "Calendar of Varinthia",
  years: {
    yearZero: 1, // Use your epoch value
    firstWeekday: 2, // Use your startDay value
    currentYear: 1300,
  },
  months: {
    values: [
      {
        name: "Aurelian",
        abbreviation: "Aur",
        days: 30,
        ordinal: 1,
        description:
          "The first month of the year, marking the beginning of spring",
      },
      {
        name: "Dawnmere",
        abbreviation: "Daw",
        days: 30,
        ordinal: 2,
        description: "The second month, a time of renewal and growth",
      },
      {
        name: "Verdantide",
        abbreviation: "Ver",
        days: 30,
        ordinal: 3,
        description: "The third month, celebrating the full bloom of spring",
      },
      {
        name: "Suncrest",
        abbreviation: "Sun",
        days: 30,
        ordinal: 4,
        description: "The fourth month, a time of warmth and light",
      },
      {
        name: "Highflame",
        abbreviation: "Hig",
        days: 30,
        ordinal: 5,
        description: "The fifth month, celebrating the height of summer",
      },
      {
        name: "Solmorne",
        abbreviation: "Sol",
        days: 30,
        ordinal: 6,
        description:
          "The sixth month, a time of reflection and preparation for the coming autumn",
      },
      {
        name: "Emberfall",
        abbreviation: "Emb",
        days: 30,
        ordinal: 7,
        description: "The seventh month, a time of harvest and thanksgiving",
      },
      {
        name: "Harrowcrest",
        abbreviation: "Har",
        days: 30,
        ordinal: 8,
        description:
          "The eighth month, a time of reflection and preparation for the coming winter",
      },
      {
        name: "Duskwane",
        abbreviation: "Dus",
        days: 30,
        ordinal: 9,
        description: "The ninth month, a time of transition and change",
      },
      {
        name: "Frostwane",
        abbreviation: "Fro",
        days: 30,
        ordinal: 10,
        description: "The tenth month, a time of deep winter and introspection",
      },
      {
        name: "Hollowmourn",
        abbreviation: "Hol",
        days: 30,
        ordinal: 11,
        description: "The eleventh month, a time of mourning and remembrance",
      },
      {
        name: "Nightveil",
        abbreviation: "Nig",
        days: 30,
        ordinal: 12,
        description: "The twelfth month, a time of darkness and reflection",
      },
    ],
  },
  days: {
    values: [
      {
        name: "Sundawn",
        abbreviation: "SD",
        ordinal: 1,
        description: "Sacred to Pelor, marking new beginnings.",
      },
      {
        name: "Moonsday",
        abbreviation: "MoD",
        ordinal: 2,
        description: "Associated with Lunara, the goddess of secrets.",
      },
      {
        name: "Tyrnday",
        abbreviation: "TyD",
        ordinal: 3,
        description: "Named after Tyrndor, an ancient hero of Thaloria.",
      },
      {
        name: "Rimelast",
        abbreviation: "Rim",
        ordinal: 4,
        description: "A neutral day, often used for commerce.",
      },
      {
        name: "Goldwake",
        abbreviation: "Gol",
        ordinal: 5,
        description: "A day of trade, work, and financial dealings.",
      },
      {
        name: "Stormtide",
        abbreviation: "Sto",
        ordinal: 6,
        description: "Associated with seafarers, adventurers, and risk-takers.",
      },
      {
        name: "Hollow's Rest",
        abbreviation: "HR",
        ordinal: 7,
        description: "Traditionally a day of worship, study, or reflection.",
      },
    ],
    daysPerYear: 360,
    hoursPerDay: 24,
    minutesPerHour: 60,
    secondsPerMinute: 60,
  },
  seasons: {
    values: [
      {
        name: "Spring",
        startMonth: 1,
        endMonth: 3,
        icon: "spring",
        description: "",
      },
      {
        name: "Summer",
        startMonth: 4,
        endMonth: 6,
        icon: "summer",
        description: "",
      },
      {
        name: "Autumn",
        startMonth: 7,
        endMonth: 9,
        icon: "fall",
        description: "",
      },
      {
        name: "Winter",
        startMonth: 10,
        endMonth: 12,
        icon: "winter",
        description: "",
      },
    ],
  },
};
