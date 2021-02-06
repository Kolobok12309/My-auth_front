<template>
  <Dropdown
    class="user-picker"
    optionLabel="username"
    optionValue="id"
    dataKey="id"
    filterPlaceholder="Поиск"
    emptyFilterMessage="Пользователи не найдены"
    filter
    showClear
    :options="users"
    :placeholder="placeholder"
    @filter="searchUsers"
  />
</template>

<script src="./index.js"></script>

<style
  src="./index.styl"
  lang="stylus"
  scoped
></style>
