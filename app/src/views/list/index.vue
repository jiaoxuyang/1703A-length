<template>
  <div>
    
  </div>
</template>
<script>
import { mapState,mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["list"])
  },
  methods:{
    ...mapActions(["getList"])
  },
  created(){
    this.getList()
  }

};
</script>


<style lang="scss">
</style>

