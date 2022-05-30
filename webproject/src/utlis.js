export async function  updateReputation (name, value) {
    await axios.put("http://localhost:5000/users/profile/reputation", {
      username: name, 
      reputation: value,
    }, {headers: {
      'Authorization': localStorage.getItem("token") 
    }}).then(res => console.log(res))
    .catch(err => console.log(err));
  }