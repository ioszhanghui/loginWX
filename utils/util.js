/*检测手机号 是否合法*/
function checkPhoneNumber(phone){
  //去掉空格
  phone = phone.replace(/\s+/g, ""); 
  if(phone=='undefine'||phone.length==0){
    wx.showToast({
      title: '请输入登录手机号码',
    })
    return false;
  }
  var myreg = /^[1][3,4,5,7,8][0-9]{9}$/; 
  if(!myreg.test(phone)){
    //非合法的手机号
    wx.showToast({
      title: '请输入合法的手机号码',
    })
    return false;
  }
  return true;
}

function checkCode(code){
  //去掉空格
  code = code.replace(/\s+/g, ""); 
  if (code == 'undefine' || code.length == 0) {
    wx.showToast({
      title: '请输入登录验证码',
    })
    return false;
  }
  if(code.length<6){
    wx.showToast({
      title: '请输入合法的登录验证码',
    })
    return false;
  }
  return true;
}
module.exports={
  checkPhoneNumber: checkPhoneNumber,
  checkCode: checkCode
}