<template>
  <Dropdown
    class="group-picker"
    optionLabel="name"
    optionValue="id"
    dataKey="id"
    placeholder="Отдел"
    emptyFilterMessage="Отделы не найдены"
    filter
    showClear
    :options="groups"
    @filter="searchGroup"
  />
</template>

<script src="./index.js"></script>

<style
  src="./index.styl"
  lang="stylus"
  scoped
></style>
