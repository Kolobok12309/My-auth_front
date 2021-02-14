import flatry from 'flatry';
import { mapGetters } from 'vuex';

import { axiosInstance } from '@/plugins/axios';
import { getGroup } from '@/api/group';

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
        {
          label: 'Настройки',
          icon: 'pi pi-cog',
          to: `/group/${id}/edit`,
          visible: () => this.isAdmin || this.isDirector,
        },
      ];
    },
  },

  methods: {
    onUpdate(updatedGroup) {
      this.group = updatedGroup;
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
