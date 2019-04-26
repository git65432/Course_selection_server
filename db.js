var Mock = require('mockjs');

module.exports = {
  register: Mock.mock({
    "error": 0,
    "message": "success",
    "result": {
      "err": 0,
      "mes":"注册成功"
    }
  }),
  login: Mock.mock({
    "error": 0,
    "message": "success",
    "result": {
      "err": 0,
      "mes":"登录成功",
      "id|1-100": 100,
      "teacher|1-2":true,
      "name":"@name",
      
    }
  })
};