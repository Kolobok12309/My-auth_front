<template>
  <Toast />

  <Menubar
    :model="navItems"
    class="app-navbar"
  >
    <template #start>
      <img
        alt="logo"
        src="@/assets/logo.png"
        height="30"
        class="p-mr-2"
      >
    </template>
  </Menubar>

  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script src="./index.js"></script>

<style
  src="./index.styl"
  lang="stylus"
  scoped
></style>
