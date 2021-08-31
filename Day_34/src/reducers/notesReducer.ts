interface addNoteAction {
  type: string;
  payload: string;
}

interface delNoteAction {
  type: string;
  payload: number;
}

type ActionType = addNoteAction | delNoteAction;

const notesReducer = (state: any = [], action: ActionType) => {
  switch (action.type) {
    case "ADD_NOTE":
      return [...state, action.payload];
    case "DEL_NOTE":
      return state.filter(
        (_: string, index: number) => index !== action.payload
      );
    default:
      return state;
  }
};

export default notesReducer;
