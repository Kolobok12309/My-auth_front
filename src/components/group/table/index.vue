<template>
  <DataTable
    :title="title"
    :items="groups"
    :pending="pending"
    :page="page"
    :perPage="perPage"
    :totalCount="totalCount"
    @rowSelect="onRowSelect"
  >
    <template #empty>
      <div class="p-text-center">
        Отделы не найдены
      </div>
    </template>

    <Column
      field="id"
      header="#"
    />

    <Column
      field="name"
      header="Название отдела"
    />
  </DataTable>
</template>

<script src="./index.js"></script>
