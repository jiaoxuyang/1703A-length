<template>
  <div>
    <dl v-for="(item) in detail" :key="item.id" @click="add(item.id)">
      <dt>{{item.spuName}}</dt>
      <dd>
        <li>{{item.weight}}</li>
        <li>{{item.price}}</li>
      </dd>
    </dl>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
  created() {
    let { id } = this.$route.params;
    this.getDetail(id);
  },
  methods: {
    ...mapMutations(["getDetail"])
  },
  computed: {
    ...mapState(["detail"])
  }
};
</script>
<style lang="scss">
</style>
