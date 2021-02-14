<template>
  <div>
    <TaskFilter
      v-model:title="filter.title"
      v-model:status="filter.status"
      v-model:userId="filter.userId"
      :pending="pending"
      :groupId="filter.groupId"
      hideGroup
      @submit="onFilter"
    />

    <TaskTable
      title="Задачи отдела"
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
