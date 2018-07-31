<template>
  <div class="add-linkman">
    <div class="card">
      <p>上传名片</p>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </div>
    <c-input
      v-for="(item, index) in inputList"
      :putInfo="item"
      :key="index"
      ></c-input>
      <btn>提交</btn>
  </div>
</template>

<script>
  import btn from 'c/btn'
  import cInput from 'c/cInput'
  export default {
    name: 'addLinkman',
    data () {
      return {
        inputList: [
          {
            label: '姓名',
            type: 'text',
            req: true,
          },
          {
            label: '手机号',
            type: 'text',
          },
          {
            label: '公司',
            type: 'checkbox',
            req: true,
            route: 'checkCustomer'
          },
          {
            label: '部门',
            type: 'text',
          },
          {
            label: '职务',
            type: 'text',
          },
          {
            label: '备注',
            type: 'area',
          },
        ]
      }
    },
    components: {
      cInput,
      btn,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../assets/scss/define';
.add-linkman {
  .card {
    background: #fff;
    padding: 30px 20px 30px;
    margin-bottom: 10px;
    p {
      font-size: 28px;
      color: $grey;
      line-height: 28px;
      margin-bottom: 40px;
    }
    ul {
      height: 182px;
      li {
        height: 182px;
        width: 345px;
        background: #e5e5e5;
        border-radius: 10px;
        float: left;
        &:first-child {
          margin-right: 20px;
        }
      }
    }
  }
}
</style>
