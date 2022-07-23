
import { useState } from "react";
import classes from "./AppRedux.module.css";
import AppointmentChart from "./components/Chart/AppointmentChart";
import AppointmentDetails from "./components/Details/AppointmentDetails";
import AddNewButton from "./components/AddNewAppointment/AddNewButton";
import AddNewForm from "./components/AddNewAppointment/AddNewForm";
import EditForm from "./components/EditAppointment/EditForm";
import Warning from "./components/Warning/Warning";

import { useSelector, useDispatch } from 'react-redux';
import {authActions} from './store/authorization-slice';
import {crudActions} from './store/crud-slice';


const AppRedux = () => {

  // prettier-ignore
  const [selectedTimeslot, setSelectedTimeslot] = useState("08:00");
  const [fallbackTimeslot, setFallbackTimeslot] = useState("08:00");
  const [showAddNewForm, setShowAddNewForm] = useState(false);
  const [showDetailsForm, setShowDetailsForm] = useState(false);
  const [fallbackDetails, setFallbackDetails] = useState(false);
  const [editRequestId, setEditRequestId] = useState("");

  const hasAuthorization = useSelector(state => state.auth.hasAuthorization);
  const authWarning = useSelector(state => state.auth.authWarning );
  const dispatch = useDispatch();

  const handleClickAddNew = () => {

    if (!hasAuthorization){
      dispatch(authActions.warningAuthorization('ADD'));
      return;
    }
    setShowAddNewForm(true);
    setFallbackDetails(showDetailsForm);
    setShowDetailsForm(false);
    setFallbackTimeslot(selectedTimeslot);
  };

  const handleHideDetails = () => {
    setShowDetailsForm(false);
  };

  const handleClickCancel = () => {
    setShowAddNewForm(false);
    setShowDetailsForm(fallbackDetails);
    setSelectedTimeslot(fallbackTimeslot);
  };

  const handleTimeslotUpdate = (newTime) => {
    setSelectedTimeslot(newTime);
  };

  const handleAddNewData = (newData) => {
    dispatch(crudActions.addAppointment(newData));
    setShowAddNewForm(false);
    setSelectedTimeslot(newData.label);
    setShowDetailsForm(fallbackDetails);
  };

  const handleSelectTime = (barSelectTime) => {
    setShowAddNewForm(false);
    setSelectedTimeslot(barSelectTime);
    setShowDetailsForm(true);
  };

  const handleRequestToEdit = (editId) => {
    setEditRequestId(editId);
  };

  const handleEditCancel = () => {
    setEditRequestId("");
  };

  const handleEditUpdate = (updatedAppointment) => {
    dispatch(crudActions.updateAppointment(updatedAppointment));
    setEditRequestId("");
  };

  const handleDetailDelete = (deleteId) => {
    dispatch(crudActions.deleteAppointment(deleteId));
  };

  const dataset = useSelector(state => state.crud.dataset);

  const detailedAppointments = dataset.filter((appointment) => {
    return appointment.label === selectedTimeslot && !appointment.completed;
  });

  const incompleteAppointments = dataset.filter((appointment) => {
    return !appointment.completed;
  });

  const editRequestAppointments = dataset.filter((appointment) => {
    return appointment.id === editRequestId;
  });

  const showEditForm = editRequestAppointments.length !== 0;

  return (
    <div className={classes.div_static_plate}>
      
      <AppointmentChart
        appointments={incompleteAppointments}
        onSelectTime={handleSelectTime}
      />

      {showEditForm && (
        <EditForm
          appointments={editRequestAppointments}
          onEditUpdate={handleEditUpdate}
          onEditCancel={handleEditCancel}
        />
      )}

      {!showAddNewForm && !showEditForm && (
        <AddNewButton onAddNewClick={handleClickAddNew} />
      )}

      {( authWarning !=='' ) && <Warning /> }
      
      {showAddNewForm && !showEditForm && (
        <AddNewForm
          selectedTimeslot={selectedTimeslot}
          onAddNewData={handleAddNewData}
          onClickCancel={handleClickCancel}
          onTimeslotUpdate={handleTimeslotUpdate}
        />
      )}

      {showDetailsForm && !showEditForm && (
        <AppointmentDetails
          appointments={detailedAppointments}
          onDetailDelete={handleDetailDelete}
          onDetailUpdate={handleRequestToEdit}
          onHideDetails={handleHideDetails}
        />
      )}
    </div>
  );
};

export default AppRedux;
