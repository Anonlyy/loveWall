// pages/user-comment/user-comment.js
var app = getApp();
const AV = require('../../libs/av-weapp-min.js');
var Lovelist = AV.Object.extend('Lovelist');
var getList = function (_that) {
  var query = new AV.Query('Lovelist');
  AV.Object.createWithoutData('Lovelist', _that.data.userInfo.nickname).fetch().then(function (products) {
    _that.setData({
      commentList:products.attributes.results
    });
    console.log(_that.data.commentList);
  }).catch(function (error) {
    alert(JSON.stringify(error));
  });
}
Page({
  data:{
    userInfo:"",
    commentList:[
      {
        commentText:"寒假没有回家在外打工的同学们要注意安全照顾好自己~",
        applaudNum:128,
        commentNum:4,
        newsNum:2,
        imgSrc:"../../image/comment-img.jpg",
      },
      {
        commentText:"回味园的外卖小哥，你的声音好好听啊，好温柔啊，长得~",
        applaudNum:18,
        commentNum:12,
        newsNum:3,
        imgSrc:"../../image/comment-img.jpg",
      },
      {
        commentText:"寒假没有回家在外打工的同学们要注意安全照顾好自己~",
        applaudNum:128,
        commentNum:4,
        newsNum:2,
        imgSrc:"../../image/comment-img.jpg",
      },
      {
        commentText:"新美味的外卖小哥，你的声音好好听啊，好温柔啊，长得~",
        applaudNum:28,
        commentNum:24,
        newsNum:5,
        imgSrc:"../../image/comment-img2.jpg",
      },
      {
        commentText:"新美味的外卖小哥，你的声音好好听啊，好温柔啊，长得~",
        applaudNum:28,
        commentNum:24,
        newsNum:5,
        imgSrc:"../../image/comment-img2.jpg",
      },
      {
        commentText:"新美味的外卖小哥，你的声音好好听啊，好温柔啊，长得~",
        applaudNum:28,
        commentNum:24,
        newsNum:5,
        imgSrc:"../../image/comment-img2.jpg",
      },
      {
        commentText:"新美味的外卖小哥，你的声音好好听啊，好温柔啊，长得~",
        applaudNum:28,
        commentNum:24,
        newsNum:5,
        imgSrc:"../../image/comment-img2.jpg",
      }
    ]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
    var _that = this;
    app.getUserInfo(function (userInfo) {
      //更新数据
      _that.setData({
        userInfo: userInfo
      });
    });
    getList(this);
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  goDetails:function (e) {
    var objId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: "../loveWall-details/loveWall-details?objId=" + objId
    })
  },
})