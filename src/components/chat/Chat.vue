<template>
  <div class="chat">
  <ChatForm />
  <ChatList v-bind:posts='posts'/>
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
          id: 0,
          time: 'April 26, 2018 22:28',
          name: 'User_12421099350439343348934893489389352345',
          msg: 'Hello. Very long and message that not fit inside container.\
          Must wrap.',
          },
      {
          id: 1,
          time: 'April 26, 2018 22:29',
          name: 'User_2',
          msg: 'Hello Yourself.',
          },
      {
          id: 2,
          time: 'April 26, 2018 22:29:30',
          name: 'User_1',
          msg: 'Who are You?',
          },
      {
          id: 3,
          time: 'April 26, 2018 22:28',
          name: 'User_3',
          msg: 'HI!',
          },
      {
          id: 4,
          time: 'April 26, 2018 22:28',
          name: 'User_1',
          msg: 'What is up?',
          },
      {
          id: 5,
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
          id: 7,
          time: 'April 26, 2018 22:28',
          name: 'User_3',
          msg: 'Who is here!?',
          },
      {
          id: 8,
          time: 'April 26, 2018 22:28',
          name: 'User_1',
          msg: 'Some one',
          },
      {
          id: 9,
          time: 'April 26, 2018 22:28',
          name: 'User_2',
          msg: 'KGB',
          },
      {
          id: 10,
          time: 'April 26, 2018 22:28',
          name: 'User_1',
          msg: 'Ha ha.',
          },
      {
          id: 11,
          time: 'April 26, 2018 22:28',
          name: 'User_3',
          msg: 'I am out of here',
          },
      {
          id: 12,
          time: 'April 26, 2018 22:28',
          name: 'User_2',
          msg: 'Ha, ha',
          },
      ],
    };
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
