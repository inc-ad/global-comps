<template>
  <div class="global-banenr">
    <wrapper-comp :obj="obj" @close="close" @toland="toLandDetail"></wrapper-comp>
  </div>
</template>

<script>
  import dhoc from '../../components/DHOC';
  import comp from './comp';
  const wrapperComp = dhoc(comp);
  export default {
    name: 'banner',
    components: {
      wrapperComp
    },
    props: {
      obj: {
        type: Object,
        default: () => {}
      }
    },
    methods:{
      close(){
        console.log('close');
        this.$emit('close');
      },
      toLandDetail(){
        console.log('toLandDetail');
         this.$emit('toland');
      }
    }
  }
</script>
<style>
  .global-banner {
    position: relative;
    z-index: 2;
    width: 100%;
  }
</style>