<template>
  <Spinner
    v-if="pending"
    v-bind="$attrs"
  />

  <slot v-else />
</template>

<script src="./index.js"></script>
