import axios from 'axios';
import auth from '../../lib/auth.js'
module.exports = {
  getProfile(){
    const token = auth.getToken();
    return axios.get('http://localhost:8080/users/profile',{
      headers:{
        Authorization:`${token}`
      }

    })
    .then((result) => {
      console.log(result);
      return result.data;
    })
    .catch((errResult) =>{
      console.log(errResult);
    });
  },

  updateProfile(profile){
    console.log(profile);
    var id = profile.id;
    const url = `http://localhost:8080/users/${id}`
    const token = auth.getToken();

    return axios.put(url,profile,{
      headers : {
        Authorization:`${token}`
      }
    })
      .then( (result) =>{
        console.log(result);
        return result.data;
      })
      .catch((errResult) =>{
        console.log(errResult);
        return errResult;
      });
  }
}