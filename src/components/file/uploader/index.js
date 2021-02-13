import flatry from 'flatry';
import FileUpload from 'primevue/fileupload';

import { addFiles } from '@/api/task';

export default {
  name: 'FileUploader',

  components: {
    FileUpload,
  },

  emits: ['upload'],

  methods: {
    async uploader({ files }) {
      const [err, loadedFiles = []] = await flatry(addFiles(this.$axios, files));

      if (err) {
        this.$toast.add({
          severity: 'error',
          summary: err.serverError || 'Ошибка загрузки файлов',
          life: 5000,
        });
        return;
      }

      this.$refs.uploader.clear();
      this.$emit('upload', loadedFiles);
    },
  },
};
