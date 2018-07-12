<template>
  <div class="city-picker">
    <div class="wrap">
      <div class="picker-tool">
        <span class="cancel" @click="hidePanel">取消</span>
        <span class="ok" @click="submitPanel">确认</span>
      </div>
      <div class="picker-content">
        <div class="slider-top"></div>
        <div class="slider-btm"></div>
        <mt-picker
          ref="picker"
          :visibleItemCount="7"
          :itemHeight="100"
          :slots="slots"
          valueKey="name"
          @change="onValuesChange"
          >
        </mt-picker>
      </div>
    </div>
  </div>
</template>

<script>
  import { provinceNew } from './province'
  import city from './city'
  import { Picker  } from 'mint-ui'
  export default {
    name: 'cityPicker',
    props: [],
    data () {
      return {
        // slot数据
        slots: [
          {
            flex: 1,
            values: [],
            className: 'slot1',
            textAlign: 'center'
          },
          {
            flex: 1,
            values: [],
            className: 'slot2',
            textAlign: 'center'
          },{
            flex: 1,
            values: [],
            className: 'slot3',
            textAlign: 'center'
          }
        ],
      }
    },
    components: {
      [Picker.name]: Picker
    },
    created () {
      this.initData()
    },
    methods: {
      // 初始化数据
      initData () {
        this.slots[0].values = Object.entries(provinceNew).map(x => {
          return x[0]
        })
        this.slots[1].values = provinceNew['华东']
        this.slots[2].values = city['安徽省']
      },
      // 数据发生变化
      onValuesChange (picker, values) {
        picker.setSlotValues(1, provinceNew[values[0]])
        picker.setSlotValues(2, city[values[1].name])
      },
      hidePanel () {
        this.$emit('hidePanel')
      },
      // 提交数据
      submitPanel () {
        this.$emit('hidePanel')
        let values = this.$refs.picker.getValues()
        this.$emit('submitPanel', [values[0], values[1].name, values[2].name])
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.slot1, .slot2, .slot3 {
  font-size: 34px;
}
.picker-slot, .picker-slot-wrapper {
  width: 180px;
}
.picker-center-highlight {
  display: none;
  /*position: absolute;
  top: 0;
  left: 0;*/
}
</style>
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
  background: #fff;
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
.slider-top, 
.slider-btm {
  height: 2px;
  width: 100%;
  border: 0;
  background: #e5e5e5;
  position: absolute;
  left: 0;
  z-index: 999;
}
.slider-top {
  top: 310px;
}
.slider-btm {
  top: 410px;
}
.selected {
  height: 100px;
  width: 100%;
  position: absolute;
  top: 310px;
  left: 0;
  box-sizing: border-box;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  z-index: -9;
}
</style>
