const baseUrlTemp = "https://movies-api-siit.herokuapp.com"; // make common base url

class Auth {
  login(username, password) {
    let url = `${baseUrlTemp}/auth/login`;
    let data = {
      username: username,
      password: password
    };

    return fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json());
  }

  logout() {
    return fetch(baseUrlTemp + "/auth/logout", {
      method: "GET",
      headers: {
        "x-Auth-Token": localStorage.getItem("accessToken")
      }
    }).then(response => response.json());
  }

  register(username, password) {
    let data = {
      username: username,
      password: password
    };

    return fetch(baseUrlTemp + "/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json());
  }
}
