<template>
  <Card class="restore-end-form p-mx-auto">
    <template #title>
      Восстановление пароля
    </template>

    <template #content>
      Ожидайте смены пароля

      <div class="p-mt-3 p-d-flex p-ai-center">
        <ProgressSpinner />
      </div>
    </template>
  </Card>
</template>

<script src="./index.js"></script>

<style
  src="./index.styl"
  lang="stylus"
  scoped
></style>
