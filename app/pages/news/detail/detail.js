'use strict';

import { html2json } from '../../../utils/html2wxml/html2wxml';//按实际工程目录结构

Page({
  data: {
    innerHTML: ''
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    // url: "http:\/\/mini.eastday.com\/mobile\/" + options.id + ".html?qid=juheshuju"

    var that = this;
    wx.request({
      url: 'http://mini.eastday.com/mobile/170105162152044.html',
      data: {},
      method: 'GET',
      success: function (res) {
        console.info(res);


        var bb = '<body><input type="hidden" value="shehui" id="newstype"> <input id="datetime_forapp" type="hidden" value="2017-01-05 16:21"><article id="J_article" class="J-article article"><div id="title"><div class="article-title"><h1 class="title">当朋友面吵架男生觉得丢脸 拿刀刺死女友还发朋友圈</h1></div><div class="article-src-time"><span class="src">2017-01-05 16:21&nbsp;&nbsp;&nbsp;&nbsp;来源：中国青年网</span></div></div><div id="content" class="J-article-content article-content"><p class="section txt">社交网站已经变成大家分享生活的常见工具，然而浙江省却有一个变态男子，选择在网上分享自己杀害女友的完整过程。这位32岁的男子拿刀刺伤女友后，不但冷眼看她慢慢流血而死，还把照片和影片发到朋友群组里，残酷手法令人骇然。(照片含血腥暴力内容，慎入)</p><p class="section txt">▼这名犯案的男子名为陈和西，与39岁的陈姓女友住在浙江省温州市。去年4月，他怀疑女友劈腿，在朋友面前与她爆发口角争执，事后陈男觉得很没面子，回家竟然拿刀狠刺女友!</p><figure class="section img"><a class="img-wrap" style="padding-bottom:138.78%" href="https://00.imgmini.eastday.com/mobile/20170105/20170105162152_3beee57b549637ae991e8cf576fdb847_1.jpeg" data-size="312x433"><img width="100%" alt="" src="https://00.imgmini.eastday.com/mobile/20170105/20170105162152_3beee57b549637ae991e8cf576fdb847_1.jpeg" data-weight="312" data-width="312" data-height="433"></a></figure><p class="section txt">▼陈男拿刀狠刺女友的大腿，陈女则不断求饶，哀求他把自己送医，但陈男却毫不留情，屡屡拒绝，放任陈女持续失血。最后陈女无力哭诉：我好冷，快救我。陈男竟说：我不敢打，我怕坐牢。</p><figure class="section img"><a class="img-wrap" style="padding-bottom:113.36%" href="https://00.imgmini.eastday.com/mobile/20170105/20170105162152_3beee57b549637ae991e8cf576fdb847_2.jpeg" data-size="277x314"><img width="100%" alt="" src="https://00.imgmini.eastday.com/mobile/20170105/20170105162152_3beee57b549637ae991e8cf576fdb847_2.jpeg" data-weight="277" data-width="277" data-height="314"></a></figure><figure class="section img"><a class="img-wrap" style="padding-bottom:158.3%" href="https://00.imgmini.eastday.com/mobile/20170105/20170105162152_3beee57b549637ae991e8cf576fdb847_3.jpeg" data-size="283x448"><img width="100%" alt="" src="https://00.imgmini.eastday.com/mobile/20170105/20170105162152_3beee57b549637ae991e8cf576fdb847_3.jpeg" data-weight="283" data-width="283" data-height="448"></a></figure><p class="section txt">▼眼看女友脸色越来越苍白，陈男似乎也知道她命不久矣;竟然把行凶的照片和影片放上朋友圈，陆续留言道：我把我新(心)爱的女人杀了、我杀了贱货，令人震撼!</p><figure class="section img"><a class="img-wrap" style="padding-bottom:118.25%" href="https://00.imgmini.eastday.com/mobile/20170105/20170105162152_52695d2466c3cec5ef6cc2f0300091df_4.jpeg" data-size="515x609"><img width="100%" alt="" src="https://00.imgmini.eastday.com/mobile/20170105/20170105162152_52695d2466c3cec5ef6cc2f0300091df_4.jpeg" data-weight="515" data-width="515" data-height="609"></a></figure><p class="section txt">直到次日中午，陈男才选择报警自首，并向警方坦承是为了「家庭琐事」才杀人。根据警方调查，陈男行凶前就喝了大量的酒，意识模糊;另外邻居则指出陈男似乎患有精神疾病，脾气相当暴躁，「在小区见过他，但都是点头之交，也不爱笑，听别人说他精神有些不正常。」</p><p class="section txt">事实上，陈男跟女友在前年认识，已经同居大半年。陈男自己本身另有妻子，但分居多年，近日本来打算诉请离婚，并迎娶女友，没想到对方竟然惨死自己的刀下。</p><p class="section txt">陈男还解释说，会放上网路只是希望「给亲友看看」，让大家知道他杀了心爱的人。温州中级人民法院日前一审，判处陈男死刑缓期执行。至於陈女父母要求陈男赔偿的135万人民币，陈男表示他没有能力赔偿，法院最后酌情要求他支付25万元。</p><p class="section txt">陈男的凶行令人发指，这并不能归咎於一时冲动，因为过程中陈男有很多把女友送医的机会，但他还是选择看她「放血」至死，显然已经冷血到了极点。希望他最后能获得应有的制裁，千万不要让女友枉死了!</p></div></article><div id="news_check"><div id="J_interest_news" class="interest-news"></div><div id="J_hot_news" class="hot-news"></div></div><div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"><div class="pswp__bg"></div><div class="pswp__scroll-wrap"><div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui pswp__ui--hidden"><div class="pswp__top-bar"><div class="pswp__counter"></div><div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div></div><div class="pswp__caption"><div class="pswp__caption__center"></div></div></div></div></div></body>'








        console.info(html2json(bb).child);
        that.setData({
          innerHTML: html2json(bb).child
        });
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })

  }
});