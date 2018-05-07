export default {
install(Vue) {
    Vue.mixin({
        methods: {
      /* eslint-disable-next-line */
  init: function() {
      /* eslint-disable-next-line */
    Vue.prototype.websocket = new WebSocket('wss://echo.websocket.org/');
    this.websocket.onopen = (evt) => { this.onOpen(evt); };
    this.websocket.onclose = (evt) => { this.onClose(evt); };
    this.websocket.onmessage = (evt) => { this.onMessage(evt); };
    this.websocket.onerror = (evt) => { this.onError(evt); };
  },

      /* eslint-disable-next-line */
  onOpen: function (evt) {
    this.writeToScreen('Welcome to Echo Chat.', 'Server');
    this.disconnectServer();
  },

      /* eslint-disable-next-line */
  onClose: function (evt) {
    this.writeToScreen('DISCONNECTED', 'Server');
  },

      /* eslint-disable-next-line */
  onMessage: function (evt) {
      try {
          if (evt.data === 'hh') {
          throw new Error('bad word');
          }
    this.writeToScreen(evt.data, 'Server');
      } catch (e) {
          // just to test try catch
    this.writeToScreen(`O, this is a ${e.message}. Be polite, please.`, 'Server');
      }
  },

      /* eslint-disable-next-line */
  onError: function (evt) {
      const msg = 'ERROR '.concat(evt.data);
    this.writeToScreen(msg, 'SYSTEM');
  },

      /* eslint-disable-next-line */
  doSend: function (message) {
      if (this.websocket.readyState !== 1) {
      this.init();
   this.websocket.onopen = () => {
    this.cancel = false;
    this.writeToScreen(message, this.current_user);
    this.websocket.send(message);
    this.disconnectServer();
   };
      } else {
    this.cancel = false;
    this.writeToScreen(message, this.current_user);
    this.websocket.send(message);
      }
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
      /* eslint-disable-next-line */
    disconnectServer: async function() {
    const p = new Promise(resolve =>
        setTimeout(() => { resolve(true); }, 4000));
        await p;
        if (this.cancel) {
            this.websocket.close();
        } else {
        this.cancel = !this.cancel;
        this.disconnectServer();
        }
    },
            }, // methods
        }); // mixin

      /* eslint-disable-next-line */
//  Vue.prototype.websocket = new WebSocket('wss://echo.websocket.org/');
    },
  cancel: true,
};
