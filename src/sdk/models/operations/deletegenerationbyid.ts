/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives";
import * as z from "zod";

export type DeleteGenerationByIdRequest = {
    /**
     * The ID of the generation to delete.
     */
    id: string;
};

/**
 * columns and relationships of "generations"
 */
export type Generations = {
    id?: string | null | undefined;
};

/**
 * Responses for DELETE /generations/{id}
 */
export type DeleteGenerationByIdResponseBody = {
    /**
     * columns and relationships of "generations"
     */
    deleteGenerationsByPk?: Generations | null | undefined;
};

export type DeleteGenerationByIdResponse = {
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
     * Responses for DELETE /generations/{id}
     */
    object?: DeleteGenerationByIdResponseBody | undefined;
};

/** @internal */
export namespace DeleteGenerationByIdRequest$ {
    export const inboundSchema: z.ZodType<DeleteGenerationByIdRequest, z.ZodTypeDef, unknown> =
        z.object({
            id: z.string(),
        });

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteGenerationByIdRequest> =
        z.object({
            id: z.string(),
        });
}

/** @internal */
export namespace Generations$ {
    export const inboundSchema: z.ZodType<Generations, z.ZodTypeDef, unknown> = z.object({
        id: z.nullable(z.string()).optional(),
    });

    export type Outbound = {
        id?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Generations> = z.object({
        id: z.nullable(z.string()).optional(),
    });
}

/** @internal */
export namespace DeleteGenerationByIdResponseBody$ {
    export const inboundSchema: z.ZodType<DeleteGenerationByIdResponseBody, z.ZodTypeDef, unknown> =
        z
            .object({
                delete_generations_by_pk: z
                    .nullable(z.lazy(() => Generations$.inboundSchema))
                    .optional(),
            })
            .transform((v) => {
                return remap$(v, {
                    delete_generations_by_pk: "deleteGenerationsByPk",
                });
            });

    export type Outbound = {
        delete_generations_by_pk?: Generations$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        DeleteGenerationByIdResponseBody
    > = z
        .object({
            deleteGenerationsByPk: z.nullable(z.lazy(() => Generations$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                deleteGenerationsByPk: "delete_generations_by_pk",
            });
        });
}

/** @internal */
export namespace DeleteGenerationByIdResponse$ {
    export const inboundSchema: z.ZodType<DeleteGenerationByIdResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => DeleteGenerationByIdResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        object?: DeleteGenerationByIdResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteGenerationByIdResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => DeleteGenerationByIdResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
