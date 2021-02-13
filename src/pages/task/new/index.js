import flatry from 'flatry';

import { createTask } from '@/api/task';

import components from './components';

export default {
  name: 'TaskNewPage',

  components,

  methods: {
    async onSubmit(newTask) {
      const [err, { id } = {}] = await flatry(createTask(this.$axios, newTask));

      if (err) {
        this.$toast.add({
          severity: 'error',
          summary: err.serverError || 'Ошибка создания задачи',
          life: 5000,
        });
        return;
      }

      this.$toast.add({
        severity: 'success',
        summary: 'Задача успешно создана',
        life: 5000,
      });
      this.$router.push(`/task/${id}`);
    },
  },
};
