//获取应用实例
var app = getApp();
const AV = require('../../libs/av-weapp-min.js');
var toolTip = require('../../libs/ToolTip/toolTip.js');
var productSrc = [];
Page({
	data: {
		focus: false,
		title: "",
		content: "",
		isCheck: false,
		productSrc: [],
		isShow: false,
		userInfo: {},
		isRefresh: false,
		textareaContent: "",
		tempFilePaths: {}
	},
	onLoad: function () {
		toolTip.init(this);
		//获取个人信息
		var _that = this;
		_that.data.productSrc = [];
		productSrc = [];
		//调用应用实例的方法获取全局数据
		app.getUserInfo(function (userInfo) {
			//更新数据
			_that.setData({
				userInfo: userInfo
			});
		});
	},
	titleEventFunc: function (e) {
		if (e.detail && e.detail.value) {
			this.data.title = e.detail.value;
		}
	},
	contentEventFunc: function (e) {
		if (e.detail && e.detail.value) {
			this.data.content = e.detail.value;
		}
	},
	isNameEventFunc: function (e) {
		this.data.isCheck = e.detail.value;
	},
	formSubmit: function (e) {
		var _that = this;
		var titleVal = _that.data.title;
		var contentVal = _that.data.content;
		var isChecked = _that.data.isCheck;
		var userName, headImg;
		if (titleVal === "" || titleVal.length <= 0) {
			toolTip.showToolTip('error', '请填写标题', 2000);
			return;
		}
		else if (contentVal === "" || contentVal.length < 12) {
			toolTip.showToolTip('error', '表白内容为空或字数不超过12个字', 2000);
			return;
		}
		else { //表白内容没有问题可以发送
			console.log('success');
			if (!isChecked) { //不匿名
				userName = _that.data.userInfo.nickName;
				headImg = _that.data.userInfo.avatarUrl;
			}
			else {
				userName = '匿名用户';
				headImg = "../../image/content-headImg.png";
			}
			wx.showToast({
				title: '表白发布中',
				icon: 'loading',
				duration: 2000,
				success: function () {
					var Lovelist = AV.Object.extend('Lovelist');
					var lovelist = new Lovelist();
					lovelist.set('title', titleVal);
					lovelist.set('content', contentVal);
					lovelist.set('isName', !isChecked);
					lovelist.set('username', userName);
					lovelist.set('headImg', headImg);
					lovelist.set('contentImg', _that.data.productSrc);
					lovelist.save().then(function () {
						wx.navigateBack();
						wx.showToast({
							title: '恭喜你,表白发布成功',
							icon: 'success',
							duration: 2000,
							mask: true,
							success: function () {
								setTimeout(function () {
									wx.hideToast();
								}, 2000);
							}
						});
					}, function (error) {
						console.log(error);
					});
				},
				fail: function () {
					wx.showToast({
						title: '抱歉,表白失败',
						icon: 'success',
						duration: 2000,
						success: function () {
						}
					});
				}
			});

			wx.navigateBack();
		}
	},
	formReset: function () {
		// var _that = this;
		// setTimeout(function () {
		// 	_that.setData({
		// 		tempFilePaths: [],
		// 		isShow:false,
		// 		textareaContent:" "
		// 	});
		// },300)
	},
	//上传图片
	uploadImg: function () {
		var _this = this;
		//上传照片
		wx.chooseImage({
			count: 9, // 默认9
			sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
			sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
			success: function (res) {
				// 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
				res.tempFilePaths.forEach(function (url, index) {
					let localFile = url;
					new AV.File('ImageSrc', {
						blob: {
							uri: localFile,
						}
					}).save().then(function (file) {
						// 文件保存成功
						productSrc.push(file.url());
						_this.setData({
							productSrc: productSrc
						});
					}, function (error) {
						// 异常处理
						console.error(error);
					});
				});
				_this.setData({
					productSrc: productSrc,
					tempFilePaths: res.tempFilePaths
				});
			}
		})
	},
	handDeleteImg: function (e) {
		var index = e.currentTarget.dataset.index;
		productSrc.splice(index, 1);
		this.setData({
			productSrc: productSrc,
		});
	}
})
