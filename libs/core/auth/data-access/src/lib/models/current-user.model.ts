import { DeepReadonly } from '@unispace/utils';

export type UserCredentials = DeepReadonly<{
  user: {
    username: string;

    name: string;

    phone: string;

    email: string;

    accessToken?: string;

    refreshToken?: string;
  }
}>
