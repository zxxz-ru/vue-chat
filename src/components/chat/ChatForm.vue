<template>
  <div class="chat-form">
  <div>
  <textarea rows="3" v-model="msg"
  placeholder="Enter You Message here." >
  </textarea>
  </div>
  <div><button  v-on:click="sendMessage">Submit</button></div>
  </div>
</template>

<script>

export default {
  name: 'ChatForm',
  data() {
    return {
      msg: '',
    };
  },
  methods: {
      /* eslint-disable-next-line */
      sendMessage: function () {
          this.$parent.submitPost(this.msg);
          this.msg = '';
          },
      },
};
</script>

<style scoped>
.chat-form {
    margin:0 0 .25em;
    padding:0;
    width: 19.6em;
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
    }
textarea {
    font-size: 1rem;
    white-space: pre-line;
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
    min-width: 98%;
    width: 98%;
    margin: .25rem 1% .25rem 1%;
    border: .0625rem solid lightgrey;
    }
    button {
        font-size: .8125em;
        padding: .5rem 1.875rem;
        margin: 0 auto .25rem;
        }
</style>
