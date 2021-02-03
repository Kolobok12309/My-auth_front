<template>
  <div class="p-d-flex tasks">
    <TaskTable
      :title="title"
      :items="tasks"
      :pending="pending"
      :page="meta && meta.page"
      :perPage="meta && meta.perPage"
      :totalCount="meta && meta.totalCount"
      class="p-mx-auto p-sm-11 p-md-10 p-xl-8"
      @rowSelect="onRowSelect"
      @page="onChangePage"
      @edit="onEdit"
      @delete="onDelete"
    />

    <TaskSidebar
      v-model:visible="sidebar"
      :selected="selected"
      position="right"
      class="p-sidebar-md"
      @hide="onSidebarHide"
    />
  </div>
</template>

<script src="./index.js"></script>

<style
  src="./index.styl"
  lang="stylus"
  scoped
></style>
