export const events = [
  {
    id: "1",
    title: "Look for Songbird",
    notes: "Go to Dogtown",
    start: new Date("2024-05-08 18:00:00"),
    end: new Date("2024-05-08 19:00:00"),
  },
  {
    id: "2",
    title: "Rescue President Myers",
    notes: "Go to Dogtown",
    start: new Date("2024-05-08 19:30:00"),
    end: new Date("2024-05-08 23:00:00"),
  },
];

export const initialState = {
  isLoadingEvents: true,
  events: [],
  activeEvent: null,
};

export const calendarWithEventsState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: null,
};

export const calendarWithActiveEventState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: { ...events[0] },
};
