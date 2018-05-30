var requestHandler ={

url:"",//请求链接
param:{},//请求参数
success:function(){//成功回调

},
fail:function(){
//失败回调
}
}

function wxRequest(requestType,requestHandler){
  wx.request({
    url: requestHandler.url,
    data:requestHandler.param,
    header:{
      "content-type": requestHandler == "GET" ? "application/json" :"application/x-www-form-urlencoded"
    },
    method:requestType,
    success:function(res){
      var result = res.data;
      if (result.code =='200'){
        requestHandler.success(res.data);
      } else if (result.code == '300'){
        //展示toast
        wx.showToast({
          title: result.message,
        });
      }
    },
    fail:function(){
      requestHandler.fail();
    }
  })
}
/*GET请求*/
function Get(requestHandler){
  wxRequest("GET", requestHandler);
}

function Post(requestHandler){
  wxRequest("POST", requestHandler);
}

module.exports = {
  Get: Get,
  Post: Post
}