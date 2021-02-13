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
            id="title"
            type="text"
          />
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
            @update:modelValue="form.userId = null"
          />
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
            id="description"
          />
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
      <div class="p-grid p-flex-nowrap">
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
