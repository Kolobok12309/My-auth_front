<template>
  <RouterLink :to="'/group/' + group.id">
    {{ group.name }}#{{ group.id }}
  </RouterLink>
</template>

<script src="./index.js"></script>
