import axios from 'axios';

import { GET_LEADS } from './types';

// GET LEADS
export const getLeads = () => dispatch => {
  axios.get('http://127.0.0.1:8000/api/leads/')
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      })
    }).catch(err => console.log(err));
}