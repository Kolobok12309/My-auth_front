<template>
  <DataTable
    title="Список токенов доступа"
    :items="tokens"
    :pending="pending"
    :paginator="false"
    class="tokens-table"
  >
    <template #empty>
      <div class="p-text-center">
        Токены не найдены
      </div>
    </template>

    <Column
      field="id"
      header="#"
      headerClass="p-text-center"
      bodyClass="p-text-center"
    />

    <Column
      field="userAgent"
      header="UserAgent"
      bodyClass="tokens-table__user-agent"
    />

    <Column
      field="ip"
      header="Ip-адрес"
    />

    <Column
      field="createdAt"
      header="Дата"
    />

    <Column
      field="actions"
      header="#"
    >
      <template #body="{ data }">
        <i
          class="pi pi-trash"
          @click.stop="onDelete(data)"
        />
      </template>
    </Column>
  </DataTable>
</template>

<script src="./index.js"></script>

<style
  src="./index.styl"
  lang="stylus"
></style>
