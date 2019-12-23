import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAppointmentAction } from '../actions/appointmentsActions';
import uuid from 'uuid/v4';
import { validateFormAction } from '../actions/validationActions';

const AddAppointment = () => {
    const [ pet, setPet ] = useState('');
    const [ owner, setOwner ] = useState('');
    const [ date, setDate ] = useState('');
    const [ time, setTime ] = useState('');
    const [ symptoms, setSymptoms ] = useState('');

    const dispatch = useDispatch();
    const addNewAppointment = appointment => dispatch(addAppointmentAction(appointment))
    const validateForm = error => dispatch(validateFormAction(error));

    const error = useSelector( state => state.error );

    const createAppointment = e => {
        e.preventDefault();

        if(pet.trim() === '' || owner.trim() === '' || date.trim() === '' || time.trim() === '' || symptoms.trim() === '') {
            validateForm(true);
            return;
        }

        validateForm(false);

        addNewAppointment({
            id: uuid(),
            pet,
            owner,
            date,
            time,
            symptoms

        })

        setPet('');
        setOwner('');
        setDate('');
        setTime('');
        setSymptoms('');
    }

    return (
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center mb-5">Add appointments here</h2>
                <form onSubmit={createAppointment}>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Pet name</label>
                        <div className="col-sm-8 col-lg-10">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Pet name"
                                value={pet}
                                onChange={e => setPet(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Owner name</label>
                        <div className="col-sm-8 col-lg-10">
                            <input 
                                type="text" 
                                className="form-control"  
                                placeholder="Pet owner name"
                                value={owner}
                                onChange={e => setOwner(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Date</label>
                        <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                            <input 
                                type="date" 
                                className="form-control"
                                value={date}
                                onChange={e => setDate(e.target.value)}
                            />
                        </div>                            

                        <label className="col-sm-4 col-lg-2 col-form-label">Time</label>
                        <div className="col-sm-8 col-lg-4">
                            <input 
                                type="time" 
                                className="form-control" 
                                value={time}
                                onChange={e => setTime(e.target.value)}
                            />
                        </div>
                    </div>
                    
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Symptoms</label>
                        <div className="col-sm-8 col-lg-10">
                            <textarea 
                                className="form-control"
                                value={symptoms}
                                onChange={e => setSymptoms(e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                    <div className="form-group row justify-content-end">
                        <div className="col-sm-3">
                            <button type="submit" className="btn btn-success w-100">Add</button>
                        </div>
                    </div>
                </form>
               
               { error.error ? <div className="alert alert-danger text-center p2">All fields are mandatory</div> : null }
            </div>
        </div>
    );
}
 
export default AddAppointment;