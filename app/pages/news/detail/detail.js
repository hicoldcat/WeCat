Page({
  data:{
    url:""
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
     var that = this;
    this.setData({
      url:"http:\/\/mini.eastday.com\/mobile\/"+options.id+".html?qid=juheshuju"
    });
  }
})