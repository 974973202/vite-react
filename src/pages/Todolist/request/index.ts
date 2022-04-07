import request from '../../../utils/fetch'

export const getTodulist = () => request('/api/todo/fetch');

export const addTodulist = (params: { content: string }) => request('/api/todo/add', params, 'post');
