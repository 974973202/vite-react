import request from '../../../utils/fetch'

export interface successResponse {
    message: string,
    content: any,
    success: boolean,
    token?: any,
    total?: number,
    current?: number,
    pageSize?: number,
}

export interface failedResponse {
    message: string,
    content: any,
    success: boolean,
}

export const getTodulist = (): successResponse | failedResponse => request('/api/todo/fetch');

export const addTodulist = (params: { content: string }): successResponse | failedResponse => request('/api/todo/add', params, 'post');

export const delTodulist = ( _id: number ): successResponse | failedResponse => request(`/api/todo/delete/${_id}`, {}, 'DELETE');

