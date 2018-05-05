export default {
install(Vue) {
    Vue.mixin({
        methods: {
      /* eslint-disable-next-line */
  init: function() {
    // Vue.prototype.websocket = new WebSocket('ws://echo.websocket.org/');
    this.websocket.onopen = (evt) => { this.onOpen(evt); };
    this.websocket.onclose = (evt) => { this.onClose(evt); };
    this.websocket.onmessage = (evt) => { this.onMessage(evt); };
    this.websocket.onerror = (evt) => { this.onError(evt); };
  },

      /* eslint-disable-next-line */
  onOpen: function (evt) {
    this.writeToScreen('Welcome to Echo Chat.', 'Server');
  },

      /* eslint-disable-next-line */
  onClose: function (evt) {
    this.writeToScreen('DISCONNECTED', 'Server');
  },

      /* eslint-disable-next-line */
  onMessage: function (evt) {
    this.writeToScreen(evt.data, 'Server');
  },

      /* eslint-disable-next-line */
  onError: function (evt) {
      const msg = 'ERROR '.concat(evt.data);
    this.writeToScreen(msg, 'SYSTEM');
  },

      /* eslint-disable-next-line */
  doSend: function (message) {
    this.writeToScreen(message, this.current_user);
    this.websocket.send(message);
  },

      /* eslint-disable-next-line */
  writeToScreen: function (message, usr) {
          const id = this.posts.length;
          const time = Date();
          const name = usr;
          const msg = message;
          this.posts.unshift({
              id,
              time,
              name,
              msg,
              });
  },
            },
        });

      /* eslint-disable-next-line */
  Vue.prototype.websocket = new WebSocket('ws://echo.websocket.org/');
    },
};
