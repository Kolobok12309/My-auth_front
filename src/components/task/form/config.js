import { TODO } from '@/components/status/config';

export const defaultForm = () => ({
  title: '',
  description: '',
  files: [],
  status: TODO,
  userId: null,
  groupId: null,
  deadline: null,
});
