export const getStateStorage = () => {
    const storedAppointments = localStorage.getItem('appointments');

    if(storedAppointments === null) {
        return undefined;
    }

    return JSON.parse(storedAppointments);
}

export const saveStateStorage = state => {
    const appointmentsState = JSON.stringify(state);
    localStorage.setItem('appointments', appointmentsState);
}