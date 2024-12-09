import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";
import './index.css'
import App from './App.jsx'
import Reducer from "./Component/Reducer"
import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({
  reducer: {
      userlist:Reducer
  }
})

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <Provider store={store}>
    <App />
   </Provider>
  </BrowserRouter>,
)
