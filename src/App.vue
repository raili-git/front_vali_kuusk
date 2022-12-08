<template>
  <div id="app">

    <div v-if="displayWithSeller">
      <nav>
        <router-link to="/trees">Müügis olevad puud</router-link> |
        <router-link to="/new-tree">Lisa puu</router-link> |
        <router-link to="/history">Müügiajalugu</router-link>
      </nav>
    </div>


    <router-view @loginUpdateEvent="updateStatus"/>
  </div>
</template>
<script>
export default {
  name: "App",
  data: function (){
    return{
      displayWithSeller: false,
      userId: sessionStorage.getItem('userId')
    }
  },
  methods: {
    updateStatus: function (){
      alert('toimus updateStatus')
      this.userId = sessionStorage.getItem('userId')
      this.displayWithSeller = this.userId !== null
    }

  },
  mounted() {
    this.updateStatus()
  }
}




</script>
<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; /* tektsi värv*/

@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
