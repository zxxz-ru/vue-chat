# vue-chat

Vue Component to mimic Chat Room. As Chat Partner used
[websocket.org](#http://websocket.org/) service. As data carrier used
WebSocket.
Techical Assignment:
> Make simple chat with Vue 2, that You be proud of. In order to see how
> quick You be able to get on with new Technology.

### Table of Contents: 
[External Links](#external-links)  
[Build Setup](#build-setup)  
[Description](#description)  

## Description

When vue-chat is loaded it connects to echo server. User may type some
message, this message will be echoed to vue-chat. After four
seconds vue-chat drops connection, to simulate user gone/inactive. When user
is back and type some message vue-chat makes new WebSocket, connects to
echo service and sends message. Since simple echo service is used no data
stored on server and no data requested from server.

###### [Table of Contents](#table-of-contents)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
*****Note:** for Chat enter `127.0.0.1:8080/#/chat` in browser address bar.

###### [Table of Contents](#table-of-contents)
***************
## External links

For a detailed explanation on how things work, check out
- [guide](http://vuejs-templates.github.io/webpack/)
- [docs for vue-loader](http://vuejs.github.io/vue-loader)
- [websocket.org echo](http://websocket.org/echo.html)
- [vue-cli doc](https://github.com/vuejs/vue-cli/blob/dev/docs/README.md)

###### [Table of Contents](#table-of-contents)
