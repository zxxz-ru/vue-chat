<template>
  <div class="post-title">
    <h5 id="p-name">{{this.name}}</h5>
    <p id="p-time">{{timeString}}</p>
  </div>
</template>

<script>

export default {
  name: 'PostTitle',
  props: ['name', 'time'],
  computed: {
    // eslint-disable-next-line
    timeString: function () {
          return new Date(this.time).toLocaleString();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.post-title {
    margin:0;
    overflow: hidden;
}
#p-time {
    margin:0;
    display: inline;
    color: grey;
    font-size: 1em;
    }
#p-name {
    margin: 0;
    display: inline;
}
</style>
