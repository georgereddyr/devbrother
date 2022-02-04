/* eslint-disable no-unused-vars */
import React from "react";

const axios = require("axios");
const BASE_URL = "some url";

export default function Api() {

  const registerUser = async () => {
    await axios
      .post(`${BASE_URL}`, )
      .then(function (response) {
        console.log(response);
        console.log("User successfully resigtered");
    })
      .catch(function (error) {
        console.log(error);
        console.log("Somethin went wrong");
    });
  };

}