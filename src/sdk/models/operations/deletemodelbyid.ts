/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteModelByIdRequest = {
    /**
     * The ID of the model to delete.
     */
    id: string;
};

/**
 * columns and relationships of "custom_models"
 */
export type CustomModels = {
    id?: string | null | undefined;
};

/**
 * Responses for DELETE /models/{id}
 */
export type DeleteModelByIdResponseBody = {
    /**
     * columns and relationships of "custom_models"
     */
    deleteCustomModelsByPk?: CustomModels | null | undefined;
};

export type DeleteModelByIdResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * Responses for DELETE /models/{id}
     */
    object?: DeleteModelByIdResponseBody | undefined;
};

/** @internal */
export namespace DeleteModelByIdRequest$ {
    export const inboundSchema: z.ZodType<DeleteModelByIdRequest, z.ZodTypeDef, unknown> = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteModelByIdRequest> = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });
}

/** @internal */
export namespace CustomModels$ {
    export const inboundSchema: z.ZodType<CustomModels, z.ZodTypeDef, unknown> = z
        .object({
            id: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
            };
        });

    export type Outbound = {
        id?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CustomModels> = z
        .object({
            id: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
            };
        });
}

/** @internal */
export namespace DeleteModelByIdResponseBody$ {
    export const inboundSchema: z.ZodType<DeleteModelByIdResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            delete_custom_models_by_pk: z
                .nullable(z.lazy(() => CustomModels$.inboundSchema))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.delete_custom_models_by_pk === undefined
                    ? null
                    : { deleteCustomModelsByPk: v.delete_custom_models_by_pk }),
            };
        });

    export type Outbound = {
        delete_custom_models_by_pk?: CustomModels$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteModelByIdResponseBody> = z
        .object({
            deleteCustomModelsByPk: z
                .nullable(z.lazy(() => CustomModels$.outboundSchema))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.deleteCustomModelsByPk === undefined
                    ? null
                    : { delete_custom_models_by_pk: v.deleteCustomModelsByPk }),
            };
        });
}

/** @internal */
export namespace DeleteModelByIdResponse$ {
    export const inboundSchema: z.ZodType<DeleteModelByIdResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => DeleteModelByIdResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        object?: DeleteModelByIdResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteModelByIdResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => DeleteModelByIdResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}
