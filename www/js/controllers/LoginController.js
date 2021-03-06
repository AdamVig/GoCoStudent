app.controller("LoginController", ["$state", "$q", "$timeout", "$filter", "DataService", "DbFactory", function ($state, $q, $timeout, $filter, DataService, DbFactory) {

  var login = this;
  var loginCheckTimeout = 16000;
  login.user = null;
  login.status = false;
  login.userCredentials = {"username": "", "password": ""};
  var filteredCredentials = {"username": "", "password": ""};

  /* Process credentials, create user in database, redirect to next view */
  login.loginUser = function () {

    filteredCredentials = {
      "username": $filter("username")(login.userCredentials.username),
      "password": $filter("password")(login.userCredentials.password, "encode")
    };

    checkLogin()
      .then(function (response) {
        if (response.data.data === true) {
          return DataService
            .get("user/" + filteredCredentials.username,
                 filteredCredentials.username)
            .catch(function (response) {
              if (response.status === 404) {
                return DataService
                  .post("user/" + filteredCredentials.username,
                        filteredCredentials)
                  .then(function () {
                    return DataService.get(
                      "user/" + filteredCredentials.username,
                      filteredCredentials.username);
                  });
              }
            });
        }
      })
      .then(function (response) {
        login.user = response.data.data;

        DbFactory.saveCredentials(filteredCredentials.username,
                                  filteredCredentials.password);
        if (login.user.hasOwnProperty("privacyPolicy")) {
          $state.go("home");
        } else {
          $state.go("privacyPolicy", {user: login.user});
        }
    });
  };

  // Check if user login is valid or not
  function checkLogin() {
    login.status = "status-loading";

    return DataService.post("checklogin",
        filteredCredentials,
        loginCheckTimeout).
    success(function () {
      login.status = false;
    }).
    error(function (response, status) {
      if (status === 401) {
        login.status = "status-invalid";
        login.userCredentials.password = ""; // Reset password
      } else {
        $state.go("home");
      }
    });
  }
}]);
