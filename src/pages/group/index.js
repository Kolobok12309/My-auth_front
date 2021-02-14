import flatry from 'flatry';
import { mapGetters } from 'vuex';

import { axiosInstance } from '@/plugins/axios';
import { getGroup, updateGroup } from '@/api/group';

import components from './components';

export default {
  name: 'GroupPage',

  components,

  props: {
    id: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      group: null, // Async
      pending: true,

      isEdit: false,
      form: {
        name: '',
      },
    };
  },

  computed: {
    ...mapGetters('user', ['isDirector', 'isAdmin']),

    toolbarItems() {
      const { id } = this;

      return [
        {
          label: 'Задачи',
          icon: 'pi pi-list',
          to: `/group/${id}/tasks`,
        },
        {
          label: 'Участники',
          icon: 'pi pi-users',
          to: `/group/${id}/users`,
        },
      ];
    },
  },

  watch: {
    group: {
      handler() {
        this.resetForm();
        this.isEdit = false;
      },
      immediate: true,
    },

    isEdit(newVal) {
      if (!newVal) {
        this.resetForm();
      }
    },
  },

  methods: {
    toggleEdit() {
      this.isEdit = !this.isEdit;
    },

    resetForm() {
      this.form.name = this.group
        ? this.group.name
        : '';
    },

    async onSubmit() {
      const [err, group] = await flatry(updateGroup(this.$axios, this.id, this.form));

      if (err) {
        this.$toast.add({
          severity: 'error',
          summary: err.serverError || 'Ошибка обновления информации об отделе',
          life: 5000,
        });
        return;
      }

      this.group = group;
    },
  },

  async beforeRouteEnter(to, from, next) {
    const { id } = to.params;

    const [err, group] = await flatry(getGroup(axiosInstance, id));

    if (err) {
      console.error(err);
      return next(false);
    }

    next((vm) => {
      // eslint-disable-next-line no-param-reassign
      vm.group = group;
      // eslint-disable-next-line no-param-reassign
      vm.pending = false;
    });
  },

  async beforeRouteUpdate(to, from, next) {
    const { id } = to.params;

    if (id === from.params.id) return next();

    this.pending = true;
    const [err, group] = await flatry(getGroup(axiosInstance, id));
    this.pending = false;

    if (err) {
      console.error(err);
      next(false);
    } else {
      this.group = group;
      next();
    }
  },
};
