<template>
  <div>
    <TaskFilter
      :pending="pending"
      v-model:title="filter.title"
      v-model:status="filter.status"
      v-model:groupId="filter.groupId"
      v-model:userId="filter.userId"
      @submit="onFilter"
    />

    <TaskTable
      title="Список задач"
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
