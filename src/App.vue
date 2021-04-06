<template>
  <div id="app">
    <catagories-tree msg="Дерево категорий"/>
  </div>
</template>

<script>
import catagoriesTree from './components/categoriesTree.vue'

export default {
  name: 'App',
  components: {
    catagoriesTree
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
