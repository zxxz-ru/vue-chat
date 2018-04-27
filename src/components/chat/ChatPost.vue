<template>
  <div class="chat-post">
  <PostTitle v-bind:name="post.name" v-bind:time="post.time"></PostTitle>
  <div id="msg">{{post.msg}}</div>
  </div>
</template>

<script>
import PostTitle from './PostTitle';

export default {
  name: 'ChatPost',
  components: {
    PostTitle,
  },
  props: ['post'],
};

</script>

<style scoped>
.chat-post{
border: 1px solid black;
width : 98%;
margin: 0 0 .5em 0;
padding:0;
}
#msg {
white-space: wrap;
margin: 0;
padding: 0 .5em;
text-align: left;
}
</style>
