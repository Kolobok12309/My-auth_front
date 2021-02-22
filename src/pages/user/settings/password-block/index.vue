<template>
  <Card>
    <template #title>
      Смена пароля
    </template>

    <template #content>
      <form @submit.prevent="onSubmit">
        <div class="p-fluid p-formgrid p-grid">
          <div
            v-if="isMe"
            class="p-field p-col-12 p-sm-6 p-lg-4"
          >
            <label for="oldPassword">
              Старый пароль
            </label>

            <SkeletonHelper
              :pending="pending"
              style="height: 2.25rem"
            >
              <Password
                v-model="oldPassword"
                id="oldPassword"
                :feedback="false"
                toggleMask
                :class="{
                  'p-invalid': v$.oldPassword.$error
                }"
              />

              <small
                v-if="v$.oldPassword.$error"
                class="p-error"
              >
                {{ v$.oldPassword.$errors[0].$message }}
              </small>
            </SkeletonHelper>
          </div>

          <div class="p-field p-col-12 p-sm-6 p-lg-4">
            <label for="password">
              Новый пароль
            </label>

            <SkeletonHelper
              :pending="pending"
              style="height: 2.25rem"
            >
              <Password
                v-model="password"
                id="password"
                :feedback="false"
                toggleMask
                :class="{
                  'p-invalid': v$.password.$error
                }"
              />

              <small
                v-if="v$.password.$error"
                class="p-error"
              >
                {{ v$.password.$errors[0].$message }}
              </small>
            </SkeletonHelper>
          </div>

          <div class="p-field p-col-12 p-sm-6 p-lg-4">
            <label for="confirmPassword">
              Подтвердите новый пароль
            </label>

            <SkeletonHelper
              :pending="pending"
              style="height: 2.25rem"
            >
              <Password
                v-model="confirmPassword"
                id="confirmPassword"
                :feedback="false"
                toggleMask
                :class="{
                  'p-invalid': v$.confirmPassword.$error
                }"
              />

              <small
                v-if="v$.confirmPassword.$error"
                class="p-error"
              >
                {{ v$.confirmPassword.$errors[0].$message }}
              </small>
            </SkeletonHelper>
          </div>
        </div>

        <div>
          <Button
            :disabled="pending"
            label="Подтвердить"
            icon="pi pi-save"
            type="submit"
          />
        </div>
      </form>
    </template>
  </Card>
</template>

<script src="./index.js"></script>
