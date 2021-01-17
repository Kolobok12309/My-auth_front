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

  <div class="app-content p-mt-4">
    <router-view/>
  </div>
</template>

<script src="./index.js"></script>

<style
  src="./index.styl"
  lang="stylus"
></style>
