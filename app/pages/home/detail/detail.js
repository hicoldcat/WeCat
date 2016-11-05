Page({
  data: {
    article:""
  },
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://v.juhe.cn/weixin/redirect',
      data: {
        wid:options.id
      },
      method: 'GET',
      success: function(res){
        console.info(res.data);
      }
    })

  },
  onReady: function () {
    // 页面渲染完成
    
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})