const handle_submit = (event, user_error) => {
    event.preventDefault();
    const form_data = new FormData(event.target);
    const usr = form_data.get("username");
    const usr_password = form_data.get("user_password");

    let url = 'http://localhost:8000/signup';

    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "http://localhost:8000"
      },
      body: JSON.stringify({"username": usr ,"user_password": usr_password})
      
    };

    let status = 0;

    fetch(url, options)
      .then(res => {
        status = res.status;
        return res.json();
      })
      .then(json => {
        console.log(json);
        if(status === 201) {   
          document.cookie = `jwt=${json.token}; Max-Age=86400;`;
          user_error.value = "SUCCESS!";
          location.assign("/");
        }
        if(json.username && usr == "") {
          user_error.value = json.username;
        }
        if(json.user_password) {
          user_error.value = json.user_password;
        }
        if(json.username && json.user_password) {
          user_error.value = "Enter your username and password";
        }
      })
      .catch(err => console.log('error:' + err));
};

export default handle_submit;