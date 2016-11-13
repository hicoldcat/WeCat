Page({
  data:{
    toolList:[]
  },
  onLoad:function(options){
      var list = [
        {src:"http://pic.qiantucdn.com/58pic/13/80/77/40C58PIC3u9_1024.jpg",title:"历史上的今天"},
        {src:"http://pic.qiantucdn.com/58pic/12/98/18/85e58PIC46t.jpg",title:"公交及路径查询"},
        {src:"http://pic.qiantucdn.com/58pic/11/47/64/64q58PICbYM.jpg",title:"星座运势"},
        {src:"http://pic.qiantucdn.com/58pic/18/11/52/58V58PICefs_1024.jpg",title:"周公解梦"},
        {src:"http://pic.qiantucdn.com/58pic/19/99/92/43y58PICgMq_1024.jpg",title:"驾照题库"},
        {src:"http://pic.qiantucdn.com/58pic/11/28/06/94n58PICS7k.jpg",title:"QQ号码测吉凶"},
        {src:"http://pic.qiantucdn.com/58pic/14/57/82/81i58PICj7N_1024.jpg",title:"长途汽车信息"},
        ];    

        this.setData({
          toolList:list
        });
  },
  onReady:function(){
    // 页面渲染完成
    
  },
  onShow:function(){
    // 页面显示
    
  },
  onHide:function(){
    // 页面隐藏
    
  },
  onUnload:function(){
    // 页面关闭
    
  }
})