import { createSlice } from '@reduxjs/toolkit';

// prettier-ignore
const INIT_APPOINTMENT_DATA = [
      { id: 0, label: "08:00", name: "Patrick A. Smith", phone: "(301) 432-7111", completed: false },
      { id: 1, label: "09:00", name: "Patrick B. Smith", phone: "(302) 432-7222", completed: false },
      { id: 2, label: "10:00", name: "Eric Cantona", phone: "(303) 434-7333", completed: false },
      { id: 3, label: "10:00", name: "Patrick C. Smith", phone: "(303) 432-7333", completed: false },
      { id: 4, label: "11:00", name: "Patrick D. Smith", phone: "(304) 432-7444", completed: false },
      { id: 5, label: "12:00", name: "Patrick E. Smith", phone: "(305) 432-7555", completed: false },
      { id: 6, label: "13:00", name: "Patrick F. Smith", phone: "(306) 432-7666", completed: false },
      { id: 7, label: "14:00", name: "Joe Gelhardt", phone: "(307) 432-7777", completed: false },
      { id: 8, label: "15:00", name: "Kalvin Phillips", phone: "(308) 432-7888", completed: false },
      { id: 9, label: "16:00", name: "Patrick G. Smith", phone: "(309) 432-7999", completed: false },
      { id: 10, label: "17:00", name: "Patrick H. Smith", phone: "(444) 432-7891", completed: false },
      { id: 11, label: "18:00", name: "Patrick J. Smith", phone: "(555) 432-7891", completed: false },
      { id: 12, label: "18:00", name: "JJ A. Smith", phone: "(555) 432-7777", completed: false },
      { id: 13, label: "18:00", name: "GG A. Smith", phone: "(555) 432-7888", completed: false },
      { id: 14, label: "18:00", name: "PP A. Smith", phone: "(555) 432-9999", completed: false },
    ];


const initialState = {
  dataset: INIT_APPOINTMENT_DATA,
  nextId: INIT_APPOINTMENT_DATA.length,
}

const crudSlice = createSlice({
  name: 'crud',
  initialState: initialState,
  reducers: {
    
    addAppointment(state, action) {
      state.dataset.push({
        id: state.nextId,
        label: action.payload.label,
        name: action.payload.name ? action.payload.name : "no name entered.",
        phone: action.payload.phone ? action.payload.phone : "no phone entered.",
        completed: false
      });
      state.nextId++;   
    },

    updateAppointment(state, action) {
      const updateAppointment = state.dataset.find(
        ( appointment ) => appointment.id === action.payload.id
      );
      updateAppointment.label = action.payload.label;
      updateAppointment.name = action.payload.name ? action.payload.name : "no name entered.";
      updateAppointment.phone = action.payload.phone ? action.payload.phone : "no phone entered."
    },

    deleteAppointment(state, action) {
      const deleteAppointment = state.dataset.find(
        ( appointment ) => appointment.id === action.payload
      );
      deleteAppointment.completed = true;

    },
  }
});

export const crudActions = crudSlice.actions;

export default crudSlice.reducer;