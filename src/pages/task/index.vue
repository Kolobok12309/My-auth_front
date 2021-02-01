<template>
  <div class="p-d-flex tasks">
    <Table
      :title="title"
      :items="tasks"
      :pending="pending"
      :page="meta && meta.page"
      :perPage="meta && meta.perPage"
      :totalCount="meta && meta.totalCount"
      class="p-mx-auto p-sm-11 p-md-10 p-xl-8"
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

    <Sidebar
      v-model:visible="sidebar"
      position="right"
      class="p-sidebar-sm"
      @hide="onSidebarHide"
    >
      <ScrollPanel class="tasks__sidebar__scroll">
        <Fieldset legend="Название">
          {{ selected.title }}
        </Fieldset>

        <Fieldset
          legend="Статус"
          class="p-mt-3"
        >
          {{ selected.status }}
        </Fieldset>

        <Fieldset
          legend="Описание"
          toggleable
          class="p-mt-3"
        >
          {{ selected.description }}
        </Fieldset>

        <Fieldset
          v-if="selected.files.length"
          legend="Файлы"
          toggleable
          class="p-mt-3"
        >
          <File
            v-for="file in selected.files"
            :key="file.id"
            :file="file"
          />
        </Fieldset>

        <Fieldset
          v-if="selected.deadline"
          legend="Срок сдачи"
          class="p-mt-3"
        >
          {{ selected.deadline }}
        </Fieldset>

        <Fieldset
          v-if="selected.user"
          legend="Пользователь"
          toggleable
          class="p-mt-3"
        >
          {{ selected.user.username }}#{{ selected.user.id }}
        </Fieldset>

        <Fieldset
          v-if="selected.group"
          legend="Отдел"
          toggleable
          class="p-mt-3"
        >
          {{ selected.group.name }}#{{ selected.group.id }}
        </Fieldset>

        <Fieldset
          legend="Создан"
          toggleable
          class="p-mt-3"
        >
          {{ selected.createdAt }}

          <Divider />

          {{ (selected.createdBy && selected.createdBy.username + `#${selected.createdBy.id}`) || 'Удален' }}
        </Fieldset>
      </ScrollPanel>
    </Sidebar>
  </div>
</template>

<script src="./index.js"></script>

<style
  src="./index.styl"
  lang="stylus"
  scoped
></style>
