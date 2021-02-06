import flatry from 'flatry';

import TaskFilter from '@/components/task/filter';
import TaskTable from '@/components/task/table';

import { getTasks } from '@/api/task';

export default {
  components: {
    TaskFilter,
    TaskTable,
  },

  props: {
    user: {
      type: Object,
      required: true,
    },

    isMe: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      pending: true,

      tasks: [],
      meta: null,

      filter: {
        text: '',
        userId: null,
        groupId: null,
      },
    };
  },

  computed: {
    tableTitle() {
      return this.isMe
        ? 'Мои задачи'
        : 'Задачи';
    },

    hasGroup() {
      return this.user.groupId !== null;
    },
  },

  watch: {
    user: {
      async handler(newVal) {
        const { id, groupId } = newVal;

        this.filter.userId = id;
        if (groupId) this.filter.groupId = groupId;

        await this.loadTasks();
      },
      immediate: true,
    },
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
};
