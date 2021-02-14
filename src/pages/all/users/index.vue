<template>
  <div>
    <UserFilter
      v-model:username="filter.username"
      v-model:email="filter.email"
      v-model:role="filter.role"
      v-model:groupId="filter.groupId"
      :pending="pending"
      @submit="onFilter"
    />

    <UsersTable
      title="Список пользователей"
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
