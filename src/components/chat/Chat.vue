<template>
  <div class="chat" >
  <ChatForm />
  <ChatList v-bind:posts="posts"/>
  </div>
</template>

<script>
import ChatList from './ChatList';
import ChatForm from './ChatForm';

export default {
  name: 'Chat',
  components: {
    ChatList,
    ChatForm,
  },
  data() {
    return {
      posts: [
      {
          id: 12,
          time: 'April 26, 2018 22:28',
          name: 'User_12421099350439343348934893489389352345',
          msg: 'Hello. This line is very long. Message that do not fit inside container must wrap.',
          },
      {
          id: 11,
          time: 'April 26, 2018 22:29',
          name: 'User_2',
          msg: 'Hello Yourself.',
          },
      {
          id: 10,
          time: 'April 26, 2018 22:29:30',
          name: 'User_1',
          msg: 'Who are You?',
          },
      {
          id: 9,
          time: 'April 26, 2018 22:28',
          name: 'User_3',
          msg: 'HI!',
          },
      {
          id: 8,
          time: 'April 26, 2018 22:28',
          name: 'User_1',
          msg: 'What is up?',
          },
      {
          id: 7,
          time: 'April 26, 2018 22:28',
          name: 'User_3',
          msg: 'Not much',
          },
      {
          id: 6,
          time: 'April 26, 2018 22:28',
          name: 'User_2',
          msg: 'Arrrggh!',
          },
      {
          id: 5,
          time: 'April 26, 2018 22:28',
          name: 'User_3',
          msg: 'Who is here!?',
          },
      {
          id: 4,
          time: 'April 26, 2018 22:28',
          name: 'User_1',
          msg: 'Some one',
          },
      {
          id: 3,
          time: 'April 26, 2018 22:28',
          name: 'User_2',
          msg: 'KGB',
          },
      {
          id: 2,
          time: 'April 26, 2018 22:28',
          name: 'User_1',
          msg: 'Ha ha.',
          },
      {
          id: 1,
          time: 'April 26, 2018 22:28',
          name: 'User_3',
          msg: 'I am out of here',
          },
      {
          id: 0,
          time: 'April 26, 2018 22:28',
          name: 'User_2',
          msg: 'Ha, ha',
          },
      ],
    current_user: 'root',
    };
  },
  methods: {
      /* eslint-disable-next-line */
      submitPost: function (msg) {
          if (msg.length === 0) {
              return;
              }
          const id = this.posts.length;
          const time = Date();
          const name = this.current_user;
          this.posts.unshift({
              id,
              time,
              name,
              msg,
              });
          },
      },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
