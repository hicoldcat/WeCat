Page({
  data: {
    topstories: [],       //照片墙
    indicatorDots: true,   //是否显示面板指示点
    autoplay: true,        //是否自动播放
    interval: 3000,         //自动切换时间间隔
    duration: 1000,         //滑动动画时长
    storieslist: [],        //首页故事列表
    currentPage: 1,         //当前页
    totalNumbers: 20        //首页新闻条数
  },

  onLoad: function () {
    var that = this;
     wx.showToast({
      title: '正在加载中',
      icon: 'loading',
      duration: 2000
    })
    wx.request({
      url: 'http://v.juhe.cn/weixin/query',
      data: {
        pno: that.data.currentPage,
        ps: that.data.totalNumbers,
        dtype: 'json',
        key: '13127accc1a6b43e0e1be9cef3dcb870'
      },
      headers: {
        'Content-Type': 'application/json'
      },
      method: "GET",
      success(res) {
        wx.hideToast();
        let resArr = res.data.result.list;
        if (resArr.length > 5) {
          that.setData({
            topstories: resArr.slice(0, 5),
            storieslist: resArr.slice(5)
          });
        } else {
          that.setData({
            topstories: resArr
          });
        }
      }
    })
  }

})