var App = getApp();
Page({
  data: {
    userlogo: '',
    userNameEn:"",
    userNameCh:"冷猫先森",
    contentEn: "Do something funny !",
    contentCh:"做有趣的事！",
    webAdd:'my web : www.hicoldcat.com \n',
    email:'my email : hicoldcat@foxmail.com \n'
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;

    wx.login({
      success: function () {
        wx.getUserInfo({
          success: function (res) {
            console.info(res.userInfo);
            that.setData({
              userlogo: res.userInfo.avatarUrl,
              userNameEn:res.userInfo.nickName
            });
          }
        })
      }
    });

  }
})