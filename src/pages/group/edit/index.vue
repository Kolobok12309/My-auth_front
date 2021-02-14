<template>
  <Card>
    <template #title>
      Изменение отдела
    </template>

    <template #content>
      <GroupForm
        :pending="pending"
        :group="group"
        @submit="onSubmit"
        @remove="onRemove"
      />
    </template>
  </Card>
</template>

<script src="./index.js"></script>
