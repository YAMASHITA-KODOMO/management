<template>
  <div class="city-picker">
    <div class="wrap">
      <div class="picker-tool">
        <span class="cancel">取消</span>
        <span class="ok">确认</span>
      </div>
      <div class="picker-content">
        <div class="province">
          <div class="hidebar">
            <div v-for="(item, index) in province" :key="index">{{item.name}}</div>
          </div>
        </div>
        <div class="city">
          <div class="hidebar">
            <div v-for="(item, index) in city" :key="index">{{item.name}}</div>
          </div>
        </div>
        <div class="area">
          <div class="hidebar">
            <div v-for="(item, index) in area" :key="index">{{item}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import cityData from './cityData'
  export default {
    name: 'cityPicker',
    props: [],
    data () {
      return {
        curProvince: {
          name: '',
          id: ''
        },
        curCity: {
          name: '',
          id: ''
        },
        curArea: {
          name: '',
          id: ''
        }
      }
    },
    computed: {
      province: {
        get(){
          return cityData
        },
        set(){}
      },
      city: {
        get(){
          return cityData[this.curProvince.id].child
        },
        set(){}
      },
      area: {
        get(){
          return cityData[this.curProvince.id].child[this.curCity.id].child
        },
        set(){}
      }
    },
    created () {
      this.initData()
    },
    methods: {
      initData () {
        this.curProvince ={
          name: '北京市',
          id: '110000'
        }
        this.curCity = {
          name: '市辖区',
          id: '110100'
        }
        this.curArea = {
          name: '东城区',
          id: '110101'
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.city-picker {
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(0,0,0,.6);
}
.wrap {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 700px;
  width: 100%;
}
.picker-tool {
  height: 80px;
  background-color: #f5f5f5;
  line-height: 80px;
  color: #f3602d;
  font-size: 32px;
  padding: 0 20px;
  box-sizing: border-box;
}
.cancel {
  float: left;
}
.ok {
  float: right;
}
.picker-content {
  position: relative;
  background: #fff;
  height: 620px;
  width: 100%;
  padding: 10px 105px;
  box-sizing: border-box;
}
.selected {
  position: absolute;
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
}
.province, .city, .area {
  width: 180px;
  height: 600px;
  float: left;
  /*background: blue;*/
  overflow: hidden;
}
.hidebar {
  width: 190px;
  height: 600px;
  overflow-y: scroll;
}
.hidebar > div {
  height: 100px;
  box-sizing: border-box;
  line-height: 100px;
  text-align: center;
  /*font-size: 34px;*/
}
</style>
