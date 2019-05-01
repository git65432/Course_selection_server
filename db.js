var Mock = require('mockjs');
Mock.Random.extend({
  addressKf: function() {
  var addressKf = ['河北省邯郸市', '河南省登封市', '天津市西青区', '北京市昌平区']
    return this.pick(addressKf)
    }
  })
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
      "id": "@id",
      "teacher|1":true,
      "name":"@cname",
      "address":"@addressKf",
      "phone":/^1(3|4|5|7|8)\d{9}$/,
      "email":"@email",
      "nation|1":["汉","藏","蒙","维","傣","佤","朝鲜"],
      "school|1":["第一中学","第二中学","第三中学","第四中学"],
      "grade|1":["1年级","2年级","3年级"],
      "sex|1":["男","女"],
      "subject|1":[["语文","书法"],["体育","美术"]],
      "HeadPortrait":Mock.Random.image('60x60', '#4A7BF7', 'img')
    }
  })
};