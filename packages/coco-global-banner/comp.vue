<template>
  <div class="global-comp">
    <a :href="obj && obj.link" @click="toland">
      <img class="global-banner" :src="obj.src" alt="图片" />
    </a>
    <span class="close-icon" @click="clickHandle"></span>
    <span class="gloabal-common-version">
      public version is {{publicVersion}}
    </span>
  </div>
</template>

<script>
  export default {
    name: 'banner',
    components: {},
    props: {
      obj: {
        type: Object,
        default: () => {}
      },
    },
    data(){
      return {
        publicVersion: ''
      }
    },
    methods: {
      clickHandle() {
        this.$emit('close')
      },
      toland() {
        this.$emit('toland')
      }
    },
    created() {
      console.log('window.common',window.common)
      this.publicVersion = window.common && window.common.Gdata.version;
    }
  }
</script>
<style>
  .global-comp {
    position: relative;
  }

  .global-banner {
    position: relative;
    z-index: 2;
    width: 100%;
  }

  .close-icon {
    position: absolute;
    top: 20px;
    right: 20px;
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url(./images/close.png) no-repeat center;
    background-size: 100% 100%;
    z-index: 2;
  }
</style>