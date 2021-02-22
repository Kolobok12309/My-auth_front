import defaults from 'lodash/defaults';
import cloneDeep from 'lodash/cloneDeep';
import pick from 'lodash/pick';
import { required, minLength, helpers } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

import { defaultForm } from './config';
import components from './components';

export default {
  name: 'TaskForm',

  components,

  props: {
    pending: {
      type: Boolean,
      default: false,
    },

    task: {
      type: Object,
      default: null,
    },
  },

  emits: ['submit', 'remove'],

  data() {
    return {
      form: defaultForm(),
    };
  },

  // Validations
  setup: () => ({ v$: useVuelidate() }),

  validations() {
    return {
      form: {
        title: {
          required: helpers.withMessage('Обязательное поле', required),
          minLength: helpers.withMessage('Минимальная длина 5 символов', minLength(5)),
        },
        description: {
          required: helpers.withMessage('Обязательное поле', required),
          minLength: helpers.withMessage('Минимальная длина 5 символов', minLength(5)),
        },
        groupId: {
          required: helpers.withMessage('Обязательное поле', required),
        },
      },
    };
  },

  computed: {
    isEdit() {
      return this.task !== null;
    },

    btnText() {
      return this.isEdit
        ? 'Сохранить'
        : 'Создать';
    },
  },

  watch: {
    task: {
      handler: 'reset',
      immediate: true,
    },
  },

  methods: {
    reset() {
      if (this.task) {
        const taskClone = pick(cloneDeep(this.task), Object.keys(defaultForm()));

        taskClone.deadline = new Date(taskClone.deadline);

        this.form = defaults(taskClone, defaultForm());
      } else {
        this.form = defaultForm();
      }
    },

    async onSubmit() {
      const isFormValid = await this.v$.$validate();

      if (!isFormValid) return;
      this.v$.$reset();

      this.$emit('submit', this.getFormattedForm());
    },

    onRemove() {
      this.$emit('remove');
    },

    getFormattedForm() {
      const result = cloneDeep(this.form);

      result.fileIds = result.files.map(({ id }) => id);
      delete result.files;

      result.deadline = result.deadline
        ? result.deadline.toISOString()
        : null;

      return result;
    },

    onFilesUpload(files) {
      this.form.files = this.form.files.concat(files);
    },

    onFileRemove(file) {
      const index = this.form.files.indexOf(file);

      if (~index) {
        this.form.files.splice(index, 1);
      }
    },
  },
};
