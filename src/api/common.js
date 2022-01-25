
const api_url = "12321"

export default {
  tableFormatter,
  axiosPost,
  axiosGet,
  axiosRequest
}

function tableFormatter(obj,row,column,val) {
  return obj[val]
}

function axiosGet(_this,url,data,callback) {
  axiosRequest(_this,'get',url, data,callback);
}

function axiosRequest(_this,type,url,data,callback) {
  _this.$http({
    method: type,
    url: api_url+url,
    data: data,
    headers: {
      'Content-Type':"application/json",
      Authorization: localStorage.getItem('token')
    },
  }).then((res)=>{
    if(res.data.success) {
      callback(res.data)
    }else {
      _this.$message.error(res.data.msg)
      if(res.data.code==2001001008){
        localStorage.clear()
        _this.$router.push({name: "Login"})
      }else {
        callback(res.data)
      }
    }
  },(res)=>{
    _this.$message.error("服务开小差了")
  })
}

function axiosPost(_this,url, data, callback) {
  axiosRequest(_this,'post',url, data,callback);
}

