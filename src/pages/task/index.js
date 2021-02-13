import flatry from 'flatry';
import { mapGetters } from 'vuex';

import { axiosInstance } from '@/plugins/axios';
import { getTask, updateTask } from '@/api/task';

import components from './components';

export default {
  name: 'TaskPage',

  components,

  props: {
    id: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      task: null, // Async
      pending: true,
    };
  },

  computed: {
    ...mapGetters('user', ['isAdmin', 'isDirector']),
  },

  methods: {
    async onUpdateStatus(newStatus) {
      const [err] = await flatry(updateTask(this.$axios, this.task.id, {
        status: newStatus,
      }));

      if (err) {
        this.$toast.add({
          severity: 'error',
          summary: err.serverError || 'Ошибка обновления информации о пользователе',
          life: 5000,
        });
        return;
      }

      this.task.status = newStatus;
      this.$toast.add({
        severity: 'success',
        summary: 'Статус задачи успешно изменён',
        life: 5000,
      });
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
