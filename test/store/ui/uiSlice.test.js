import {
  onCloseDateModal,
  onOpenDateModal,
  uiSlice,
} from "../../../src/store/ui/uiSlice";

describe("Tests in uiSlice", () => {
  //' 1
  test("should return default state", () => {
    expect(uiSlice.getInitialState()).toEqual({ isDateModalOpen: false });
    expect(uiSlice.getInitialState().isDateModalOpen).toBeFalsy();
  });

  //' 2
  test("should correctly change isDateModalOpen", () => {
    let state = uiSlice.getInitialState();
    state = uiSlice.reducer(state, onOpenDateModal());
    expect(state.isDateModalOpen).toBeTruthy();

    state = uiSlice.reducer(state, onCloseDateModal());
    expect(state.isDateModalOpen).toBeFalsy();
  });
});
