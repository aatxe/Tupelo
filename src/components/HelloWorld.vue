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
            <li class="channel current">#pdgn</li>
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
    color: #ccc;
}

#server-list ul {
    list-style: none;
    padding: 0;
    margin: 1em 0;
    color: #aaa;
}

#server-list ul li.server {
    margin-bottom: 1em;
}

#server-list ul ul {
    margin: 0.5em 0.2em;
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
    background: #2B2C31;
    z-index: 2;
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
    display: grid;
    grid-template-rows: 2.2em auto;
}

#chat-buffer #topic {
    align-self: top;
    padding: 0.5em;
    overflow: hidden;
    background: #2F3136;
    border-bottom: 1px solid #232428;
    box-shadow: 1px 1px 1px #232428;
    z-index: 1;
}

#chat-buffer #messages {
    align-self: end;
    max-height: calc(100% - 0.2em);
    overflow: scroll;
    background: #303339;
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
    background: #35393F;
}

#chat-input input {
    width: calc(100% - 2em);
    border: 0;
    padding: 0.5em 1em;
    border-radius: 0.3em;
    background: #474B53;
    color: #cccccc;
}

#chat-input input::placeholder {
    color: #aaaaaa;
}
</style>
