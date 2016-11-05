app.constant("ApiUrl", "https://gocostudent.adamvig.com/api/").
constant("ApiVersion", "~0").
constant("RequestTimeout", {
  "default": 25000
}).
constant("AppInfoRefreshTime", 300000).
constant("ErrorMessages", {
  "timeout": "Took too long. Try again!",
  "unknown": "Something went wrong. Try again!",
  "noCredentials": "Please logout and login again."
}).
constant("DefaultSettings", {
  "loadOnLaunch": true,
  "appVersion": "2.6.0"
}).
constant("DefaultModuleSettings", {
  "info": {
    "selected": ["chapelCredits", "mealPoints"],
    "class": "one-half"
  },
  "interaction": {
    "selected": ["nextMeal"],
    "class": ""
  }
}).
constant("Modules", [
  {
    "moduleType": "info",
    "httpMethod": "post",
    "endpoint": "chapelCredits",
    "label": "CL&W Credits",
    "icon": "chapel-icon",
    "moduleClass": "blue",
    "prefix": "",
    "suffix": ""
  },
  {
    "moduleType": "info",
    "httpMethod": "post",
    "endpoint": "mealPoints",
    "label": "Mealpoints",
    "icon": "meal-points-icon",
    "moduleClass": "orange",
    "prefix": "$",
    "suffix": ""
  },
  {
    "moduleType": "info",
    "httpMethod": "post",
    "endpoint": "mealPointsPerDay",
    "label": "Mealpoints Left/Day",
    "icon": "calculator-icon",
    "moduleClass": "purple",
    "prefix": "$",
    "suffix": ""
  },
  {
    "moduleType": "info",
    "httpMethod": "get",
    "endpoint": "daysLeftInSemester",
    "label": "Days Left In Semester",
    "icon": "calendar-icon",
    "moduleClass": "mint-green",
    "prefix": "",
    "suffix": ""
  },
  {
    "moduleType": "info",
    "httpMethod": "post",
    "endpoint": "studentID",
    "label": "Student ID",
    "icon": "person-icon",
    "moduleClass": "light-red",
    "prefix": "",
    "suffix": ""
  },
  {
    "moduleType": "info",
    "httpMethod": "get",
    "endpoint": "temperature",
    "label": "Temperature",
    "icon": "thermometer-icon",
    "moduleClass": "light-teal",
    "prefix": "",
    "suffix": "℉"
  } ,
  {
    "moduleType": "interaction",
    "httpMethod": "post",
    "endpoint": "chapelEvents",
    "label": "CL&W Events",
    "icon": "bible-icon",
    "moduleClass": "light-aquamarine",
    "prefix": "",
    "suffix": ""
  },
  {
    "moduleType": "interaction",
    "httpMethod": "get",
    "endpoint": "highlandExpress",
    "label": "Highland Express",
    "icon": "highland-express-icon",
    "moduleClass": "gold",
    "prefix": "",
    "suffix": ""
  },
  {
    "moduleType": "interaction",
    "httpMethod": "get",
    "endpoint": "athleticsSchedule",
    "label": "Athletics Schedule",
    "icon": "fighting-scots-icon",
    "moduleClass": "burgundy",
    "prefix": "",
    "suffix": ""
  },
  {
    "moduleType": "interaction",
    "httpMethod": "post",
    "endpoint": "nextMeal",
    "label": "Next Meal",
    "icon": "plate-icon",
    "moduleClass": "acid-green",
    "prefix": "",
    "suffix": ""
  }
]);
