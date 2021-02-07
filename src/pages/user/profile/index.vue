<template>
  <div class="profile">
    <TaskFilter
      :pending="pending"
      v-model:text="filter.text"
      v-model:status="filter.status"
      v-model:groupId="filter.groupId"
      :hideGroup="hasGroup"
      hideUser
      @submit="onFilter"
    />

    <TaskTable
      :title="tableTitle"
      :tasks="tasks"
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
