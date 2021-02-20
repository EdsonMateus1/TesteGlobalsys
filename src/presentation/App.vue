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
  letter-spacing: 1.5px;
}
html {
}

body,
html,
#app {
  height: 100%;
  overflow-x: hidden;
  background: #f5f5f5;
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
  font-size: 17px;
  line-height: 16px;
  letter-spacing: 0.8px;
  color: #1d1d1b;
  width: 150px;
}
.font-pruduct-price {
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 18px;
  color: #c81a78;
}
.font-pruduct-price strong {
  font-size: 15px;
  margin-right: 2px;
}

.font-button {
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  color: #ffffff;
}
.button-active {
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
}
.container-modal {
  position: fixed;
  right: 0px;
  top: 0px;
  width: 350px;
  height: 100%;
  background: #f5f5f5;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
  overflow: hidden;
}

.divider {
  border: 0.5px solid #d5d5d5;
  height: 1px;
  margin: 30px 0px;
}

@media (max-width: 1180px) {
  .font-pruduct-title {
    height: 50px;
    text-align: center;
  }
  .container-modal {
    width: 100%;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .container-modal {
    width: 350px;
  }
}
</style>
