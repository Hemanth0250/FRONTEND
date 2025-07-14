<template>
  <!-- Using Mustache syntax for data binding -->
   <!-- there are two ways to bind data in Vue.js: Mustache syntax and v-text directive -->
   <!-- best practice is to use v-text directive -->
  <div>{{ greet }} {{ name }}</div> 
  <!-- v-html directive is used to render HTML content -->
  <div v-html="hobby"></div>
  <div v-text="email"></div>
  <div v-html="hack"></div>
  <!-- attribut binding using v-bind: directive -->
  <div class="underline" v-bind:id="headingid">This is a heading</div>
  <h2 v-bind:id="headingid">{{ headingid }}</h2>
  <button v-bind:disabled=en>Bind</button>
 <!-- v-bind:class is used to bind class to an element -->
  <h2 class="underline" v-bind:class="status">Status</h2>
  <h2 v-bind:class="ispromoted && 'promoted'">Promoted movie</h2>
  <h2 v-bind:class="isSoldout ? 'sold-out' : 'new'">Sold out movie</h2>
  
  

  <!-- <div v-text="name">hemu</div> This will not work as v-text is used to set text content -->

</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      greet : 'Hello',
      name: 'Welcome to my Vue.js App ',
      email : 'hemu@gmail.com',
      hobby : '<b>coding</b>',
      hack : `<a href="#" onclick="alert(' you have been Hacked!')">Click me for prize</a>`,
      headingid: 'heading for v-bind',
      isdisplay: true,
      status:'danger',
      ispromoted: true,
      isSoldout: false
    }
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
/* class binding */
.underline {
  text-decoration: underline;
}

.promoted{
  font-style: italic;
  color: rgb(128, 0, 0);
}
.new{
  font-style: italic;
  color: rgb(0, 128, 0);
}
.sold-out{
  font-style: italic;
  color: rgb(251, 255, 0);
}
</style>
