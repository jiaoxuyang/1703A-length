<template>
  <div class="list">
    <dl v-for="(item) in list" :key="item.id" @click="add(item.id)">
      <dt>{{item.spuName}}</dt>
      <dd>
        <li>{{item.weight}}</li>
        <li>{{item.price}}</li>
      </dd>
    </dl>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["list"])
  },
  methods: {
    ...mapActions(["getList"]),
    add(id) {
      this.$router.push("/detail" + id);
    }
  },
  created() {
    this.getList();
  }
};
</script>

<style lang="scss">
.list {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
}
dl {
  width: 45%;
  height: 150px;
}
</style>

