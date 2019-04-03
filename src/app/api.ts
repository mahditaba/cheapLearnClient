import * as $ from 'jquery';

export let Api = {

  createUser: (name, password, confirmPassword, email, responseFunc) => {
    $.ajax({
      type: "POST",
      url: "/create-user",
      data: {
        name: name,
        password: password,
        confirmPassword: confirmPassword,
        email: email
      },
      success: function (response) {
        responseFunc(response)
      }
    });
  },

  login: (email, password, responseFunc) => {
    $.ajax({
      type: "POST",
      url: "/user-method-login",
      data: {
        email: email,
        password: password,
      },
      success: function (response) {
        responseFunc(response)
      }
    });
  },

  getCourses: (responseFunc) => {
    $.ajax({
      type: "GET",
      url: "/list-course",
      success: function (response) {
        responseFunc(JSON.parse(response))
      }
    });
  }
}