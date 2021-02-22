<template>
  <form
    class="group-form"
    @submit.prevent="onSubmit"
  >
    <div class="p-fluid p-formgrid p-grid">
      <div class="p-field p-col-12 p-sm-6 p-lg-4">
        <label for="name">Название</label>

        <SkeletonHelper
          :pending="pending"
          style="height: 2.25rem"
        >
          <InputText
            v-model="form.name"
            placeholder="Название отдела"
            id="name"
            type="text"
            :class="{
              'p-invalid': v$.form.name.$error
            }"
          />

          <small
            v-if="v$.form.name.$error"
            class="p-error"
          >
            {{ v$.form.name.$errors[0].$message }}
          </small>
        </SkeletonHelper>
      </div>
    </div>

    <SkeletonHelper
      :pending="pending"
      style="height: 2.25rem"
    >
      <div class="p-grid">
        <div class="p-col-fixed">
          <Button
            :label="btnText"
            icon="pi pi-save"
            type="submit"
          />
        </div>

        <div class="p-col-fixed">
          <Button
            label="Сбросить"
            icon="pi pi-replay"
            class="p-button-outlined p-button-secondary"
            @click="reset"
          />
        </div>

        <div
          v-if="isEdit"
          class="p-col-fixed"
        >
          <Button
            label="Удалить"
            icon="pi pi-trash"
            class="p-button-outlined p-button-danger"
            @click="onRemove"
          />
        </div>
      </div>
    </SkeletonHelper>
  </form>
</template>

<script src="./index.js"></script>
