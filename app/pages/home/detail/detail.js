Page({
  data: {
    content:""
  },
  onLoad: function (options) {
    var that = this;
    console.log(options);
    wx.request({
      url: "http://news-at.zhihu.com/api/4/news/" + options.id,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data.body);
         that.setData({
          content:res.data.body
        });

      },
      fail:function (res){
        console.log(res);
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