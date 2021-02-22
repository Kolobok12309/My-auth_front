<template>
  <RouterLink
    v-if="user"
    :to="`/user/${user.id}/profile`"
  >
    {{ user.username }}#{{ user.id }}
  </RouterLink>

  <span v-else>
    -
  </span>
</template>

<script src="./index.js"></script>
