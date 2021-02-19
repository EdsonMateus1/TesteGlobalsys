<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Lato", sans-serif;
}
html {
  overflow-x: hidden;
}

body,
html,
#app {
  height: 100%;
}

button {
  border: none;
  background: none;
  box-shadow: none;
}

button:hover {
  cursor: pointer;
}
button:focus {
  outline: none;
}

.font-pruduct-title {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: -0.2px;
  color: #1d1d1b;
}
.font-pruduct-price {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;
  color: #c81a78;
}

.font-button {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 17px;
  color: #ffffff;
}
.button-active {
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
}
</style>
