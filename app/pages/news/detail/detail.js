Page({
  data: {
    innerHTML: ""
  },
  onLoad: function (options) { 
    var that = this;
    that.setData({
      innerHTML: "http:\/\/mini.eastday.com\/mobile\/" + options.id + ".html?qid=juheshuju"
    });
    // var that = this;
    // wx.request({
    //   url: 'http://mini.eastday.com/mobile/170105162152044.html',
    //   method: 'GET',
    //   success: function (res) {
    //     console.info(res);

    //     // that.setData({
    //     //   innerHTML: html2json(bb).child
    //     // });
    //   }
    // })

  }
});