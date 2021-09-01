import axios from "axios";
import { SECRET_KEY } from "./constant";
import useSWR from "swr";
import storage from "./storage";


const updateOptions = () => {
  if (typeof window === "undefined") return {};

  if (window.localStorage.user === "undefined") return {};

  if (Object.keys(window.localStorage.user).length === 1) return {};

  const user = JSON.parse(window.localStorage.user);

  if (!!user.access_token) {
    const user: any = JSON.parse(window.localStorage.getItem("user"));
    const access_token =user?.access_token;
    return {
      headers: {  		    
        'credaccess-secret-key': `${SECRET_KEY}`,
        'credaccess-access-token': access_token, 
      },
    };
  }
};
export default async function fetcher(url) {
  const { data } = await axios.get(url, updateOptions());
  return data;
}
