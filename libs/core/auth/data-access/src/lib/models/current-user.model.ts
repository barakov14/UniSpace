import { DeepReadonly } from '@unispace/utils';

export type CurrentUser = DeepReadonly<{
  user: {
    username: string;

    name: string;

    phone: string;

    email: string;

    accessToken: string | undefined;

    refreshToken: string | undefined;
  }
}>
