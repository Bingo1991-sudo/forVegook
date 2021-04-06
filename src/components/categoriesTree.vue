<template>
  <div class="categories-wr">
    <h1>{{msg}}</h1>
    <ul>
      <li v-for="item in categories" :key="item.id">
        {{ item.name }}<br>
        <ul>
          <li v-for="subcategory in item.childs" :key="subcategory.id">
            {{subcategory.name}}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'categoriesTree',
  props: {
    msg: String
  },
  data() {
    return {
      categories: null
    }
  },
  mounted() {
    this.loadCategories()
  },

  methods: {
    loadCategories(){
      axios
          .get('https://api.vegook.com/search/get-category-tree')
          .then (response => (this.categories = response.data))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
  text-align: left;
  padding: 10px 0;
  color: rgb(85, 86, 91);
  font-size: 16px;
}
li li {
  padding: 2px 0;
}
a {
  color: #42b983;
}
</style>
