<template>
  <div class="chat-form">
  <div><textarea rows="5" /></div>
  <div><button> Submit </button></div>
  </div>
</template>

<script>

export default {
  name: 'ChatForm',
  components: {
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style scoped>
.chat-form {
    margin:0 0 3px;
    padding:0;
    width: 98%;
    }
textarea {
    width: 100%;
    }
    button {
        padding: .5em 1em;
        }
</style>
