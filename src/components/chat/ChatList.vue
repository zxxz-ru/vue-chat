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
      /* eslint-disable-next-line */
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
    border-top: .0625em solid lightgrey;
    width: 19.6em;
    margin: 0;
    padding:0;
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
    }
#scroll {
    padding-top: .125em;
    width: 19.6em;
    height: 14.6em;
    overflow: auto;
    }
#post-list {
    list-style-type: none;
    margin:0;
    padding:0;

}
</style>
