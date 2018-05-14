<template>
  <div class="chat" >
  <ChatForm />
  <ChatList v-bind:posts="posts"/>
  </div>
</template>

<script>
import Vue from 'vue';
// eslint-disable-next-line
import ChatList from './ChatList';
// eslint-disable-next-line
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
      submitPost(msg) {
          if (msg.length === 0) {
              return;
              }
              this.doSend(msg);
          },
      },
      mounted() {
        window.addEventListener('load', this.init, false);
      },
      beforeDestroy() {
        this.websocket.close();
          },
  };
</script>

<style scoped>
.chat {
font-size: 100%;
border-radius: .625em;
width: 20em;
height: 22em;
margin: 0 auto .3em;
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
box-sizing: border-box;
border: .0625em solid black;
}
</style>
