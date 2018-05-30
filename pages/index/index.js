var util = require("../../utils/util.js");
var network = require("../../utils/network.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:"",//手机号
    code:"",//验证码,
    text:"获取验证码",
    countNumber:60 //倒计时
  },
  /*手机号输入*/
  phoneNumberInput:function(e){
    this.setData({
      phone: e.detail.value
    })
  },
  /*手机号输入*/
  codeNumberInput: function (e) {
    /*保存手机号*/
    this.setData({
      code:e.detail.value
    })
  },
  /*获取验证码*/
  getCode:function(){

    if (util.checkPhoneNumber(this.data.phone)){
      //发送验证码
      var param = {
        phoneNum:this.data.phone
      }
      var that = this;
      network.Post({
        url:"http://123.57.70.38:8888/JQHHWeb/GetPhoneCode.spring",
        param:{
          paramJson:JSON.stringify(param)
        },
        success:function(res){
          wx.showToast({
            title: '验证码发送成功',
          });
          that.startTimer();
        },
        fail:function(){

        }
      })
    }

  },
  startTimer:function(){
    var that = this;
    //定时器开启
    var timer = setInterval(function(){
      that.setData({
        countNumber: --that.data.countNumber,
        text: that.data.countNumber+" s"
      })
      if (that.data.countNumber<=0){
        clearInterval(timer);
        that.setData({
          countNumber: 60,
          text: "获取验证码"
        })
      }
    },1000)
  },
  loginAction:function(){
    //手机号
    if (!util.checkPhoneNumber(this.data.phone)) {
      return;
    }

    if (!util.checkCode(this.data.code)){
      return;
    }

    //发送验证码
    var param = {
      phone_num: this.data.phone,
      newCode:this.data.code
    }
    var that = this;
    network.Post({
      url: "http://123.57.70.38:8888/JQHHWeb/Login.spring",
      param: {
        paramJson: JSON.stringify(param)
      },
      success: function (res) {
        wx.showToast({
          title: '登录成功',
        });
      },
      fail: function () {

      }
    })


  }
})