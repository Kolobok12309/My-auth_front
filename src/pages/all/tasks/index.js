import flatry from 'flatry';

import TaskFilter from '@/components/task/filter';
import TaskTable from '@/components/task/table';

import { getTasks } from '@/api/task';

export default {
  name: 'AllTasksPage',

  components: {
    TaskFilter,
    TaskTable,
  },

  data() {
    return {
      pending: true,

      tasks: [],
      meta: null,

      filter: {
        title: '',
        status: null,
        userId: null,
        groupId: null,
      },
    };
  },

  methods: {
    onFilter() {
      this.loadTasks();
    },

    onChangePage(event) {
      this.loadTasks(event.page + 1, event.rows);
    },

    async loadTasks(page = 1, perPage = 20) {
      const query = {
        ...this.filter,
        page,
        perPage,
      };

      this.pending = true;
      const [err, { items, meta = null } = {}] = await flatry(getTasks(this.$axios, query));

      if (err) {
        this.$toast.add({
          severity: 'error',
          summary: err.serverError || 'Ошибка загрузки задач',
          life: 5000,
        });
        this.pending = false;
        return;
      }

      this.tasks = items;
      this.meta = meta;
      this.pending = false;
    },
  },

  mounted() {
    this.loadTasks();
  },
};
