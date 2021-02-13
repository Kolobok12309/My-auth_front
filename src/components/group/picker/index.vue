<template>
  <Dropdown
    v-model="compValue"
    class="group-picker"
    optionLabel="name"
    optionValue="id"
    dataKey="id"
    placeholder="Отдел"
    filterPlaceholder="Поиск"
    emptyFilterMessage="Отделы не найдены"
    filter
    showClear
    :options="allGroups"
    @filter="searchGroups"
  />
</template>

<script src="./index.js"></script>

<style
  src="./index.styl"
  lang="stylus"
  scoped
></style>
