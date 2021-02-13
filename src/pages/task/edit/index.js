import flatry from 'flatry';
import { mapState } from 'vuex';

import { axiosInstance } from '@/plugins/axios';
import { getTask, updateTask, deleteTask } from '@/api/task';

import components from './components';

export default {
  name: 'TaskEditPage',

  components,

  props: {
    id: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      task: null,
      pending: true,
    };
  },

  computed: {
    ...mapState('user', {
      userId: 'id',
    }),
  },

  methods: {
    async onSubmit(newTask) {
      this.pending = true;
      const [err, updatedTask] = await flatry(updateTask(this.$axios, this.task.id, newTask));

      if (err) {
        this.$toast.add({
          severity: 'error',
          summary: err.serverError || 'Ошибка изменения задачи',
          life: 5000,
        });
        this.pending = false;
        return;
      }

      this.task = updatedTask;
      this.pending = false;
      this.$toast.add({
        severity: 'success',
        summary: 'Задача успешно изменена',
        life: 5000,
      });
    },

    async onRemove() {
      this.pending = true;
      const [err] = await flatry(deleteTask(this.$axios, this.task.id));

      if (err) {
        this.$toast.add({
          severity: 'error',
          summary: err.serverError || 'Ошибка удаления задачи',
          life: 5000,
        });
        this.pending = false;
        return;
      }

      this.$toast.add({
        severity: 'success',
        summary: 'Задача успешно удалена',
        life: 5000,
      });
      this.$router.push(`/user/${this.userId}/profile`);
    },
  },

  async beforeRouteEnter(to, from, next) {
    const { id } = to.params;

    const [err, task] = await flatry(getTask(axiosInstance, id));

    if (err) {
      this.$toast.add({
        severity: 'error',
        summary: err.serverError || 'Ошибка получения задачи',
        life: 5000,
      });

      return next(false);
    }

    next((vm) => {
      // eslint-disable-next-line no-param-reassign
      vm.task = task;
      // eslint-disable-next-line no-param-reassign
      vm.pending = false;
    });
  },

  async beforeRouteUpdate(to, from, next) {
    const { id } = to.params;

    if (id === from.params.id) return next();

    this.pending = true;
    const [err, task] = await flatry(getTask(axiosInstance, id));
    this.pending = false;

    if (err) {
      this.$toast.add({
        severity: 'error',
        summary: err.serverError || 'Ошибка получения пользователя',
        life: 5000,
      });

      next(false);
    } else {
      this.task = task;
      next();
    }
  },
};
