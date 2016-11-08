Page({
  data: {
    topTab: [{ tab: "头条", newstype: "top", tabclass: "itemChecked" },
    { tab: "社会", newstype: "shehui", tabclass: "item" },
    { tab: "国内", newstype: "guonei", tabclass: "item" },
    { tab: "国际", newstype: "guoji", tabclass: "item" },
    { tab: "娱乐", newstype: "yule", tabclass: "item" },
    { tab: "体育", newstype: "tiyu", tabclass: "item" },
    { tab: "军事", newstype: "junshi", tabclass: "item" },
    { tab: "科技", newstype: "keji", tabclass: "item" },
    { tab: "财经", newstype: "caijing", tabclass: "item" },
    { tab: "时尚", newstype: "shishang", tabclass: "item" },
    ],
    currentType: "top",
    newsList: []
  },
  onLoad: function (options) {
    this.getNewsByType();
  },
  getNewsByType: function (event) {
    var that = this;
    wx.showToast({
      title: '正在加载中',
      icon: 'loading',
      duration: 2000
    })
    if (event) {
      if (event.target.dataset.type != that.data.currentType) {
        var param = {};
        var currentIndex = "topTab[" + that.returnIndex(that.data.currentType) + "].tabclass";
        var clickIndex = "topTab[" + that.returnIndex(event.target.dataset.type) + "].tabclass";

        param[currentIndex] = "item";
        param[clickIndex] = "itemChecked";
        param["currentType"] = event.target.dataset.type;

        that.setData(param);
      }
    }

    wx.request({
      url: 'http://v.juhe.cn/toutiao/index',
      data: {
        type: that.data.currentType,
        key: "ab31a2487c139a1cdbd11c07eb468685"
      },
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET',
      success: function (res) {
        that.setData({
          newsList: res.data.result.data
        });
         wx.hideToast();
      }
    })

  },
  returnIndex: function (data) {
    var that = this;
    var index;
    console.info(data);
    for (var i = 0; i < that.data.topTab.length; i++) {
      if (that.data.topTab[i].newstype == data) {
        index = i;
      }
    };
    return parseInt(index);
  }
})