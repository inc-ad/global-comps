
export default function Wrapper(baseComp) {
    return {
     data() {
      return {};
     },
     methods:{
        handleClose(){
            this.$emit('close')
        } ,
        handleToDetail(){
          console.log('hoc 跳转')
            this.$emit('toLand')
        }
     },
     mounted() {
         console.log('hoc 曝光')
     },
     render(h) {
         console.log(Object.keys(this.$slots))
        const slots = Object.keys(this.$slots)
          .reduce((arr, key) => arr.concat(this.$slots[key]), [])
          .map(vnode => {
            vnode.context = this._self
            return vnode
          })
        return h(baseComp, {
          on: {
            close: this.handleClose, //新组件绑定click事件
            toland:this.handleToDetail
          },
          props: this.$props,
          // 透传 scopedSlots
          scopedSlots: this.$scopedSlots,
          attrs: this.$attrs
        }, slots)
     }
    }
}
   