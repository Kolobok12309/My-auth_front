import DataTable from 'primevue/datatable';
import Paginator from 'primevue/paginator';
import Card from 'primevue/card';

export default {
  components: {
    Card,
    DataTable,
    Paginator,
  },

  props: {
    title: {
      type: String,
      default: '',
    },

    items: {
      type: Array,
      default: () => [],
    },

    pending: {
      type: Boolean,
      default: false,
    },

    page: {
      type: Number,
      default: 1,
    },

    perPage: {
      type: Number,
      default: 20,
    },

    totalCount: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    first() {
      const { page = 1, perPage = 20 } = this;

      return (page - 1) * perPage;
    },
  },

  methods: {
    onRowSelect(data) {
      this.$emit('rowSelect', data);
    },

    onChangePage(event) {
      this.$emit('page', event);
    },
  },
};
