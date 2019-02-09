# language: zh-CN
功能: 显式等待与隐式等待
<剧本描述>

  场景: 显式等待
    假如...进入网址 "https://autowebtest.github.io/myself/"
    当...点击导航栏
    那么...进入导航页面

  场景: 隐式等待
    假如...进入网址 "https://autowebtest.github.io/myself/"
    当...点击 导航栏
    那么...进入导航页面