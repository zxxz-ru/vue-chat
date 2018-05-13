<template>
  <div class="chat" >
  <ChatForm />
  <ChatList v-bind:posts="posts"/>
  </div>
</template>

<script>
import Vue from 'vue';
import ChatList from './ChatList';
import ChatForm from './ChatForm';
import ws from './ws';

Vue.use(ws);
export default {
  name: 'Chat',
  components: {
    ChatList,
    ChatForm,
  },
  data() {
    return {
      posts: [],
  current_user: 'You',
    };
},
  methods: {
      /* eslint-disable-next-line */
      submitPost: function (msg) {
          if (msg.length === 0) {
              return;
              }
              this.doSend(msg);
          },
      },
      /* eslint-disable-next-line */
      mounted: function () {
        window.addEventListener('load', this.init, false);
      },
      /* eslint-disable-next-line */
      beforeDestroy: function () {
        this.websocket.close();
          },
  };
</script>

<style scoped>
.chat {
border: 1px solid black;
border-radius: 10px;
width: 300px;
height: 350px;
padding: 1%;
margin: 2em auto;
}
</style>
