<template>
  <div class="chat-form">
  <div>
  <textarea rows="5"  v-model="msg"
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
    margin:0 0 3px;
    padding:0;
    width: 98%;
    }
textarea {
    width: 100%;
    white-space: pre-line;
    }
    button {
        padding: .5em 1em;
        }
</style>
