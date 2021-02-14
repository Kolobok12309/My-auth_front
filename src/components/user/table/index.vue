<template>
  <DataTable
    :title="title"
    :items="users"
    :pending="pending"
    :page="page"
    :perPage="perPage"
    :totalCount="totalCount"
    @rowSelect="onRowSelect"
  >
    <template #empty>
      <div class="p-text-center">
        Пользователи не найдены
      </div>
    </template>

    <Column
      field="id"
      header="#"
    />

    <Column
      field="username"
      header="Имя пользователя"
    />

    <Column
      field="email"
      header="E-mail"
    />

    <Column
      field="role"
      header="Роль"
      headerClass="p-text-center"
      bodyClass="p-text-center"
    >
      <template #body="{ data: { role } }">
        <RoleView :value="role"/>
      </template>
    </Column>

    <Column
      field="group"
      header="Отдел"
      headerClass="p-text-center"
      bodyClass="p-text-center"
    >
      <template #body="{ data: { group } }">
        <GroupView
          v-if="group"
          :group="group"
        />

        <span v-else>
          Не выбран
        </span>
      </template>
    </Column>
  </DataTable>
</template>

<script src="./index.js"></script>
