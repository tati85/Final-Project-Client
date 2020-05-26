import { createAction } from "@reduxjs/toolkit";

export const apiRequest = createAction('api/Request');
export const apiSucces = createAction('api/Succes');
export const apiFail = createAction('api/Fail');