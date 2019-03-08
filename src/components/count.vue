<template>
  <div>
    <v-header></v-header>
    <Row>
      <Col span="4">
        <Menu :theme="'light'" active-name="99" @on-select="test($event)">
          <MenuGroup title="用户管理">
            <MenuItem name="99">
              <Icon type="md-document" />
              文章管理
            </MenuItem>
            <MenuItem name="100">
              <Icon type="md-chatbubbles" />
              评论管理
            </MenuItem>
          </MenuGroup>
          <MenuGroup title="统计分析">
            <MenuItem name="1">
              <Icon type="md-heart"/>
                民宿价格区间统计
            </MenuItem>
            <MenuItem name="2">
              <Icon type="md-leaf" />
              分城市民宿价格统计
            </MenuItem>
            <MenuItem name="3">
              <Icon type="md-leaf" />
              民宿房客数统计
            </MenuItem>
            <MenuItem name="4">
              <Icon type="md-leaf" />
              民宿卧室数统计
            </MenuItem>
            <MenuItem name="5">
              <Icon type="md-leaf" />
              城市预定热度统计
            </MenuItem>
            <MenuItem name="6">
              <Icon type="md-leaf" />
              城市民宿数量统计
            </MenuItem>
          </MenuGroup>
        </Menu>
      </Col>
      <Col span="20">
        <div id="count1" style="width: 1190px;height:680px;">

        </div>
      </Col>
    </Row>
  </div>
</template>

<script>

  import Header from './Header.vue'
  import china from '../model/china.js'
  require('echarts-gl');

    export default {
      data(){
        return{
          option:{},
          myChart:{}
        }
      },
      mounted(){
        this.myChart = this.$echarts.init(document.getElementById('count1'));
      },
      methods: {
        test(event){
          console.log(event)
          switch (event) {
            case '1':
              this.draw1();
              break;
            case '2':
              this.draw2();
              break;
            case '3':
              this.draw3();
              break;
            case '4':
              this.draw4();
              break;
            case '5':
              this.draw5();
              break;
            case '6':
              this.draw6();
              break;
          }
        },
        draw1(){
          var date = [
            '0','100','200','300','400','500','600','700','800','900',
            '1000','1100','1200','1300','1400','1500','1600','1700','1800','1900',
            '2000','2100','2200','2300','2400','2500','2600','2700','2800','2900',
            '3000','3100','3200','3300','3400','3500','3600','3700','3800','3900',
            '4000','4100','4200','4300','4400','4500','4600','4700','4800','4900','5000'
          ];

          var data = [859,3066,3685,2885,1820,1080,779,439,392,281,
                      98,88,141,105,70,99,81,34,67,87,
                      27,24,36,27,22,52,62,10,52,42,
                      18,9,30,11,10,29,21,2,26,29,
                      7,6,4,9,3,8,3,3,10,10,19];
          this.option = {
            tooltip: {
              trigger: 'axis',
              position: function (pt) {
                return [pt[0], '10%'];
              }
            },
            title: {
              left: 'center',
              text: '民宿价格区间统计',
            },
            toolbox: {
              feature: {
                dataZoom: {
                  yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
              }
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: date,
              name:'价格区间'
            },
            yAxis: {
              type: 'value',
              boundaryGap: [0, '100%'],
              max: 4000,
              name:'民宿数量'
            },
            dataZoom: [{
              type: 'inside',
              start: 0,
              end: 100
            }, {
              start: 0,
              end: 100,
              handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
              handleSize: '80%',
              handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
              }
            }],
            series: [
              {
                name:'模拟数据',
                type:'line',
                smooth:true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                  color: 'rgb(255, 70, 131)'
                },
                areaStyle: {
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(255, 158, 68)'
                  }, {
                    offset: 1,
                    color: 'rgb(255, 70, 131)'
                  }])
                },
                data: data
              }
            ]
          };
          this.myChart.clear();
          this.myChart.setOption(this.option);
        },
        draw2(){
          var data = [[33.0,4996.0,366.7248],
            [67.0,5003.0,586.3744],
            [47.0,5003.0,563.1848],
            [47.0,5003.0,381.8944],
            [87.0,2607.0,489.1605],
            [67.0,5000.0,787.2389],
            [67.0,5000.0,618.75616],
            [67.0,4996.0,596.4947],
            [60.0,4889.0,469.96454],
            [40.0,5003.0,380.9586],
            [67.0,4385.0,462.6778],
            [60.0,4283.0,444.01987],
            [67.0,3378.0,403.98926],
            [67.0,5003.0,421.47348],
            [67.0,5000.0,507.3779],
            [74.0,4920.0,674.30615],
            [34.0,5003.0,487.90903],
            [60.0,4477.0,397.3243],
            [80.0,3211.0,626.25244],
            [74.0,3499.0,566.1414],
            [60.0,4800.0,727.6613],
            [67.0,2467.0,386.57376],
          ];
          var cities = ['西安','北京','上海','成都','台北','三亚','青岛','杭州','广州','重庆','厦门','昆明','兰州','南京','哈尔滨','济南','深圳','长沙','日照','洛阳','晋中','太原'];
          var barHeight = 50;

          this.option = {
            title: {
              text: '城市民宿价格统计',
            },
            legend: {
              show: true,
              data: ['价格范围', '均值']
            },
            grid: {
              top: 100
            },
            angleAxis: {
              type: 'category',
              data: cities
            },
            tooltip: {
              show: true,
              formatter: function (params) {
                var id = params.dataIndex;
                return cities[id] + '<br>最低：' + data[id][0] + '<br>最高：' + data[id][1] + '<br>平均：' + data[id][2];
              }
            },
            radiusAxis: {
            },
            polar: {
            },
            series: [{
              type: 'bar',
              itemStyle: {
                normal: {
                  color: 'transparent'
                }
              },
              data: data.map(function (d) {
                return d[0];
              }),
              coordinateSystem: 'polar',
              stack: '最大最小值',
              silent: true
            }, {
              type: 'bar',
              data: data.map(function (d) {
                return d[1] - d[0];
              }),
              coordinateSystem: 'polar',
              name: '价格范围',
              stack: '最大最小值'
            }, {
              type: 'bar',
              itemStyle: {
                normal: {
                  color: 'transparent'
                }
              },
              data: data.map(function (d) {
                return d[2] - barHeight;
              }),
              coordinateSystem: 'polar',
              stack: '均值',
              silent: true,
              z: 10
            }, {
              type: 'bar',
              data: data.map(function (d) {
                return barHeight * 2
              }),
              coordinateSystem: 'polar',
              name: '均值',
              stack: '均值',
              barGap: '-100%',
              z: 10
            }],
            legend: {
              show: true,
              data: ['A', 'B', 'C']
            }
          };
          // this.myChart = this.$echarts.init(document.getElementById('count1'))
          this.myChart.clear();
          this.myChart.setOption(this.option);
        },
        draw3(){
          // Generate data
          var category = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16'];
          var dottedBase = +new Date();
          var lineData = [673,6998,1270,3617,679,1743,304,642,92,304,34,162,23,52,30,265];
          var barData = [673,6998,1270,3617,679,1743,304,642,92,304,34,162,23,52,30,265];



// option
          this.option = {
            backgroundColor: '#0f375f',
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            legend: {
              data: ['line', 'bar'],
              textStyle: {
                color: '#ccc'
              }
            },
            xAxis: {
              data: category,
              name:'房客数',
              axisLine: {
                lineStyle: {
                  color: '#ccc'
                }
              }
            },
            yAxis: {
              splitLine: {show: false},
              name:'民宿数量',
              axisLine: {
                lineStyle: {
                  color: '#ccc'
                }
              }
            },
            series: [{
              name: 'line',
              type: 'line',
              smooth: true,
              showAllSymbol: true,
              symbol: 'emptyCircle',
              symbolSize: 15,
              data: lineData
            }, {
              name: 'bar',
              type: 'bar',
              barWidth: 10,
              itemStyle: {
                normal: {
                  barBorderRadius: 5,
                  color: new this.$echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      {offset: 0, color: '#14c8d4'},
                      {offset: 1, color: '#43eec6'}
                    ]
                  )
                }
              },
              data: barData
            }, {
              name: 'line',
              type: 'bar',
              barGap: '-100%',
              barWidth: 10,
              itemStyle: {
                normal: {
                  color: new this.$echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      {offset: 0, color: 'rgba(20,200,212,0.5)'},
                      {offset: 0.2, color: 'rgba(20,200,212,0.2)'},
                      {offset: 1, color: 'rgba(20,200,212,0)'}
                    ]
                  )
                }
              },
              z: -12,
              data: lineData
            }, {
              name: 'dotted',
              type: 'pictorialBar',
              symbol: 'rect',
              itemStyle: {
                normal: {
                  color: '#0f375f'
                }
              },
              symbolRepeat: true,
              symbolSize: [12, 4],
              symbolMargin: 1,
              z: -10,
              data: lineData
            }]
          };
          this.myChart.clear();
          this.myChart.setOption(this.option);
        },
        draw4(){
          this.option = {
            title : {
              text: '民宿卧室数统计',
              subtext: '半径模式图  ||  面积模式图',
              x:'center'
            },
            tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
              x : 'center',
              y : 'bottom',
              data:['1间卧室','2间卧室','3间卧室','4间卧室','5间卧室','6间卧室','7间卧室','8间卧室','9间卧室','10间卧室']
            },
            toolbox: {
              show : true,
              feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                  show: true,
                  type: ['pie', 'funnel']
                },
                restore : {show: true},
                saveAsImage : {show: true}
              }
            },
            calculable : true,
            series : [
              {
                name:'半径模式',
                type:'pie',
                radius : [20, 110],
                center : ['25%', '50%'],
                roseType : 'radius',
                label: {
                  normal: {
                    show: false
                  },
                  emphasis: {
                    show: true
                  }
                },
                lableLine: {
                  normal: {
                    show: false
                  },
                  emphasis: {
                    show: true
                  }
                },
                data:[
                  {value:10075, name:'1间卧室'},
                  {value:3616, name:'2间卧室'},
                  {value:1883, name:'3间卧室'},
                  {value:659, name:'4间卧室'},
                  {value:271, name:'5间卧室'},
                  {value:129, name:'6间卧室'},
                  {value:47, name:'7间卧室'},
                  {value:47, name:'8间卧室'},
                  {value:17, name:'9间卧室'},
                  {value:24, name:'10间卧室'}
                ]
              },
              {
                name:'面积模式',
                type:'pie',
                radius : [30, 110],
                center : ['75%', '50%'],
                roseType : 'area',
                data:[
                  {value:10075, name:'1间卧室'},
                  {value:3616, name:'2间卧室'},
                  {value:1883, name:'3间卧室'},
                  {value:659, name:'4间卧室'},
                  {value:271, name:'5间卧室'},
                  {value:129, name:'6间卧室'},
                  {value:47, name:'7间卧室'},
                  {value:47, name:'8间卧室'},
                  {value:17, name:'9间卧室'},
                  {value:24, name:'10间卧室'}
                ]
              }
            ]
          };
          this.myChart.clear();
          this.myChart.setOption(this.option);
        },
        draw5(){
          let geoCoordMap = {
            "海门": [121.15, 31.89],
            "鄂尔多斯": [109.781327, 39.608266],
            "招远": [120.38, 37.35],
            "舟山": [122.207216, 29.985295],
            "齐齐哈尔": [123.97, 47.33],
            "盐城": [120.13, 33.38],
            "赤峰": [118.87, 42.28],
            "青岛": [120.33, 36.07],
            "乳山": [121.52, 36.89],
            "金昌": [102.188043, 38.520089],
            "泉州": [118.58, 24.93],
            "莱西": [120.53, 36.86],
            "日照": [119.46, 35.42],
            "胶南": [119.97, 35.88],
            "南通": [121.05, 32.08],
            "拉萨": [91.11, 29.97],
            "云浮": [112.02, 22.93],
            "梅州": [116.1, 24.55],
            "文登": [122.05, 37.2],
            "上海": [121.48, 31.22],
            "攀枝花": [101.718637, 26.582347],
            "威海": [122.1, 37.5],
            "承德": [117.93, 40.97],
            "厦门": [118.1, 24.46],
            "汕尾": [115.375279, 22.786211],
            "潮州": [116.63, 23.68],
            "丹东": [124.37, 40.13],
            "太仓": [121.1, 31.45],
            "曲靖": [103.79, 25.51],
            "烟台": [121.39, 37.52],
            "福州": [119.3, 26.08],
            "瓦房店": [121.979603, 39.627114],
            "即墨": [120.45, 36.38],
            "抚顺": [123.97, 41.97],
            "玉溪": [102.52, 24.35],
            "张家口": [114.87, 40.82],
            "阳泉": [113.57, 37.85],
            "莱州": [119.942327, 37.177017],
            "湖州": [120.1, 30.86],
            "汕头": [116.69, 23.39],
            "昆山": [120.95, 31.39],
            "宁波": [121.56, 29.86],
            "湛江": [110.359377, 21.270708],
            "揭阳": [116.35, 23.55],
            "荣成": [122.41, 37.16],
            "连云港": [119.16, 34.59],
            "葫芦岛": [120.836932, 40.711052],
            "常熟": [120.74, 31.64],
            "东莞": [113.75, 23.04],
            "河源": [114.68, 23.73],
            "淮安": [119.15, 33.5],
            "泰州": [119.9, 32.49],
            "南宁": [108.33, 22.84],
            "营口": [122.18, 40.65],
            "惠州": [114.4, 23.09],
            "江阴": [120.26, 31.91],
            "蓬莱": [120.75, 37.8],
            "韶关": [113.62, 24.84],
            "嘉峪关": [98.289152, 39.77313],
            "广州": [113.23, 23.16],
            "延安": [109.47, 36.6],
            "太原": [112.53, 37.87],
            "清远": [113.01, 23.7],
            "中山": [113.38, 22.52],
            "昆明": [102.73, 25.04],
            "寿光": [118.73, 36.86],
            "盘锦": [122.070714, 41.119997],
            "长治": [113.08, 36.18],
            "深圳": [114.07, 22.62],
            "珠海": [113.52, 22.3],
            "宿迁": [118.3, 33.96],
            "咸阳": [108.72, 34.36],
            "铜川": [109.11, 35.09],
            "平度": [119.97, 36.77],
            "佛山": [113.11, 23.05],
            "海口": [110.35, 20.02],
            "江门": [113.06, 22.61],
            "章丘": [117.53, 36.72],
            "肇庆": [112.44, 23.05],
            "大连": [121.62, 38.92],
            "临汾": [111.5, 36.08],
            "吴江": [120.63, 31.16],
            "石嘴山": [106.39, 39.04],
            "沈阳": [123.38, 41.8],
            "苏州": [120.62, 31.32],
            "茂名": [110.88, 21.68],
            "嘉兴": [120.76, 30.77],
            "长春": [125.35, 43.88],
            "胶州": [120.03336, 36.264622],
            "银川": [106.27, 38.47],
            "张家港": [120.555821, 31.875428],
            "三门峡": [111.19, 34.76],
            "锦州": [121.15, 41.13],
            "南昌": [115.89, 28.68],
            "柳州": [109.4, 24.33],
            "三亚": [109.511909, 18.252847],
            "自贡": [104.778442, 29.33903],
            "吉林": [126.57, 43.87],
            "阳江": [111.95, 21.85],
            "泸州": [105.39, 28.91],
            "西宁": [101.74, 36.56],
            "宜宾": [104.56, 29.77],
            "呼和浩特": [111.65, 40.82],
            "成都": [104.06, 30.67],
            "大同": [113.3, 40.12],
            "镇江": [119.44, 32.2],
            "桂林": [110.28, 25.29],
            "张家界": [110.479191, 29.117096],
            "宜兴": [119.82, 31.36],
            "北海": [109.12, 21.49],
            "西安": [108.95, 34.27],
            "金坛": [119.56, 31.74],
            "东营": [118.49, 37.46],
            "牡丹江": [129.58, 44.6],
            "遵义": [106.9, 27.7],
            "绍兴": [120.58, 30.01],
            "扬州": [119.42, 32.39],
            "常州": [119.95, 31.79],
            "潍坊": [119.1, 36.62],
            "重庆": [106.54, 29.59],
            "台州": [121.420757, 28.656386],
            "南京": [118.78, 32.04],
            "滨州": [118.03, 37.36],
            "贵阳": [106.71, 26.57],
            "无锡": [120.29, 31.59],
            "本溪": [123.73, 41.3],
            "克拉玛依": [84.77, 45.59],
            "渭南": [109.5, 34.52],
            "马鞍山": [118.48, 31.56],
            "宝鸡": [107.15, 34.38],
            "焦作": [113.21, 35.24],
            "句容": [119.16, 31.95],
            "北京": [116.46, 39.92],
            "徐州": [117.2, 34.26],
            "衡水": [115.72, 37.72],
            "包头": [110, 40.58],
            "绵阳": [104.73, 31.48],
            "乌鲁木齐": [87.68, 43.77],
            "枣庄": [117.57, 34.86],
            "杭州": [120.19, 30.26],
            "淄博": [118.05, 36.78],
            "鞍山": [122.85, 41.12],
            "溧阳": [119.48, 31.43],
            "库尔勒": [86.06, 41.68],
            "安阳": [114.35, 36.1],
            "开封": [114.35, 34.79],
            "济南": [117, 36.65],
            "德阳": [104.37, 31.13],
            "温州": [120.65, 28.01],
            "九江": [115.97, 29.71],
            "邯郸": [114.47, 36.6],
            "临安": [119.72, 30.23],
            "兰州": [103.73, 36.03],
            "沧州": [116.83, 38.33],
            "临沂": [118.35, 35.05],
            "南充": [106.110698, 30.837793],
            "天津": [117.2, 39.13],
            "富阳": [119.95, 30.07],
            "泰安": [117.13, 36.18],
            "诸暨": [120.23, 29.71],
            "郑州": [113.65, 34.76],
            "哈尔滨": [126.63, 45.75],
            "聊城": [115.97, 36.45],
            "芜湖": [118.38, 31.33],
            "唐山": [118.02, 39.63],
            "平顶山": [113.29, 33.75],
            "邢台": [114.48, 37.05],
            "德州": [116.29, 37.45],
            "济宁": [116.59, 35.38],
            "荆州": [112.239741, 30.335165],
            "宜昌": [111.3, 30.7],
            "义乌": [120.06, 29.32],
            "丽水": [119.92, 28.45],
            "洛阳": [112.44, 34.7],
            "秦皇岛": [119.57, 39.95],
            "株洲": [113.16, 27.83],
            "石家庄": [114.48, 38.03],
            "莱芜": [117.67, 36.19],
            "常德": [111.69, 29.05],
            "保定": [115.48, 38.85],
            "湘潭": [112.91, 27.87],
            "金华": [119.64, 29.12],
            "岳阳": [113.09, 29.37],
            "长沙": [113, 28.21],
            "衢州": [118.88, 28.97],
            "廊坊": [116.7, 39.53],
            "菏泽": [115.480656, 35.23375],
            "合肥": [117.27, 31.86],
            "武汉": [114.31, 30.52],
            "大庆": [125.03, 46.58]
          };

          var convertData = function(data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
              var geoCoord = geoCoordMap[data[i].name];
              if (geoCoord) {
                res.push({
                  name: data[i].name,
                  value: geoCoord.concat(data[i].value)
                });
              }
            }
            console.log(res)
            return res;
          };
          this.option = {
            title: {
              text: '城市民宿数量统计',
              x: 'left',
              top: "10",
              textStyle: {
                color: '#000',
                fontSize: 14
              }
            },
            tooltip: {
              show: true,
              // formatter:(params)=>{
              //   let data = "测试1:"+params.name + "<br/>"+"值:"+ params.value[2]+"<br/>"+"地理坐标:[" + params.value[0]+","+params.value[1] +"]";
              //   return data;
              // },
            },
            visualMap: [{
              type: 'continuous',
              seriesIndex: 0,
              text: ['bar3D'],
              calculable: true,
              max: 100000,
              inRange: {
                color: ['#87aa66', '#eba438', '#d94d4c']
              }
            }, {
              type: 'continuous',
              seriesIndex: 1,
              text: ['scatter3D'],
              left: 'right',
              max: 100,
              calculable: true,
              inRange: {
                color: ['#000', 'blue', 'purple']
              }
            }],
            geo3D: {
              map: 'china',
              roam: true,
              itemStyle: {
                color: '#2db7f5',
                opacity: 1,
                borderWidth: 0.4,
                borderColor: '#000'
              },
              label: {
                show: true,
                textStyle: {
                  color: '#ed4014', //地图初始化区域字体颜色
                  fontSize: 8,
                  opacity: 1,
                  backgroundColor: 'rgba(0,23,11,0)'
                },
              },
              emphasis: { //当鼠标放上去  地区区域是否显示名称
                label: {
                  show: true,
                  textStyle: {
                    color: '#fff',
                    fontSize: 3,
                    backgroundColor: 'rgba(0,23,11,0)'
                  }
                }
              },
              //shading: 'lambert',
              light: { //光照阴影
                main: {
                  color: '#fff', //光照颜色
                  intensity: 1.2, //光照强度
                  //shadowQuality: 'high', //阴影亮度
                  shadow: false, //是否显示阴影
                  alpha:55,
                  beta:10

                },
                ambient: {
                  intensity: 0.3
                }
              }
            },
            series: [{
              name: 'bar3D',
              type: "bar3D",
              coordinateSystem: 'geo3D',
              barSize: 1, //柱子粗细
              shading: 'lambert',
              opacity: 1,
              bevelSize:0.3,
              label: {
                show: false,
                formatter: '{b}'
              },
              data: convertData([{
                name: "海门",
                value: (Math.random() * 300).toFixed(2)
              },
                {
                  name: "西安",
                  value:49456
                },
                {
                  name: "北京",
                  value:90520
                },
                {
                  name: "上海",
                  value:99041
                },
                {
                  name: "成都",
                  value:67740
                },
                {
                  name: "台北",
                  value:7642
                },
                {
                  name: "三亚",
                  value:34219
                },
                {
                  name: "青岛",
                  value:47137
                },
                {
                  name: "杭州",
                  value:60676
                },
                {
                  name: "广州",
                  value:59470
                },
                {
                  name: "重庆",
                  value:57616
                },
                {
                  name: "厦门",
                  value:61015
                },
                {
                  name: "昆明",
                  value:22120
                },
                {
                  name: "兰州",
                  value: 4463
                },
                {
                  name: "南京",
                  value:36955
                },
                {
                  name: "哈尔滨",
                  value:17052
                },
                {
                  name: "济南",
                  value:7068
                },
                {
                  name: "深圳",
                  value:57485
                },
                {
                  name: "长沙",
                  value:29489
                },
                {
                  name: "日照",
                  value:5188
                },
                {
                  name: "洛阳",
                  value:4684
                },
                {
                  name: "晋中",
                  value:2792
                },
                {
                  name: "太原",
                  value:6332
                }
              ]),
            }, {
              name: 'scatter3D',
              type: "scatter3D",
              coordinateSystem: 'geo3D',
              symbol: 'pin',
              symbolSize: 30,
              opacity: 1,
              label: {
                show: false,
                formatter: '{b}'
              },
              itemStyle: {
                borderWidth: 0.5,
                borderColor: '#fff'
              },
              data: convertData([{
                name: "阳泉",
                value: ((Math.random() * 100) + 50).toFixed(2)
              }])
            }]
          };
          this.myChart.clear();
          this.myChart.setOption(this.option);
        },
        draw6(){
          let geoCoordMap = {
            "海门": [121.15, 31.89],
            "鄂尔多斯": [109.781327, 39.608266],
            "招远": [120.38, 37.35],
            "舟山": [122.207216, 29.985295],
            "齐齐哈尔": [123.97, 47.33],
            "盐城": [120.13, 33.38],
            "赤峰": [118.87, 42.28],
            "青岛": [120.33, 36.07],
            "乳山": [121.52, 36.89],
            "金昌": [102.188043, 38.520089],
            "泉州": [118.58, 24.93],
            "莱西": [120.53, 36.86],
            "日照": [119.46, 35.42],
            "胶南": [119.97, 35.88],
            "南通": [121.05, 32.08],
            "拉萨": [91.11, 29.97],
            "云浮": [112.02, 22.93],
            "梅州": [116.1, 24.55],
            "文登": [122.05, 37.2],
            "上海": [121.48, 31.22],
            "攀枝花": [101.718637, 26.582347],
            "威海": [122.1, 37.5],
            "承德": [117.93, 40.97],
            "厦门": [118.1, 24.46],
            "汕尾": [115.375279, 22.786211],
            "潮州": [116.63, 23.68],
            "丹东": [124.37, 40.13],
            "太仓": [121.1, 31.45],
            "曲靖": [103.79, 25.51],
            "烟台": [121.39, 37.52],
            "福州": [119.3, 26.08],
            "瓦房店": [121.979603, 39.627114],
            "即墨": [120.45, 36.38],
            "抚顺": [123.97, 41.97],
            "玉溪": [102.52, 24.35],
            "张家口": [114.87, 40.82],
            "阳泉": [113.57, 37.85],
            "莱州": [119.942327, 37.177017],
            "湖州": [120.1, 30.86],
            "汕头": [116.69, 23.39],
            "昆山": [120.95, 31.39],
            "宁波": [121.56, 29.86],
            "湛江": [110.359377, 21.270708],
            "揭阳": [116.35, 23.55],
            "荣成": [122.41, 37.16],
            "连云港": [119.16, 34.59],
            "葫芦岛": [120.836932, 40.711052],
            "常熟": [120.74, 31.64],
            "东莞": [113.75, 23.04],
            "河源": [114.68, 23.73],
            "淮安": [119.15, 33.5],
            "泰州": [119.9, 32.49],
            "南宁": [108.33, 22.84],
            "营口": [122.18, 40.65],
            "惠州": [114.4, 23.09],
            "江阴": [120.26, 31.91],
            "蓬莱": [120.75, 37.8],
            "韶关": [113.62, 24.84],
            "嘉峪关": [98.289152, 39.77313],
            "广州": [113.23, 23.16],
            "延安": [109.47, 36.6],
            "太原": [112.53, 37.87],
            "清远": [113.01, 23.7],
            "中山": [113.38, 22.52],
            "昆明": [102.73, 25.04],
            "寿光": [118.73, 36.86],
            "盘锦": [122.070714, 41.119997],
            "长治": [113.08, 36.18],
            "深圳": [114.07, 22.62],
            "珠海": [113.52, 22.3],
            "宿迁": [118.3, 33.96],
            "咸阳": [108.72, 34.36],
            "铜川": [109.11, 35.09],
            "平度": [119.97, 36.77],
            "佛山": [113.11, 23.05],
            "海口": [110.35, 20.02],
            "江门": [113.06, 22.61],
            "章丘": [117.53, 36.72],
            "肇庆": [112.44, 23.05],
            "大连": [121.62, 38.92],
            "临汾": [111.5, 36.08],
            "吴江": [120.63, 31.16],
            "石嘴山": [106.39, 39.04],
            "沈阳": [123.38, 41.8],
            "苏州": [120.62, 31.32],
            "茂名": [110.88, 21.68],
            "嘉兴": [120.76, 30.77],
            "长春": [125.35, 43.88],
            "胶州": [120.03336, 36.264622],
            "银川": [106.27, 38.47],
            "张家港": [120.555821, 31.875428],
            "三门峡": [111.19, 34.76],
            "锦州": [121.15, 41.13],
            "南昌": [115.89, 28.68],
            "柳州": [109.4, 24.33],
            "三亚": [109.511909, 18.252847],
            "自贡": [104.778442, 29.33903],
            "吉林": [126.57, 43.87],
            "阳江": [111.95, 21.85],
            "泸州": [105.39, 28.91],
            "西宁": [101.74, 36.56],
            "宜宾": [104.56, 29.77],
            "呼和浩特": [111.65, 40.82],
            "成都": [104.06, 30.67],
            "大同": [113.3, 40.12],
            "镇江": [119.44, 32.2],
            "桂林": [110.28, 25.29],
            "张家界": [110.479191, 29.117096],
            "宜兴": [119.82, 31.36],
            "北海": [109.12, 21.49],
            "西安": [108.95, 34.27],
            "金坛": [119.56, 31.74],
            "东营": [118.49, 37.46],
            "牡丹江": [129.58, 44.6],
            "遵义": [106.9, 27.7],
            "绍兴": [120.58, 30.01],
            "扬州": [119.42, 32.39],
            "常州": [119.95, 31.79],
            "潍坊": [119.1, 36.62],
            "重庆": [106.54, 29.59],
            "台州": [121.420757, 28.656386],
            "南京": [118.78, 32.04],
            "滨州": [118.03, 37.36],
            "贵阳": [106.71, 26.57],
            "无锡": [120.29, 31.59],
            "本溪": [123.73, 41.3],
            "克拉玛依": [84.77, 45.59],
            "渭南": [109.5, 34.52],
            "马鞍山": [118.48, 31.56],
            "宝鸡": [107.15, 34.38],
            "焦作": [113.21, 35.24],
            "句容": [119.16, 31.95],
            "北京": [116.46, 39.92],
            "徐州": [117.2, 34.26],
            "衡水": [115.72, 37.72],
            "包头": [110, 40.58],
            "绵阳": [104.73, 31.48],
            "乌鲁木齐": [87.68, 43.77],
            "枣庄": [117.57, 34.86],
            "杭州": [120.19, 30.26],
            "淄博": [118.05, 36.78],
            "鞍山": [122.85, 41.12],
            "溧阳": [119.48, 31.43],
            "库尔勒": [86.06, 41.68],
            "安阳": [114.35, 36.1],
            "开封": [114.35, 34.79],
            "济南": [117, 36.65],
            "德阳": [104.37, 31.13],
            "温州": [120.65, 28.01],
            "九江": [115.97, 29.71],
            "邯郸": [114.47, 36.6],
            "临安": [119.72, 30.23],
            "兰州": [103.73, 36.03],
            "沧州": [116.83, 38.33],
            "临沂": [118.35, 35.05],
            "南充": [106.110698, 30.837793],
            "天津": [117.2, 39.13],
            "富阳": [119.95, 30.07],
            "泰安": [117.13, 36.18],
            "诸暨": [120.23, 29.71],
            "郑州": [113.65, 34.76],
            "哈尔滨": [126.63, 45.75],
            "聊城": [115.97, 36.45],
            "芜湖": [118.38, 31.33],
            "唐山": [118.02, 39.63],
            "平顶山": [113.29, 33.75],
            "邢台": [114.48, 37.05],
            "德州": [116.29, 37.45],
            "济宁": [116.59, 35.38],
            "荆州": [112.239741, 30.335165],
            "宜昌": [111.3, 30.7],
            "义乌": [120.06, 29.32],
            "丽水": [119.92, 28.45],
            "洛阳": [112.44, 34.7],
            "秦皇岛": [119.57, 39.95],
            "株洲": [113.16, 27.83],
            "石家庄": [114.48, 38.03],
            "莱芜": [117.67, 36.19],
            "常德": [111.69, 29.05],
            "保定": [115.48, 38.85],
            "湘潭": [112.91, 27.87],
            "金华": [119.64, 29.12],
            "岳阳": [113.09, 29.37],
            "长沙": [113, 28.21],
            "衢州": [118.88, 28.97],
            "廊坊": [116.7, 39.53],
            "菏泽": [115.480656, 35.23375],
            "合肥": [117.27, 31.86],
            "武汉": [114.31, 30.52],
            "大庆": [125.03, 46.58]
          };

          var convertData = function(data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
              var geoCoord = geoCoordMap[data[i].name];
              if (geoCoord) {
                res.push({
                  name: data[i].name,
                  value: geoCoord.concat(data[i].value)
                });
              }
            }
            console.log(res)
            return res;
          };
          this.option = {
            title: {
              text: '城市民宿数量统计',
              x: 'left',
              top: "10",
              textStyle: {
                color: '#000',
                fontSize: 14
              }
            },
            tooltip: {
              show: true,
              // formatter:(params)=>{
              //   let data = "测试1:"+params.name + "<br/>"+"值:"+ params.value[2]+"<br/>"+"地理坐标:[" + params.value[0]+","+params.value[1] +"]";
              //   return data;
              // },
            },
            visualMap: [{
              type: 'continuous',
              seriesIndex: 0,
              text: ['bar3D'],
              calculable: true,
              max: 2000,
              inRange: {
                color: ['#87aa66', '#eba438', '#d94d4c']
              }
            }, {
              type: 'continuous',
              seriesIndex: 1,
              text: ['scatter3D'],
              left: 'right',
              max: 100,
              calculable: true,
              inRange: {
                color: ['#000', 'blue', 'purple']
              }
            }],
            geo3D: {
              map: 'china',
              roam: true,
              itemStyle: {
                color: '#ffc0cb',
                opacity: 1,
                borderWidth: 0.4,
                borderColor: '#000'
              },
              label: {
                show: true,
                textStyle: {
                  color: '#ed4014', //地图初始化区域字体颜色
                  fontSize: 8,
                  opacity: 1,
                  backgroundColor: 'rgba(0,23,11,0)'
                },
              },
              emphasis: { //当鼠标放上去  地区区域是否显示名称
                label: {
                  show: true,
                  textStyle: {
                    color: '#fff',
                    fontSize: 3,
                    backgroundColor: 'rgba(0,23,11,0)'
                  }
                }
              },
              //shading: 'lambert',
              light: { //光照阴影
                main: {
                  color: '#fff', //光照颜色
                  intensity: 1.2, //光照强度
                  //shadowQuality: 'high', //阴影亮度
                  shadow: false, //是否显示阴影
                  alpha:55,
                  beta:10

                },
                ambient: {
                  intensity: 0.3
                }
              }
            },
            series: [{
              name: 'bar3D',
              type: "bar3D",
              coordinateSystem: 'geo3D',
              barSize: 1, //柱子粗细
              shading: 'lambert',
              opacity: 1,
              bevelSize:0.3,
              label: {
                show: false,
                formatter: '{b}'
              },
              data: convertData([{
                name: "海门",
                value: (Math.random() * 300).toFixed(2)
              },
                {
                  name: "西安",
                  value:1032
                },
                {
                  name: "北京",
                  value:1859
                },
                {
                  name: "上海",
                  value:1964
                },
                {
                  name: "成都",
                  value:1326
                },
                {
                  name: "台北",
                  value:162
                },
                {
                  name: "三亚",
                  value:674
                },
                {
                  name: "青岛",
                  value:935
                },
                {
                  name: "杭州",
                  value:1219
                },
                {
                  name: "广州",
                  value:1184
                },
                {
                  name: "重庆",
                  value:1159
                },
                {
                  name: "厦门",
                  value:1167
                },
                {
                  name: "昆明",
                  value:453
                },
                {
                  name: "兰州",
                  value: 93
                },
                {
                  name: "南京",
                  value:773
                },
                {
                  name: "哈尔滨",
                  value:334
                },
                {
                  name: "济南",
                  value:147
                },
                {
                  name: "深圳",
                  value:1154
                },
                {
                  name: "长沙",
                  value:592
                },
                {
                  name: "日照",
                  value:103
                },
                {
                  name: "洛阳",
                  value:99
                },
                {
                  name: "晋中",
                  value:62
                },
                {
                  name: "太原",
                  value:122
                }
              ]),
            }, {
              name: 'scatter3D',
              type: "scatter3D",
              coordinateSystem: 'geo3D',
              symbol: 'pin',
              symbolSize: 30,
              opacity: 1,
              label: {
                show: false,
                formatter: '{b}'
              },
              itemStyle: {
                borderWidth: 0.5,
                borderColor: '#fff'
              },
              data: convertData([{
                name: "阳泉",
                value: ((Math.random() * 100) + 50).toFixed(2)
              }])
            }]
          };
          this.myChart.clear();
          this.myChart.setOption(this.option);
        }
      },
      components:{
        'v-header':Header
      }
    }
</script>

<style scoped>

</style>
