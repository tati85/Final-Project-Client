import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import { toast } from "./middleware/toast";
import { api } from "./middleware/apiMidleware";

export default function () {
    return configureStore({
        reducer,
        middleware: [
            ...getDefaultMiddleware(),
            toast,
            api

        ]

    })
}



