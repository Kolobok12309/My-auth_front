<template>
  <Card>
    <template #title>
      Фильтр отделов
    </template>

    <template #content>
      <form
        class="user-filter"
        @submit.prevent="onSubmit"
      >
        <div class="p-grid">
          <div class="p-col-fixed">
            <span class="p-input-icon-left">
              <i class="pi pi-search" />

              <InputText
                v-model="compName"
                :disabled="pending"
                type="text"
                placeholder="Название отдела"
              />
            </span>
          </div>

          <div class="p-col-fixed">
            <Button
              type="submit"
              label="Поиск"
              icon="pi pi-search"
            />
          </div>
        </div>
      </form>
    </template>
  </Card>
</template>

<script src="./index.js"></script>
