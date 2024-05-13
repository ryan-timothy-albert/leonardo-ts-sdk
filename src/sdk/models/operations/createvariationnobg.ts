/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Query parameters are provided in the request body as a JSON object
 */
export type CreateVariationNoBGRequestBody = {
    id: string;
    isVariation?: boolean | undefined;
};

export type SDUpscaleJobOutput = {
    /**
     * API Credits Cost for No Background Variation. Available for Production API Users.
     */
    apiCreditCost?: number | null | undefined;
    id?: string | null | undefined;
};

/**
 * Responses for POST /variations/nobg
 */
export type CreateVariationNoBGResponseBody = {
    sdNobgJob?: SDUpscaleJobOutput | undefined;
};

export type CreateVariationNoBGResponse = {
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
     * Responses for POST /variations/nobg
     */
    object?: CreateVariationNoBGResponseBody | undefined;
};

/** @internal */
export namespace CreateVariationNoBGRequestBody$ {
    export const inboundSchema: z.ZodType<CreateVariationNoBGRequestBody, z.ZodTypeDef, unknown> = z
        .object({
            id: z.string(),
            isVariation: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                id: v.id,
                ...(v.isVariation === undefined ? null : { isVariation: v.isVariation }),
            };
        });

    export type Outbound = {
        id: string;
        isVariation?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateVariationNoBGRequestBody> =
        z
            .object({
                id: z.string(),
                isVariation: z.boolean().optional(),
            })
            .transform((v) => {
                return {
                    id: v.id,
                    ...(v.isVariation === undefined ? null : { isVariation: v.isVariation }),
                };
            });
}

/** @internal */
export namespace SDUpscaleJobOutput$ {
    export const inboundSchema: z.ZodType<SDUpscaleJobOutput, z.ZodTypeDef, unknown> = z
        .object({
            apiCreditCost: z.nullable(z.number().int()).optional(),
            id: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.apiCreditCost === undefined ? null : { apiCreditCost: v.apiCreditCost }),
                ...(v.id === undefined ? null : { id: v.id }),
            };
        });

    export type Outbound = {
        apiCreditCost?: number | null | undefined;
        id?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SDUpscaleJobOutput> = z
        .object({
            apiCreditCost: z.nullable(z.number().int()).optional(),
            id: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.apiCreditCost === undefined ? null : { apiCreditCost: v.apiCreditCost }),
                ...(v.id === undefined ? null : { id: v.id }),
            };
        });
}

/** @internal */
export namespace CreateVariationNoBGResponseBody$ {
    export const inboundSchema: z.ZodType<CreateVariationNoBGResponseBody, z.ZodTypeDef, unknown> =
        z
            .object({
                sdNobgJob: z.lazy(() => SDUpscaleJobOutput$.inboundSchema).optional(),
            })
            .transform((v) => {
                return {
                    ...(v.sdNobgJob === undefined ? null : { sdNobgJob: v.sdNobgJob }),
                };
            });

    export type Outbound = {
        sdNobgJob?: SDUpscaleJobOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CreateVariationNoBGResponseBody
    > = z
        .object({
            sdNobgJob: z.lazy(() => SDUpscaleJobOutput$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.sdNobgJob === undefined ? null : { sdNobgJob: v.sdNobgJob }),
            };
        });
}

/** @internal */
export namespace CreateVariationNoBGResponse$ {
    export const inboundSchema: z.ZodType<CreateVariationNoBGResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => CreateVariationNoBGResponseBody$.inboundSchema).optional(),
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
        object?: CreateVariationNoBGResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateVariationNoBGResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => CreateVariationNoBGResponseBody$.outboundSchema).optional(),
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
