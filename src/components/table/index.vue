<template>
  <Card class="table">
    <template #title>
      {{ title }}
    </template>

    <template #content>
      <DataTable
        :value="items"
        selectionMode="single"
        resizableColumns
        :loading="pending"
        columnResizeMode="fit"
        class="p-datatable-striped p-datatable-gridlines"
        @rowSelect="onRowSelect"
      >
        <template #empty>
          <slot name="empty" />
        </template>

        <slot/>
      </DataTable>

      <Paginator
        :totalRecords="totalCount"
        :first="first"
        :rows="perPage"
        currentPageReportTemplate="Показано от {first} до {last} из {totalRecords}"
        class="table__paginator"
        @page="onChangePage"
      />
    </template>
  </Card>
</template>

<script src="./index.js"></script>

<style
  src="./index.styl"
  lang="stylus"
  scoped
></style>
