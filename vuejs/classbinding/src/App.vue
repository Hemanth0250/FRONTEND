<template>
  <h2 v-bind:class="['new','promoted']">Newly promoted movie</h2>
  <h2 v-bind:class="[isPromoted && 'promoted',isSoldout ? 'soldout' : 'new']">Array conditional promoted movie</h2>
  <h2 v-bind:class="{
    promoted: isPromoted,
    new: !isSoldout,
    'sold-out': isSoldout
  }">object conditional movie</h2>
  <h2 v-bind:style="{
    color: highlightColor,
    fontSize: headersize,
    textDecoration: 'underline',
    fontStyle: 'oblique',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    
  }">inline style</h2>
  <h1 v-bind:style="headerStyleObject">HEMU</h1>
  <h2 v-bind:style="[successStyleObject,baseStyleObject]">Success style</h2>
  <h2 v-bind:style="[successStyleObject,baseStyleObject,dangerStyleObject]">Danger Style</h2>
  
</template>

<script>





export default {
  name: 'App',
  data() {
    return {
      heagingID:'heading',
      isDisable: false,
      status: 'success',
      isPromoted: true,
      isSoldout: true,
      highlightColor: 'orange',
      headersize: '50px',
      headerStyleObject: {
        color: 'red',
        fontSize: '20px',
        textDecoration: 'underline',
        fontStyle: 'oblique',
        textTransform: 'lowercase',
        fontWeight: 'bold'

      },
      baseStyleObject: {
        color: 'blue',
        fontSize: '30px',
        textDecoration: 'none',
        fontStyle: 'normal',
        textTransform: 'capitalize',
        fontWeight: 'normal'
      },
      successStyleObject: {
        color: 'green',
        fontSize: '25px',
        textDecoration: 'underline',
        fontStyle: 'italic',
        textTransform: 'uppercase',
        fontWeight: 'bold'
      },
      dangerStyleObject: {
        color: 'darkred',
        backgroundColor: 'red',
        fontSize: '20px',
        textDecoration: 'line-through',
        fontStyle: 'normal',
        textTransform: 'capitalize',
        fontWeight: 'bold'
      },
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
