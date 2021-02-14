<template>
  <Card>
    <template #title>
      Фильтр пользователей
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
                v-model="compUsername"
                :disabled="pending"
                type="text"
                placeholder="Имя пользователя"
              />
            </span>
          </div>

          <div class="p-col-fixed">
            <InputText
              v-model="compEmail"
              :disabled="pending"
              type="text"
              placeholder="E-mail"
            />
          </div>

          <div class="p-col-fixed">
            <RolePicker
              v-model="compRole"
              :disabled="pending"
              showClear
            />
          </div>

          <div
            v-if="!hideGroup"
            class="p-col-fixed"
          >
            <GroupPicker
              v-model="compGroupId"
              :disabled="pending"
            />
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
