import { AppDispatch, RootState } from 'app/store';

export interface IResult {
  data: string[];
}

export type TActionError = {
  errorId: string;
  message: string;
};

export enum ELoadingState {
  IDLE = 'idle',
  PENDING = 'pending',
  SUCCEEDED = 'succeded',
  FAILED = 'failed',
}

export type TAsyncThunkConfig = {
  state?: RootState;
  dispatch?: AppDispatch;
  extra?: unknown;
  rejectValue?: unknown;
};
