import axios from "axios";

import { SERVER_BASE_URL, SECRET_KEY } from "../utils/constant";

const CredAPI = {

login: async (phone) => {
  try {
    const response = await axios.post(
      'https://credaccess.web.app/auth/generateOtp',
      JSON.stringify({ "phone": phone }),
      {
        headers: {'credaccess-secret-key': `${SECRET_KEY}`, 
				'Content-Type': 'application/json'
        },
      }
    );
    return response;
  } catch (error) {
    return error.response;
  }
},
  verify: async (otp) => {
    const user: any = JSON.parse(window.localStorage.getItem("user"));
    const token =user?.token;
    try {
      const response = await axios.post(
        'https://credaccess.web.app/auth/verifyOtp',
        JSON.stringify({  "token": token,
        "otp": otp }),
        {
          headers: {
            'credaccess-secret-key': `${SECRET_KEY}`, 
				    'Content-Type': 'application/json'
          },
        }
      );
      return response;
    } catch (error) {
      return error.response;
    }
  },
  register: async (first_name, last_name, email) => {
    const user: any = JSON.parse(window.localStorage.getItem("user"));
    const access_token =user?.access_token;
    try {
      const response = await axios.post(
        `${SERVER_BASE_URL}/profile`,
        JSON.stringify({ "first_name": first_name,
        "last_name": last_name,
        "email": email
      }),
        {
          headers: {
            'credaccess-secret-key': `${SECRET_KEY}`, 
				    'credaccess-access-token': access_token, 
				    'Content-Type': 'application/json'
          },
        }
      );
      return response;
    } catch (error) {
      return error.response;
    }
  },
  
  burn: async () => {
    const user: any = JSON.parse(window.localStorage.getItem("user"));
    const access_token =user?.access_token;
    try {
      const response = await axios.post(
        `${SERVER_BASE_URL}/profile/coins/burn`,
        JSON.stringify({ "coins": 1000
       }),
        {
          headers: {   
				    'credaccess-access-token': access_token, 
            'credaccess-secret-key': `${SECRET_KEY}`,
				    'Content-Type': 'application/json'
          },
        }
      );
      return response;
    } catch (error) {
      return error.response;
    }
  },


  profile: async () => {
    const user: any = JSON.parse(window.localStorage.getItem("user"));
    const access_token =user?.access_token;
    try {
      const response = axios.get(`${SERVER_BASE_URL}/profile`, {
          headers: {     		    
            'credaccess-secret-key': `${SECRET_KEY}`,
            'credaccess-access-token': access_token, 	    
          },
        });
      return response;
    } catch (error) {
      return error.response;
    }
  },

 
};

export default CredAPI;
