// pages/organisation/organisation.js

// database category info:
// 1 = Community/inclusion
// 2 = education
// 3 = environment
// 4 = fashion 
// 5 = health 
// 6 = food
// 7 = waste 
// 8 = all categories

var categories = require('../categories/categories.js');
var app = getApp();
const AV = require('../../utils/av-weapp-min.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    key: null,
    array: [{name: '', 
             description: '',
             logo: '',
             background: ''}, 
            ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.setData({ 
       key: app.globalData.categoryKey
     })

    console.log("key: " + this.data.key)  

    var that = this;
    var orgArray = [];

    var query = new AV.Query('organisation')
    query.include('logo');
    query.find().then(function (orgs) {
      var key = that.data.key;
      orgs.forEach(function (org) {
        var cat = org.get('category');
        if (cat === key) { 
          var orgName = org.get('name');
          var orgDescription = org.get('description');
          var orgLogo = org.get('logo');
          var orgBackground = org.get('background');
          console.log('background.url', orgBackground.attributes.url);
          console.log('backgorund object', orgBackground);
    
          var orgObject = {name: orgName, description: orgDescription, logo: orgLogo.attributes.url, background: orgBackground.attributes.url};
          orgArray.push(orgObject);
          that.setData({
            'array': orgArray
          })
          }
      })
    })

    console.log(this.data.array);
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})