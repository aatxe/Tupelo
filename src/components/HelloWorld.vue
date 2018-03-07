<template>
  <section id="root">
    <section id="server-list">
      <ul>
        <li class="server">
          FyreChat
          <ul>
            <li class="channel">#vana</li>
            <li class="channel">#vana-commits</li>
          </ul>
        </li>
        <li>
          PdgnCo
          <ul>
            <li class="channel">#pdgn</li>
            <li class="channel">#merveille</li>
          </ul>
        </li>
      </ul>
    </section>
    <section id="buffer-view">
      <section id="chat-buffer">
        <section id="topic">
          PdgnCo: https://pdgn.co/ | Canary: https://pdgn.co/canary.txt | Stats: http://ircstats.wogloms.com/pisg/pdgn
        </section>
        <section id="messages">
          <div class="message" v-for="msg in messages" :key="msg.id">
            <span class="message-time">{{ msg.time }}</span>
            <span class="message-author">{{ msg.author }}</span>
            <span class="message-body">{{ msg.content }}</span>
          </div>
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
    <section id="chat-input">
      <input placeholder="Send message...">
    </section>
  </section>
</template>

<script>
export default {
  name: 'HelloWorld',
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
  grid-template-rows: 15fr 1fr;
}

#server-list {
  border-right: 1px solid black;
}

#server-list ul {
  list-style: none;
  margin: 0;
  padding: 1em;
}

#server-list ul li.server {
  margin-bottom: 1em;
}

#server-list ul ul {
  padding: 0.3em 1em;
}

#buffer-view {
  display: grid;
  grid-template-columns: 6fr 1fr;
}

#server-list, #chat-buffer #messages, #chan-list {
  padding: 0.5em;
}

#chan-list {
  border-left: 1px solid black;
}

#chan-list ul {
  list-style: none;
  margin: 0;
  padding: 1em;
}

#chan-list li {
  margin: 0.1em 0;
}

#chan-list .role, #chan-list .nickname {
  display: inline-block;
  vertical-align: middle;
}

#chan-list .role {
  display: inline-grid;
  justify-content: center;
  align-content: center;
  border-radius: 0.3em;
  width: 1.2em;
  height: 1.2em;
  background: #eee;
  color: white;
  font-weight: bold;
}

#chan-list .role-voice {
  background: #7eadff;
}

#chan-list .role-voice::after {
  content: '+';
}

#chat-buffer {
  display: grid;
  grid-template-rows: 2.2em auto;
}

#chat-buffer #topic {
  align-self: top;
  padding: 0.5em;
  border-bottom: 1px solid black;
  overflow: hidden;
}

#chat-buffer #messages {
  align-self: end;
  max-height: calc(100% - 1em);
  overflow: scroll;
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

#chat-input {
  grid-column: span 2;
  padding: 1em;
  border-top: 1px solid black;
}

#chat-input input {
  width: calc(100% - 2em);
  border: 0;
  background: #eee;
  padding: 0.5em 1em;
  border-radius: 0.3em;
}
</style>
