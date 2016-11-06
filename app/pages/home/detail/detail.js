Page({
  data: {
    url:""
  },
  onLoad: function (options) {
    var that = this;
    this.setData({
      url:"http://v.juhe.cn/weixin/redirect?wid="+options.id
    });
    console.info(this.data.url);
    // wx.request({
    //   url: 'http://v.juhe.cn/weixin/redirect',
    //   data: {
    //     wid:options.id
    //   },
    //   method: 'GET',
    //   success: function(res){
    //     console.info(res.data);
    //   }
    // })

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