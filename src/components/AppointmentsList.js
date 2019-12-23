import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteAppointmentAction } from "../actions/appointmentsActions";

const AppointmentList = () => {
    const appointments = useSelector(state => state.appointments);

    const dispatch = useDispatch();

    const message = Object.keys(appointments.appointments).length === 0 ? 'No appointments to show' : 'Manage your appointments here'

	return (
		<div className="card mt-5">
			<div className="card-body">
				<h2 className="card-title text-center">
					{message}
				</h2>

				<div className="lista-citas">
					{appointments.appointments.map(appointment => (
						<div className="media mt-3" key={appointment.id}>
							<div className="media-body">
								<h3 className="mt-0">{appointment.pet}</h3>
								<p className="card-text">
									<span>Owner name: </span>
                                    {appointment.owner}
								</p>
								<p className="card-text">
									<span>Date: </span>
                                    {appointment.date}
								</p>
								<p className="card-text">
									<span>Time: </span>
                                    {appointment.time}
								</p>
								<p className="card-text">
									<span>Symptoms: </span> <br />
                                    {appointment.symptoms}
								</p>
                                <button className="btn btn-danger" 
                                    onClick={ () => dispatch(deleteAppointmentAction(appointment.id)) }
                                >
									Delete &times;
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default AppointmentList;
