import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AddAppointment from './components/AddAppointment';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
          <header>
            <h1 className="text-center">
              Veterinary patient administrator
            </h1>
          </header>

          <div className="row mt-3">
            <div className="col-md-6">
              <AddAppointment 
                
              />
            </div>

            <div className="col-md-6">
              list here
            </div>
          </div>
      </div>
    </Provider>
  );
}

export default App;
