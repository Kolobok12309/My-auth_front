import flatry from 'flatry';

import { createGroup } from '@/api/group';

import components from './components';

export default {
  name: 'GroupNewPage',

  components,

  methods: {
    async onSubmit(newGroup) {
      const [err, { id } = {}] = await flatry(createGroup(this.$axios, newGroup));

      if (err) {
        this.$toast.add({
          severity: 'error',
          summary: err.serverError || 'Ошибка создания отдела',
          life: 5000,
        });
        return;
      }

      this.$toast.add({
        severity: 'success',
        summary: 'Отдел успешно создан',
        life: 5000,
      });
      this.$router.push(`/group/${id}/tasks`);
    },
  },
};
