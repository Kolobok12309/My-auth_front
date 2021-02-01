<template>
  <div class="p-d-flex">
    <Table
      :title="title"
      :items="tasks"
      :pending="pending"
      :page="meta && meta.page"
      :perPage="meta && meta.perPage"
      :totalCount="meta && meta.totalCount"
      class="tasks-card p-mx-auto p-col-6"
      @rowSelect="onRowSelect"
      @page="onChangePage"
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
      />

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
  </div>
</template>

<script src="./index.js"></script>

<style
  src="./index.styl"
  lang="stylus"
  scoped
></style>
