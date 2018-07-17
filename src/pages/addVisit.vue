<template>
  <div class="add-visit">
    <c-input
      v-for="(item, index) in inputList"
      :putInfo="item"
      :key="index"
      >
    </c-input>
    <div class="files">
      <p>附件</p>
      <p class="files-name"><a>axxx.doc</a></p>
      <p class="files-name"><a>axxx.doc</a></p>
      <div class="add-files"></div>
    </div>
    <c-input
      label="提交"
      type="btn"
      :event="submit"
      >  
    </c-input>
    <template>
      <mt-datetime-picker
        ref="picker"
        type="time"
        v-model="pickerValue">
      </mt-datetime-picker>
    </template>
  </div>
</template>

<script>
  import cInput from 'c/cInput'
  import { DatetimePicker } from 'mint-ui';
  export default {
    name: 'addVisit',
    data () {
      return {
        inputList: [
          {
            label: '客户全称',
            req: true,
            type: 'checkbox',
            route: 'checkCustomer'
          },
          {
            label: '拜访日期',
            type: 'checkbox',
            event: this.checkDate
          },
          {
            label: '客户负责人',
            req: true,
            type: 'checkbox',
            route: 'checkResponse'
          },
          {
            label: '联系人',
            req: true,
            type: 'text',
          },
          {
            label: '拜访内容',
            req: true,
            type: 'area',
            placeholder: '通过@可将拜访记录分享给其他人'
          },
        ],
        pickerValue: '',
      }
    },
    components: {
      cInput,
      [DatetimePicker.name]: DatetimePicker
    },
    methods: {
      checkDate () {
        console.log('click picker')
        this.$refs.picker.open()
      },
      submit () {
        console.log('submit')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/scss/define';
.add-visit {
  .files {
    padding-left: 20px;
    margin-top: 32px;
    p {
      font-size: 28px;
      color: $grey;
      margin-bottom: 20px;
    }
    .files-name {
      font-size: 30px;
      line-height: 30px;
      // margin-bottom: 40px;
      a {
        color: $link-color;
        text-decoration: underline;
      }
    }
    .add-files {
      width: 180px;
      height: 173px;
      margin-top: 28px;
      background: url('../assets/imgs/add-files-icon.png') no-repeat;
      background-size: 180px;
    }
  }
}
</style>
