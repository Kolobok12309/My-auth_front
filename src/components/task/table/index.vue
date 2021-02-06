<template>
  <DataTable
    :title="title"
    :items="tasks"
    :pending="pending"
    :page="page"
    :perPage="perPage"
    :totalCount="totalCount"
    @rowSelect="onRowSelect"
  >
    <template #empty>
      <div class="p-text-center">
        Задачи не найдены
      </div>
    </template>

    <Column
      field="id"
      header="#"
    />

    <Column
      field="title"
      header="Название"
    />

    <Column
      field="status"
      header="Статус"
      headerClass="p-text-center"
      bodyClass="p-text-center"
    >
      <template #body="{ data: { status } }">
        <TaskStatus :value="status"/>
      </template>
    </Column>

    <Column
      field="group"
      header="Отдел"
      headerClass="p-text-center"
      bodyClass="p-text-center"
    >
      <template #body="{ data: { group } }">
        <Group :group="group" />
      </template>
    </Column>

    <Column
      field="user"
      header="Пользователь"
      headerClass="p-text-center"
      bodyClass="p-text-center"
    >
      <template #body="{ data: { user } }">
        <User :user="user" />
      </template>
    </Column>
  </DataTable>
</template>

<script src="./index.js"></script>
