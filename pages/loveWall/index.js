var app = getApp();
const AV = require('../../libs/av-weapp-min.js');
var Lovelist = AV.Object.extend('Lovelist');
var getList = function (_that) {
	var query = new AV.Query('Lovelist');
	query.descending('createdAt').find().then(function (products) {
		_that.setData({
			contentList:products
		});
		console.log(this.data.contentList);
	}).catch(function (error) {
		alert(JSON.stringify(error));
	});
}
Page({
	data: {
		tabArray: [
			'今日表白墙',
			'往期表白墙',
			'表白攻略'],
		currentTab: 0,
		currentY: 0,
		pageStartY: 0,
		pageEndY: 0,
		isFixed: false,
		contentList: [
			// {
			// 	headImg: "../../image/content-headImg.png",
			// 	userName: "厉害了我的哥",
			// 	time: "3小时前",
			// 	contentText: "寒假没有回家在外打工的同学们要注意安全照顾好自己~",
			// 	applaudNum: 128,
			// 	commentNum: 4,
			// 	imgSrc: "../../image/comment-img.jpg",
			// },
		],
		//轮播图
		imgUrls: [
			'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
			'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
			'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
		],
		indicatorDots: true,
		autoplay: false,
		interval: 5000,
		duration: 800,
		isBtnShow: false,
		scrollTop:false,
		isRefresh:false
	},
	onLoad:function () {
		getList(this);
	},
	onShow:function () {
		getList(this);
	},
	onReady:function () {

	},
	bindChange: function (e) {
		var that = this;
		that.setData({currentTab: e.detail.current});
	},
	goDetails:function (e) {
		var objId = e.currentTarget.dataset.id;
		wx.navigateTo({
			url: "../loveWall-details/loveWall-details?objId=" + objId
		})
	},
	swichNav: function (e) {
		var that = this;
		// console.log(e.target)
		if (this.data.currentTab === e.target.dataset.current) {
			return false;
		} else {
			that.setData({
				currentTab: e.target.dataset.current
			})
		}
	},
	scrollstart: function (e) {
		var _that = this;
		_that.setData({
			pageStartY: e.touches[0].pageY,
		});
	},
	scrollend: function (e) {
		var _that = this;
		// console.log(e.changedTouches[0].pageY)
		if (_that.data.pageStartY-20 > e.changedTouches[0].pageY) { //向下
			_that.setData({
				isFixed: true,
				isBtnShow: true,
			});
		}
	},
	backTop: function (e) {
		var _that = this;
		// console.log(e.changedTouches[0].pageY)
		_that.setData({
			isFixed: false,
			isBtnShow: false,
			scrollTop:0,
		});
	},
	goRelease:function () {
		wx.navigateTo({
			url: '/pages/release/release'
		})
	}
})