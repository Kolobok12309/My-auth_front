import flatry from 'flatry';

import UserFilter from '@/components/user/filter';
import UsersTable from '@/components/user/table';

import { getUsers } from '@/api/user';

export default {
  name: 'AllUsersPage',

  components: {
    UserFilter,
    UsersTable,
  },

  data() {
    return {
      pending: true,

      users: [],
      meta: null,

      filter: {
        username: '',
        email: '',
        role: null,
        groupId: null,
      },
    };
  },

  methods: {
    onFilter() {
      this.loadUsers();
    },

    onChangePage(event) {
      this.loadUsers(event.page + 1, event.rows);
    },

    async loadUsers(page = 1, perPage = 20) {
      const query = {
        ...this.filter,
        page,
        perPage,
      };

      this.pending = true;
      const [err, { items, meta = null } = {}] = await flatry(getUsers(this.$axios, query));

      if (err) {
        this.$toast.add({
          severity: 'error',
          summary: err.serverError || 'Ошибка загрузки пользователей',
          life: 5000,
        });
        this.pending = false;
        return;
      }

      this.users = items;
      this.meta = meta;
      this.pending = false;
    },
  },

  mounted() {
    this.loadUsers();
  },
};
