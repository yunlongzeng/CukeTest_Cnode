# language: zh-CN
功能: 登录模块测试
登录模块

  场景大纲: 进入登录页面,校验页面跳转是否正确
    假如浏览到搜索网站 "<url>"
    当...点击登录按钮
    那么...进入登录页面
    例子: 
      | url                        |
      | http://39.107.96.138:3000/ |

  场景大纲: 登录场景测试
    假如...直接进入登录页面 "http://39.107.96.138:3000/signin"
    当...输入用户名 "<username>"
    当...输入密码 "<password>"
    当...点击登录的按钮
    假如...结果为 "<result>",信息提示应为 "<message>"
    例子: 
      | username | password | message  | result |
      | user1    | 123456   | user1    | True   |
      | user1    |          | 信息不完整。   | False  |
      | user1    | 12121    | 用户名或密码错误 | False  |
      |          | 123456   | 信息不完整。   | False  |
      | 1212     | 1212     | 用户名或密码错误 | False  |
      |          |          | 信息不完整。   | False  |