window.addEventListener('load', function() {
  // 创建一个新的XMLHttpRequest对象
  var xhr = new XMLHttpRequest();

  // 配置一个GET请求，请求百度首页
  xhr.open('GET', 'https://beta.shijianline.cn/activity/html/olympic/info?uid=95000855&ticket=e580abd2fb4d4d78c69a3c908dafc4df&language=en', true);

  // 定义请求完成时的回调函数
  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
      // 请求成功，输出响应内容
      console.log(xhr.responseText);
    } else {
      // 请求失败
      console.error('请求失败：', xhr.status, xhr.statusText);
    }
  };

  // 处理网络错误
  xhr.onerror = function() {
    console.error('网络错误');
  };

  // 发送请求
  xhr.send();
});