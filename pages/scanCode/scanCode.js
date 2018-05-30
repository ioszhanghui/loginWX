Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  longTapAction:function(){
    console.log("长按");
    // wx.scanCode({
    //   success:function(res){
    //     console.log(res);
    //   },
    //   fail:function(){

    //   }
    // })

    wx.previewImage({
      urls: ["https://t12.baidu.com/it/u=415534172,1894718518&fm=173&app=25&f=JPEG?w=500&h=333&s=5102935546C35151021821EA0300C032","https://t11.baidu.com/it/u=3817048663,4033147291&fm=173&app=25&f=JPEG?w=500&h=333&s=CDC29F4146433B450C21848D0300E090"],
    })

  }
})