import { Provider } from 'react-redux';
// import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { Normalize } from 'styled-normalize';
import ReactDOM from 'react-dom';
import store from './store';
import { load_defaults, get_all_projects } from './api';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <script src="./src/p5.sound.js"></script>
    <Provider store={store}>
        <Normalize />
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

load_defaults();  
reportWebVitals();


// reportWebVitals();

// const [isLoading, setLoading] = useState(true);

// useEffect(() => {
//   getDefaults();
// }, []);

// const getDefaults = () => {
//   load_defaults.then((response) => {
//     setLoading(false);
//   });
// };


// if (isLoading) {
//   return <div><p style={{ fontSize: '120px' }}>Loading...</p></div>;
// }
// return (
//   ReactDOM.render(
//     <React.StrictMode>
//       <Provider store={store}>
//           <Normalize />
//           <App />
//       </Provider>
//     </React.StrictMode>,
//     document.getElementById('root')
//   )
// );
