// pages/info/kebiao/kebiao.js
import http from '../../../utils/axios'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      course_name: '体适能',
      newitem: [{
          avatarurl: '../../../image/icon/icon_xiaotidabiao.png'
        },
        {
          avatarurl: '../../../image/icon/icon_xiaotidabiao.png'
        },
      ]
    }, {
      course_name: '体适能',
      newitem: [{
          avatarurl: '../../../image/icon/icon_xiaotidabiao.png'
        },
        {
          avatarurl: '../../../image/icon/icon_xiaotidabiao.png'
        },
      ]
    }]
  },
  // 获取数据
  getlist() {
    http.get('/indexinterface/my_lessons').then(res => {
      console.log('res.data', res.data)
      this.setData({
        list: res.data
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getlist()
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