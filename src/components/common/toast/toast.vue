<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'toast',
  props: {},
  components: {},
  data () {
    return {
      message:"",
      isShow :false
    }
  },
  computed: {},
  watch: {},
  methods: {
    show(message,time){
      this.message = message
      this.isShow = true
      setTimeout(() => {
      this.message = ""
      this.isShow = false

      },time)

    }
  }
}
</script> 

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px 20px;
  border-radius: 10px;
  color: var(--color-tint);
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 11;
}

</style>
