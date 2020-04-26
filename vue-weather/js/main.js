/*
  请求地址:http://wthrcdn.etouch.cn/weather_mini
  请求方法:get
  请求参数:city(城市名)
  响应内容:天气信息

  1. 点击回车
  2. 查询数据
  3. 渲染数据
  */
var app = new Vue({
    el: "#app",
    data: {
        city: '西安',
        weatherList: [],
        bigCity: ['北京', '上海', '广州', '深圳']
    },
    methods: {
        getWeather: function () {
            // console.log(this.city);
            axios.get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city).then((response) => {
                // console.log(response);
                this.weatherList = response.data.data.forecast
            }).catch((err) => {
                alert("未查到该城市天气信息！请重新输入")
            })
        },
        getBigCityWeather: function (index) {
            this.city = this.bigCity[index],
                this.getWeather()
        }
    },
})