// doubt 
import axios from "axios";

export const userAuth = async (userCredentials) => {

    const responese = await axios.post("/api/user/auth", userCredentials);
    console.log("this is comming from data", responese);
    return responese.data;

};
