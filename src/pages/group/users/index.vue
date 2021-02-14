<template>
  <div>
    <UserFilter
      v-model:username="filter.username"
      v-model:email="filter.email"
      v-model:role="filter.role"
      :pending="pending"
      :groupId="filter.groupId"
      hideGroup
      @submit="onFilter"
    />

    <UsersTable
      title="Пользователи отдела"
      :users="users"
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
