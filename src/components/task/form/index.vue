<template>
  <form
    class="task-form"
    @submit.prevent="onSubmit"
  >
    <div class="p-fluid p-formgrid p-grid">
      <div class="p-field p-col-12 p-sm-6 p-lg-4">
        <label for="title">Заголовок</label>

        <SkeletonHelper
          :pending="pending"
          style="height: 2.25rem"
        >
          <InputText
            v-model="form.title"
            placeholder="Заголовок"
            id="title"
            type="text"
            :class="{
              'p-invalid': v$.form.title.$error
            }"
          />

          <small
            v-if="v$.form.title.$error"
            class="p-error"
          >
            {{ v$.form.title.$errors[0].$message }}
          </small>
        </SkeletonHelper>
      </div>

      <div class="p-field p-col-12 p-sm-6 p-lg-4">
        <label for="status">Статус</label>

        <SkeletonHelper
          :pending="pending"
          style="height: 2.25rem"
        >
          <StatusPicker
            v-model="form.status"
            inputId="status"
          />
        </SkeletonHelper>
      </div>

      <div class="p-field p-col-12 p-sm-6 p-lg-4">
        <label for="deadline">Срок сдачи</label>

        <SkeletonHelper
          :pending="pending"
          style="height: 2.25rem"
        >
          <Calendar
            v-model="form.deadline"
            showTime
            showIcon
            showButtonBar
            placeholder="Срок сдачи"
            id="deadline"
          />
        </SkeletonHelper>
      </div>

      <div class="p-field p-col-12 p-sm-6 p-lg-4">
        <label for="group">Отдел</label>

        <SkeletonHelper
          :pending="pending"
          style="height: 2.25rem"
        >
          <GroupPicker
            v-model="form.groupId"
            :showClear="false"
            inputId="group"
            :class="{
              'p-invalid': v$.form.groupId.$error
            }"
            @update:modelValue="form.userId = null"
          />

          <small
            v-if="v$.form.groupId.$error"
            class="p-error"
          >
            {{ v$.form.groupId.$errors[0].$message }}
          </small>
        </SkeletonHelper>
      </div>

      <div class="p-field p-col-12 p-sm-6 p-lg-4">
        <label for="user">Исполнитель</label>

        <SkeletonHelper
          :pending="pending"
          style="height: 2.25rem"
        >
          <UserPicker
            v-model="form.userId"
            :groupId="form.groupId"
            :disabled="!form.groupId"
            placeholder="Исполнитель"
            inputId="user"
          />
        </SkeletonHelper>
      </div>

      <div class="p-field p-col-12">
        <label for="description">Описание</label>

        <SkeletonHelper
          :pending="pending"
          style="height: 5.5rem"
        >
          <Textarea
            v-model="form.description"
            autoResize
            rows="4"
            placeholder="Описание задачи"
            id="description"
            :class="{
              'p-invalid': v$.form.description.$error
            }"
          />

          <small
            v-if="v$.form.description.$error"
            class="p-error"
          >
            {{ v$.form.description.$errors[0].$message }}
          </small>
        </SkeletonHelper>
      </div>

      <div class="p-field p-col-12">
        <label for="files">Файлы</label>

        <FileUploader
          id="files"
          @upload="onFilesUpload"
        />

        <div
          v-show="form.files.length"
          class="task-form__files p-grid p-mt-3"
        >
          <ProgressSpinner
            v-if="pending"
            class="p-col-12"
          />

          <template v-else>
            <div
              v-for="file in form.files"
              :key="file.id"
              class="p-col-12"
            >
              <FileView
                :file="file"
                canRemove
                @remove="onFileRemove"
              />
            </div>
          </template>
        </div>
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

<style
  src="./index.styl"
  lang="stylus"
  scoped
></style>
