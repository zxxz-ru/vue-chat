<template>
  <div class="chat-list">
  <div id="scroll">
    <ul id="post-list">
    <li is="ChatPost" v-for="item in posts"
    v-bind:post="item"
    v-bind:key="item.id"></li>
    </ul>
    </div>
  </div>
</template>

<script>
import ChatPost from './ChatPost';

export default {
  name: 'ChatList',
  props: ['posts'],
  components: {
    ChatPost,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chat-list{
    border-top: 2px solid grey;
    width:100%;
    margin: 0;
    padding: 0.5em 0 0 0;
    }
#scroll {
    width: 100%;
    height: 15em;
    overflow: auto;
    }
#post-list {
    list-style-type: none;
    margin:0;
    padding:0;

}
</style>
