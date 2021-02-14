<template>
  <div>
    <GroupFilter
      :pending="pending"
      v-model:name="filter.name"
      @submit="onFilter"
    />

    <GroupsTable
      title="Список отделов"
      :groups="groups"
      :pending="pending"
      :page="meta && meta.page"
      :perPage="meta && meta.perPage"
      :totalCount="meta && meta.totalCount"
      class="p-mt-3"
      @page="onChangePage"
    />
  </div>
</template>

<script src="./index.js"></script>
