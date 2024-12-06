import axios, {AxiosError, AxiosResponse} from 'axios';

const API = 'https://api.tvmaze.com';

const instance = axios.create({
  baseURL: API,
  timeout: 10000,
  timeoutErrorMessage:
    'Request taking longer than expected. Check your network',
});

const SUCCESS = (resp: AxiosResponse) => ({
  data: resp.data,
  status: resp.status,
  isSuccessful: true,
});

const ERROR = (resp: AxiosError) => {
  const status = resp.response?.status;

  return {
    data: (resp.response?.data as AxiosError).message || 'Unknown Error',
    status,
    isSuccessful: false,
  };
};

export const get = async (
  url: string,
  headers: object = {},
  params: object = {},
) => {
  try {
    const response = await instance.get(url, {params, headers});
    return SUCCESS(response);
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) return ERROR(error);
    else
      return {
        isSuccessful: false,
        data: 'Unexpected Error!',
        status: 0,
      };
  }
};
