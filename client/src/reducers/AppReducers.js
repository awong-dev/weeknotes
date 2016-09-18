/* @flow */

import { OAUTH_LOADED, LOGIN, LOGOUT, LOCAL_NOTE_UPSERT } from '../actions/WeekNoteActions'

// TODO(vrk): Change notes to a Map?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

type Note = {
  contents: string,
  week_id: string
}

type Action = {
  type: string,
  user: ?Object,
  note: Note,
  notes: Note[],
  auth: Object
};

type State = {
  auth: ?Object,
  currentUser: ?Object,
  notes: {[id:string]: string}
};

const initialState = {
  // Whether the week note editor is active.
  auth: null,
  currentUser: null,
  notes: {}
};

function convertNotesToMap(notes_response) {
  var notes_map = {};
  for (const note of notes_response) {
    notes_map[note.week_id] = note.contents;
  }
  return notes_map;
}
 
export default function rootReducer(
  state: State = initialState, action: Action) {
  switch (action.type) {
    case OAUTH_LOADED:
      return Object.assign({}, state, { 
        auth: action.auth,
        currentUser: action.user || null,
        notes: convertNotesToMap(action.notes)
      });
    case LOGIN:
      return Object.assign({}, state, {
        currentUser: action.user,
        notes: convertNotesToMap(action.notes)
      });
    case LOGOUT:
      return Object.assign({}, state, {
        currentUser: null
      });
    case LOCAL_NOTE_UPSERT:
      let notes = Object.assign({}, state.notes);
      let note = action.note;
      notes[note.week_id] = note.contents;
      return Object.assign({}, state, {
        notes: notes 
      });
    default:
      return state;
  }
}
