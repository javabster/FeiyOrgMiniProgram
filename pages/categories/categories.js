// pages/categories/categories.js
var app = getApp();
var catKey = 12;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    key: null,
    EdSrc: '../../images/Education.png',
    ComSrc: '../../images/Community.jpg',
    EnvSrc: '../../images/Environment.png',
    FshnSrc: '../../images/Fashion.jpg',
    HlthSrc: '../../images/Health.jpg', 
    FdSrc: '../../images/Food.png',
    WtSrc: '../../images/Waste.png',
    AllSrc: '../../images/AllCategories.png',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('on load:' + this.data.key)
  },
  
  onTap: function(event) {
    app.globalData.categoryKey = event.target.dataset.key
    console.log(event);
    
    wx.navigateTo({
      url: '../organisation/organisation',
    })
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
  
  },



})