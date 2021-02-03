<template>
  <Table
    :title="title"
    :items="tasks"
    :pending="pending"
    :page="page"
    :perPage="perPage"
    :totalCount="totalCount"
  >
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
        {{ (group && `${group.name}#${group.id}`) || '-' }}
      </template>
    </Column>

    <Column
      field="user"
      header="Пользователь"
      headerClass="p-text-center"
      bodyClass="p-text-center"
    >
      <template #body="{ data: { user } }">
        {{ (user && `${user.username}#${user.id}`) || '-' }}
      </template>
    </Column>
  </Table>
</template>

<script src="./index.js"></script>
