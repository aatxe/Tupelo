<template>
<section id="root">
  <section id="title-bar">
    <section id="preferences">
      <font-awesome-icon :icon="gear"/>
    </section>
  </section>
  <section id="server-list">
    <ul>
      <li class="server">
        <font-awesome-icon :icon="server"/>
        <span class="server-name">FyreChat</span>
        <ul>
          <li class="channel">#vana</li>
          <li class="channel">#vana-commits</li>
        </ul>
      </li>
      <li>
        <font-awesome-icon :icon="server"/>
        <span class="server-name">PdgnCo</span>
        <ul>
          <li class="channel current">#pdgn</li>
          <li class="channel">#merveille</li>
        </ul>
      </li>
    </ul>
  </section>
  <section id="buffer-view">
    <section id="chat-buffer">
      <section id="topic">
        <span class="topic-msg">
          PdgnCo: https://pdgn.co/ | Canary: https://pdgn.co/canary.txt | Stats: http://ircstats.wogloms.com/pisg/pdgn
        </span>
      </section>
      <section id="messages">
        <div class="message" v-for="msg in messages" :key="msg.id">
          <span class="message-time">{{ msg.time }}</span>
          <span class="message-author">{{ msg.author }}</span>
          <span class="message-body">{{ msg.content }}</span>
        </div>
      </section>
      <section id="chat-input">
        <input placeholder="Send message...">
      </section>
    </section>
    <section id="chan-list">
      <ul>
        <li class="user">
            <div class="role role-voice"></div>
            <div class="nickname">awe</div>
          </li>
          <li class="user">
            <div class="role role-voice"></div>
            <div class="nickname">awebot</div>
          </li>
          <li class="user">
            <div class="role"></div>
            <div class="nickname">big_meech</div>
          </li>
        </ul>
      </section>
    </section>
  </section>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { faCog, faServer } from '@fortawesome/fontawesome-free-solid'

export default {
  name: 'HelloWorld',

  components: {
    FontAwesomeIcon
  },

  computed: {
    gear () {
      return faCog
    },

    server () {
      return faServer
    }
  },

  data: function () {
    return {
      messages: Array(100).fill().map((_, i) => {
        return { id: i, time: '20:08', author: 'awe', content: 'ay le mayo' }
      })
    }
  }
}
</script>

<style>
#root {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 6fr;
    grid-template-rows: 1.5em auto;
    color: #ccc;
    background: #2F3136;
}

#title-bar {
    grid-column: span 2;
    background: #202225;
    /* background: #2A2C31; */
    height: 1.5em;
    display: grid;
}

#preferences {
    align-self: center;
    justify-self: right;
    padding: 0.25em 0.4em;
}

#server-list ul {
    list-style: none;
    padding: 0;
    margin: 1em 0.5em;
    color: #aaa;
}

#server-list ul li.server {
    margin-bottom: 1em;
    white-space: nowrap;
    text-overflow: ellipsis;
}

#server-list ul ul {
    margin: 0.5em 0;
}

#server-list li.channel {
    padding: 0.5em;
    margin: 0.2em 0;
}

#server-list .channel:hover {
    background: #353940;
    border-radius: 0.2em;
    color: #bbb;
}

#server-list .channel.current {
    font-weight: bold;
    background: #3C4148;
    border-radius: 0.2em;
    color: #ccc;
}

#buffer-view {
    display: grid;
    grid-template-columns: 6fr 1fr;
}

#server-list, #chat-buffer #messages, #chan-list {
    padding: 0.1em 0.5em;
}

#server-list, #chan-list {
    background: #2F3136;
    z-index: 2;
    overflow-y: scroll;
    margin: 0 0.2em;
}

#chan-list ul {
    list-style: none;
    margin: 0;
    padding: 1em;
}

#chan-list li {
    margin: 0.3em 0;
}

#chan-list .role, #chan-list .nickname {
    display: inline-block;
    vertical-align: middle;
}

#chan-list ul {
    white-space: nowrap;
}

#chan-list .role {
    display: inline-grid;
    justify-content: center;
    align-content: center;
    border-radius: 0.3em;
    width: 1.2em;
    height: 1.2em;
    background: #ccc;
    color: white;
    font-weight: bold;
}

#chan-list .role-voice {
    background: #7eadff;
    background: #0099E0;
}

#chan-list .role-voice::after {
    content: '+';
}

#chat-buffer {
    background: #35393F;
    overflow: hidden;
    max-height: 100%;
    -webkit-app-region: no-drag;
}

#chat-buffer #topic {
    padding: 0.5em;
    background: #353940;
    border-bottom: 1px solid #2A2C30;
    box-shadow: 0 1px 1px #323439;
    height: 1.2em;
    z-index: 1;
    overflow: hidden;
}

#chat-buffer .topic-msg {
    white-space: nowrap;
    text-overflow: ellipsis;
}

#chat-buffer #messages {
    align-self: end;
    overflow-y: scroll;
    max-height: calc(100vh - 10.2em);
    margin: 0.2em;
    padding: 0.5em 2em;
}

#chat-input {
    padding: 1em;
}

.message-time::before {
    content: "[";
}

.message-time::after {
    content: "]";
}

.message-author::before {
    content: "(";
}

.message-author::after {
    content: ")";
}

#chat-input input {
    width: calc(100% - 2em);
    border: 0;
    padding: 0.5em 1em;
    border-radius: 0.3em;
    background: #474B53;
    color: #cccccc;
}

#chat-input input:focus {
    outline: none;
}

#chat-input input::placeholder {
    color: #aaaaaa;
}
</style>
