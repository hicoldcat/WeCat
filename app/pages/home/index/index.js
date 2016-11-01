Page({
  data: {
    topstories: [],       //照片墙
    indicatorDots: true,   //是否显示面板指示点
    autoplay: true,        //是否自动播放
    interval: 3000,         //自动切换时间间隔
    duration: 1000,         //滑动动画时长
    storieslist:[]         //首页故事列表
  },

  onLoad:function(){
    var that = this;
     wx.request({
      url: 'http://news-at.zhihu.com/api/4/news/latest',
      headers: {
        'Content-Type': 'application/json'
      },
      success (res) {
        console.info(res);
        that.setData({
          storieslist:res.data.stories,
          topstories:res.data.top_stories
        })
      }
    })
  }
  
})