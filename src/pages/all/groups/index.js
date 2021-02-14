import flatry from 'flatry';

import GroupFilter from '@/components/group/filter';
import GroupsTable from '@/components/group/table';

import { getGroups } from '@/api/group';

export default {
  name: 'AllGroupsPage',

  components: {
    GroupFilter,
    GroupsTable,
  },

  data() {
    return {
      pending: true,

      groups: [],
      meta: null,

      filter: {
        name: '',
      },
    };
  },

  methods: {
    onFilter() {
      this.loadGroups();
    },

    onChangePage(event) {
      this.loadGroups(event.page + 1, event.rows);
    },

    async loadGroups(page = 1, perPage = 20) {
      const query = {
        ...this.filter,
        page,
        perPage,
      };

      this.pending = true;
      const [err, { items, meta = null } = {}] = await flatry(getGroups(this.$axios, query));

      if (err) {
        this.$toast.add({
          severity: 'error',
          summary: err.serverError || 'Ошибка загрузки отделов',
          life: 5000,
        });
        this.pending = false;
        return;
      }

      this.groups = items;
      this.meta = meta;
      this.pending = false;
    },
  },

  mounted() {
    this.loadGroups();
  },
};
