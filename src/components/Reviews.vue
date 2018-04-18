<template>
  <div class="column">
   <!-- <img src="/static/images/red-bird.png"/>-->
    <h1>Nilsson Tailoring</h1>
    <hr width="300"/>
    <br/>
    <br />
    <h1>Nilsson Tailoring</h1>
    <form v-on:submit.prevent="register">
      <p>1. Choose a user name (this is how you will be known by others on Red Bird).</p>
      <input class="narrow" v-model="username" placeholder="User Name">
      <p>2. Create an account.</p>
      <input class="wide" v-model="name" placeholder="First and Last Name"><br/>
      <input class="narrow" v-model="email" placeholder="Email Address">
      <input class="narrow" type="password" v-model="password" placeholder="Password">
      <button class="alternate" type="submit">Register</button>
    </form>
    <p class="error">{{registerError}}</p>    
  </div>
</template>

<script>
 export default {
   name: 'WelcomePage',
   data () {
     return {
       username: '',
       email: '',
       password: '',
       name: '',
     }
   },
   computed: {
     registerError: function() {
       return this.$store.getters.registerError;
     },
   },
   methods: {
     register: function() {
       this.$store.dispatch('register',{
	 username: this.username,
         email: this.email,
         password: this.password,
	 name: this.name,
       });
     }
   }
 }
</script scoped>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
 img {
     width: 100px;
 }

 h1 {
     margin-bottom: 0px;
 }
 h2 {
     margin-top: 0px;
     font-size: 1.2em;
     font-weight: normal;
     margin-bottom: 50px;
 }
 .narrow {
     width: 170px;
 }
 .wide {
     width: 370px;
 }
 </style>
 
 <style>
 #nav {
  width: 700px;
  margin: 0 auto;
  list-style: none;
}

  #nav li {
    float: left;
  }

  #nav a {
    display: block;
    text-align: right;
    width: 80px; /* fixed width */
    text-decoration: none;
  }
 body {
  /*  background-image: url(http://www.photos-public-domain.com/wp-content/uploads/2011/04/natural-tan-canvas-fabric-texture.jpg);*/
  background-image: url(http://cdn01.wallconvert.com/_media/wallpapers_1920x1080/1/4/pin-stripe-fabric-36981.jpg);
  font-family: 'Lato', sans-serif;
  min-height: 400px;
  margin-bottom: 60px;
  color: white;
  text-align: center;
  clear: both;
  height: 100%;
  overflow: scroll;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
}
</style>