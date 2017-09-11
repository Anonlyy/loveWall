const AV = require('../../libs/av-weapp-min.js');
var Product = AV.Object.extend('Product');
Page({
    data: {
        tempFilePaths: "",
        product: [],
    },
    onReady: function () {
        // LeanCloud - 查询
        var _that = this;
        var query = new AV.Query('Product');
        query.find().then(function (products) {
            _that.setData({
                product:products
            });
        }).catch(function (error) {
            alert(JSON.stringify(error));
        });
        console.log(_that.data.product)
    },
    chooseImg: function () {
        var _this = this;
        //上传照片
        /* wx.chooseImage({
         count: 9, // 默认9
         sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
         sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
         success: function (res) {
         // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
         _this.setData({
         tempFilePaths: res.tempFilePaths
         })
         var tempFilePath = res.tempFilePaths[0];
         new AV.File('file-name', {
         blob: {
         uri: tempFilePath,
         },
         }).save().then(
         function (file) {
         console.log(file.url());
         _this.setData({
         tempFilePaths: file.url()
         })
         }).catch(console.error);
         }
         })
         */
        //上传照片
        var title = "键盘", price = "$128", description = "极好的机械键盘";
        var product = new Product();
        product.set('title', title);
        product.set('price', price);
        product.set('description', description);
        product.save().then(function () {
        }, function (error) {
            alert(JSON.stringify(error));
        });
    }
})