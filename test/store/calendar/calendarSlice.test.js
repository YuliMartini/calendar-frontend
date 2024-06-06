import {
  calendarSlice,
  onAddNewEvent,
  onDeleteEvent,
  onLoadEvents,
  onLogoutCalendar,
  onSetActiveEvent,
  onUpdateEvent,
} from "../../../src/store/calendar/calendarSlice";
import {
  calendarWithActiveEventState,
  calendarWithEventsState,
  events,
  initialState,
} from "../../fixtures/calendarStates";

describe("Tests in calendarSlice", () => {
  //' 1
  test("should return default state", () => {
    const state = calendarSlice.getInitialState();
    expect(state).toEqual(initialState);
  });

  //' 2
  test("onSetActiveEvent should activate event", () => {
    const state = calendarSlice.reducer(
      calendarWithEventsState,
      onSetActiveEvent(events[0])
    );
    expect(state.activeEvent).toEqual(events[0]);
  });

  //' 3
  test("onAddNewEvent should add an event", () => {
    const newEvent = {
      id: "3",
      title: "Meet Hanako at Embers",
      notes: "LOL no",
      start: new Date("2024-05-10 14:30:00"),
      end: new Date("2024-05-10 15:00:00"),
    };

    const state = calendarSlice.reducer(
      calendarWithEventsState,
      onAddNewEvent(newEvent)
    );
    expect(state.events).toEqual([...events, newEvent]);
  });

  //' 4
  test("onUpdateEvent should update an event", () => {
    const updatedEvent = {
      id: "2",
      title: "Rescue President Myers",
      notes: "NOT PAID ENOUGH FOR THIS",
      start: new Date("2024-05-08 19:30:00"),
      end: new Date("2024-05-08 23:00:00"),
    };

    const state = calendarSlice.reducer(
      calendarWithEventsState,
      onUpdateEvent(updatedEvent)
    );
    expect(state.events).toContain(updatedEvent);
  });

  //' 5
  test("onDeleteEvent should delete active event", () => {
    const state = calendarSlice.reducer(
      calendarWithActiveEventState,
      onDeleteEvent()
    );
    expect(state.activeEvent).toBe(null);
    expect(state.events).not.toContain(events[0]);
  });

  //' 6
  test("onLoadEvents should load all events", () => {
    const state = calendarSlice.reducer(initialState, onLoadEvents(events));
    expect(state.isLoadingEvents).toBeFalsy();
    expect(state.events).toEqual(events);

    // check there are no duplicates
    const newState = calendarSlice.reducer(state, onLoadEvents(events));
    expect(state.events.length).toBe(events.length);
  });

  //' 7
  test("onLogoutCalendar should clear state", () => {
    const state = calendarSlice.reducer(
      calendarWithActiveEventState,
      onLogoutCalendar()
    );
    expect(state).toEqual(initialState);
  });
});
