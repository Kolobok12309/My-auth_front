import flatry from 'flatry';
import { mapState } from 'vuex';

import { updateGroup, deleteGroup } from '@/api/group';

import components from './components';

export default {
  name: 'GroupEditPage',

  components,

  props: {
    group: {
      type: Object,
      required: true,
    },
  },

  emits: ['update'],

  data() {
    return {
      pending: false,
    };
  },

  computed: {
    ...mapState('user', {
      userId: 'id',
    }),
  },

  methods: {
    async onSubmit(newGroup) {
      this.pending = true;
      const [err, updatedGroup] = await flatry(updateGroup(this.$axios, this.group.id, newGroup));

      if (err) {
        this.$toast.add({
          severity: 'error',
          summary: err.serverError || 'Ошибка изменения отдела',
          life: 5000,
        });
        this.pending = false;
        return;
      }

      this.$emit('update', updatedGroup);
      this.pending = false;
      this.$toast.add({
        severity: 'success',
        summary: 'Отдел успешно изменен',
        life: 5000,
      });
    },

    async onRemove() {
      this.pending = true;
      const [err] = await flatry(deleteGroup(this.$axios, this.group.id));

      if (err) {
        this.$toast.add({
          severity: 'error',
          summary: err.serverError || 'Ошибка удаления отдела',
          life: 5000,
        });
        this.pending = false;
        return;
      }

      this.$toast.add({
        severity: 'success',
        summary: 'Отдел успешно удален',
        life: 5000,
      });
      this.$router.push(`/user/${this.userId}/profile`);
    },
  },
};
