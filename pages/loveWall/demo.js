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
			{
				headImg: "../../image/content-headImg.png",
				userName: "厉害了我的哥",
				time: "3小时前",
				contentText: "寒假没有回家在外打工的同学们要注意安全照顾好自己~",
				applaudNum: 128,
				commentNum: 4,
				imgSrc: "../../image/comment-img.jpg",
			},
			{
				headImg: "../../image/content-headImg.png",
				userName: "厉害了我的哥",
				time: "3小时前",
				contentText: "寒假没有回家在外打工的同学们要注意安全照顾好自己~",
				applaudNum: 128,
				commentNum: 4,
				imgSrc: "../../image/comment-img.jpg",
			},
			{
				headImg: "../../image/content-headImg.png",
				userName: "厉害了我的哥",
				time: "3小时前",
				contentText: "寒假没有回家在外打工的同学们要注意安全照顾好自己~",
				applaudNum: 128,
				commentNum: 4,
				imgSrc: "../../image/comment-img.jpg",
			},
			{
				headImg: "../../image/content-headImg.png",
				userName: "厉害了我的哥",
				time: "3小时前",
				contentText: "寒假没有回家在外打工的同学们要注意安全照顾好自己~",
				applaudNum: 128,
				commentNum: 4,
				imgSrc: "../../image/comment-img.jpg",
			},
			{
				headImg: "../../image/content-headImg.png",
				userName: "厉害了我的哥",
				time: "3小时前",
				contentText: "寒假没有回家在外打工的同学们要注意安全照顾好自己~",
				applaudNum: 128,
				commentNum: 4,
				imgSrc: "../../image/comment-img.jpg",
			},
			{
				headImg: "../../image/content-headImg.png",
				userName: "厉害了我的哥",
				time: "3小时前",
				contentText: "寒假没有回家在外打工的同学们要注意安全照顾好自己~",
				applaudNum: 128,
				commentNum: 4,
				imgSrc: "../../image/comment-img.jpg",
			},
			{
				headImg: "../../image/content-headImg.png",
				userName: "厉害了我的哥",
				time: "3小时前",
				contentText: "寒假没有回家在外打工的同学们要注意安全照顾好自己~",
				applaudNum: 128,
				commentNum: 4,
				imgSrc: "../../image/comment-img.jpg",
			},
			{
				headImg: "../../image/content-headImg.png",
				userName: "厉害了我的哥",
				time: "3小时前",
				contentText: "寒假没有回家在外打工的同学们要注意安全照顾好自己~",
				applaudNum: 128,
				commentNum: 4,
				imgSrc: "../../image/comment-img.jpg",
			},
			{
				headImg: "../../image/content-headImg.png",
				userName: "厉害了我的哥",
				time: "3小时前",
				contentText: "寒假没有回家在外打工的同学们要注意安全照顾好自己~",
				applaudNum: 128,
				commentNum: 4,
				imgSrc: "../../image/comment-img.jpg",
			},
			{
				headImg: "../../image/content-headImg.png",
				userName: "厉害了我的哥",
				time: "3小时前",
				contentText: "回味园的外卖小哥，你的声音好好听啊，好温柔啊，长得~",
				applaudNum: 18,
				commentNum: 12,
				newsNum: 3,
				imgSrc: "../../image/comment-img.jpg",
			},
			{
				headImg: "../../image/content-headImg.png",
				userName: "厉害了我的哥",
				time: "3小时前",
				contentText: "寒假没有回家在外打工的同学们要注意安全照顾好自己~",
				applaudNum: 128,
				commentNum: 4,
				newsNum: 2,
				imgSrc: "../../image/comment-img.jpg",
			},
			{
				headImg: "../../image/content-headImg.png",
				userName: "厉害了我的哥",
				time: "3小时前",
				contentText: "新美味的外卖小哥，你的声音好好听啊，好温柔啊，长得~",
				applaudNum: 28,
				commentNum: 24,
				newsNum: 5,
				imgSrc: "../../image/comment-img2.jpg",
			},
			{
				headImg: "../../image/content-headImg.png",
				userName: "厉害了我的哥",
				time: "3小时前",
				contentText: "新美味的外卖小哥，你的声音好好听啊，好温柔啊，长得~",
				applaudNum: 28,
				commentNum: 24,
				newsNum: 5,
				imgSrc: "../../image/comment-img2.jpg",
			},
			{
				headImg: "../../image/content-headImg.png",
				userName: "厉害了我的哥",
				time: "3小时前",
				contentText: "新美味的外卖小哥，你的声音好好听啊，好温柔啊，长得~",
				applaudNum: 28,
				commentNum: 24,
				newsNum: 5,
				imgSrc: "../../image/comment-img2.jpg",
			},
			{
				headImg: "../../image/content-headImg.png",
				userName: "厉害了我的哥",
				time: "3小时前",
				contentText: "新美味的外卖小哥，你的声音好好听啊，好温柔啊，长得~",
				applaudNum: 28,
				commentNum: 24,
				newsNum: 5,
				imgSrc: "../../image/comment-img2.jpg",
			}
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
		var _that = this;
		var query = new AV.Query('Lovelist');
		query.find().then(function (products) {
			_that.setData({
				product:products
			});
		}).catch(function (error) {
			alert(JSON.stringify(error));
		});
		console.log(_that.data.product)
	},

	bindChange: function (e) {
		var that = this;
		that.setData({currentTab: e.detail.current});
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
})