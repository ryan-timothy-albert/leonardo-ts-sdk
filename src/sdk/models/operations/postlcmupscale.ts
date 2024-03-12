/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

/**
 * Query parameters can also be provided in the request body as a JSON object
 */
export type PostLcmUpscaleRequestBody = {
    /**
     * How strongly the generation should reflect the prompt. Must be a float between 0.5 and 20.
     */
    guidance?: number | null | undefined;
    /**
     * The output width of the image. Must be 512, 640 or 1024.
     */
    height?: number | null | undefined;
    /**
     * Image data used to generate image. In base64 format. Prefix: `data:image/jpeg;base64,`
     */
    imageDataUrl: string;
    /**
     * The prompt used to generate images
     */
    prompt: string;
    /**
     * Refine creative
     */
    refineCreative?: boolean | null | undefined;
    /**
     * Must be a float between 0.5 and 0.9.
     */
    refineStrength?: number | null | undefined;
    requestTimestamp?: string | undefined;
    seed?: number | null | undefined;
    /**
     * The number of steps to use for the generation. Must be between 4 and 16.
     */
    steps?: number | null | undefined;
    /**
     * How strongly the generated images should reflect the original image supplied in imageDataUrl. Must be a float between 0.1 and 1.
     */
    strength?: number | null | undefined;
    /**
     * The style to generate LCM images with.
     */
    style?: shared.LcmGenerationStyle | undefined;
    /**
     * The output width of the image. Must be 512, 640 or 1024.
     */
    width?: number | null | undefined;
};

export type PostLcmUpscaleLcmGenerationOutput = {
    /**
     * API credits cost, available for Production API users.
     */
    apiCreditCost?: number | null | undefined;
    generatedImageId?: string | undefined;
    generationId?: Array<string> | undefined;
    imageDataUrl?: Array<string> | undefined;
    requestTimestamp?: string | undefined;
    variationId?: Array<string> | undefined;
};

/**
 * Responses for POST /lcm-upscale
 */
export type PostLcmUpscaleResponseBody = {
    lcmGenerationJob?: PostLcmUpscaleLcmGenerationOutput | null | undefined;
};

export type PostLcmUpscaleResponse = {
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
     * Responses for POST /lcm-upscale
     */
    object?: PostLcmUpscaleResponseBody | undefined;
};

/** @internal */
export namespace PostLcmUpscaleRequestBody$ {
    export type Inbound = {
        guidance?: number | null | undefined;
        height?: number | null | undefined;
        imageDataUrl: string;
        prompt: string;
        refineCreative?: boolean | null | undefined;
        refineStrength?: number | null | undefined;
        requestTimestamp?: string | undefined;
        seed?: number | null | undefined;
        steps?: number | null | undefined;
        strength?: number | null | undefined;
        style?: shared.LcmGenerationStyle | undefined;
        width?: number | null | undefined;
    };

    export const inboundSchema: z.ZodType<PostLcmUpscaleRequestBody, z.ZodTypeDef, Inbound> = z
        .object({
            guidance: z.nullable(z.number()).optional(),
            height: z.nullable(z.number().int().default(512)),
            imageDataUrl: z.string(),
            prompt: z.string(),
            refineCreative: z.nullable(z.boolean()).optional(),
            refineStrength: z.nullable(z.number()).optional(),
            requestTimestamp: z.string().optional(),
            seed: z.nullable(z.number().int()).optional(),
            steps: z.nullable(z.number().int()).optional(),
            strength: z.nullable(z.number()).optional(),
            style: shared.LcmGenerationStyle$.optional(),
            width: z.nullable(z.number().int().default(512)),
        })
        .transform((v) => {
            return {
                ...(v.guidance === undefined ? null : { guidance: v.guidance }),
                height: v.height,
                imageDataUrl: v.imageDataUrl,
                prompt: v.prompt,
                ...(v.refineCreative === undefined ? null : { refineCreative: v.refineCreative }),
                ...(v.refineStrength === undefined ? null : { refineStrength: v.refineStrength }),
                ...(v.requestTimestamp === undefined
                    ? null
                    : { requestTimestamp: v.requestTimestamp }),
                ...(v.seed === undefined ? null : { seed: v.seed }),
                ...(v.steps === undefined ? null : { steps: v.steps }),
                ...(v.strength === undefined ? null : { strength: v.strength }),
                ...(v.style === undefined ? null : { style: v.style }),
                width: v.width,
            };
        });

    export type Outbound = {
        guidance?: number | null | undefined;
        height: number | null;
        imageDataUrl: string;
        prompt: string;
        refineCreative?: boolean | null | undefined;
        refineStrength?: number | null | undefined;
        requestTimestamp?: string | undefined;
        seed?: number | null | undefined;
        steps?: number | null | undefined;
        strength?: number | null | undefined;
        style?: shared.LcmGenerationStyle | undefined;
        width: number | null;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PostLcmUpscaleRequestBody> = z
        .object({
            guidance: z.nullable(z.number()).optional(),
            height: z.nullable(z.number().int().default(512)),
            imageDataUrl: z.string(),
            prompt: z.string(),
            refineCreative: z.nullable(z.boolean()).optional(),
            refineStrength: z.nullable(z.number()).optional(),
            requestTimestamp: z.string().optional(),
            seed: z.nullable(z.number().int()).optional(),
            steps: z.nullable(z.number().int()).optional(),
            strength: z.nullable(z.number()).optional(),
            style: shared.LcmGenerationStyle$.optional(),
            width: z.nullable(z.number().int().default(512)),
        })
        .transform((v) => {
            return {
                ...(v.guidance === undefined ? null : { guidance: v.guidance }),
                height: v.height,
                imageDataUrl: v.imageDataUrl,
                prompt: v.prompt,
                ...(v.refineCreative === undefined ? null : { refineCreative: v.refineCreative }),
                ...(v.refineStrength === undefined ? null : { refineStrength: v.refineStrength }),
                ...(v.requestTimestamp === undefined
                    ? null
                    : { requestTimestamp: v.requestTimestamp }),
                ...(v.seed === undefined ? null : { seed: v.seed }),
                ...(v.steps === undefined ? null : { steps: v.steps }),
                ...(v.strength === undefined ? null : { strength: v.strength }),
                ...(v.style === undefined ? null : { style: v.style }),
                width: v.width,
            };
        });
}

/** @internal */
export namespace PostLcmUpscaleLcmGenerationOutput$ {
    export type Inbound = {
        apiCreditCost?: number | null | undefined;
        generatedImageId?: string | undefined;
        generationId?: Array<string> | undefined;
        imageDataUrl?: Array<string> | undefined;
        requestTimestamp?: string | undefined;
        variationId?: Array<string> | undefined;
    };

    export const inboundSchema: z.ZodType<
        PostLcmUpscaleLcmGenerationOutput,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            apiCreditCost: z.nullable(z.number().int()).optional(),
            generatedImageId: z.string().optional(),
            generationId: z.array(z.string()).optional(),
            imageDataUrl: z.array(z.string()).optional(),
            requestTimestamp: z.string().optional(),
            variationId: z.array(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.apiCreditCost === undefined ? null : { apiCreditCost: v.apiCreditCost }),
                ...(v.generatedImageId === undefined
                    ? null
                    : { generatedImageId: v.generatedImageId }),
                ...(v.generationId === undefined ? null : { generationId: v.generationId }),
                ...(v.imageDataUrl === undefined ? null : { imageDataUrl: v.imageDataUrl }),
                ...(v.requestTimestamp === undefined
                    ? null
                    : { requestTimestamp: v.requestTimestamp }),
                ...(v.variationId === undefined ? null : { variationId: v.variationId }),
            };
        });

    export type Outbound = {
        apiCreditCost?: number | null | undefined;
        generatedImageId?: string | undefined;
        generationId?: Array<string> | undefined;
        imageDataUrl?: Array<string> | undefined;
        requestTimestamp?: string | undefined;
        variationId?: Array<string> | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PostLcmUpscaleLcmGenerationOutput
    > = z
        .object({
            apiCreditCost: z.nullable(z.number().int()).optional(),
            generatedImageId: z.string().optional(),
            generationId: z.array(z.string()).optional(),
            imageDataUrl: z.array(z.string()).optional(),
            requestTimestamp: z.string().optional(),
            variationId: z.array(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.apiCreditCost === undefined ? null : { apiCreditCost: v.apiCreditCost }),
                ...(v.generatedImageId === undefined
                    ? null
                    : { generatedImageId: v.generatedImageId }),
                ...(v.generationId === undefined ? null : { generationId: v.generationId }),
                ...(v.imageDataUrl === undefined ? null : { imageDataUrl: v.imageDataUrl }),
                ...(v.requestTimestamp === undefined
                    ? null
                    : { requestTimestamp: v.requestTimestamp }),
                ...(v.variationId === undefined ? null : { variationId: v.variationId }),
            };
        });
}

/** @internal */
export namespace PostLcmUpscaleResponseBody$ {
    export type Inbound = {
        lcmGenerationJob?: PostLcmUpscaleLcmGenerationOutput$.Inbound | null | undefined;
    };

    export const inboundSchema: z.ZodType<PostLcmUpscaleResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            lcmGenerationJob: z
                .nullable(z.lazy(() => PostLcmUpscaleLcmGenerationOutput$.inboundSchema))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.lcmGenerationJob === undefined
                    ? null
                    : { lcmGenerationJob: v.lcmGenerationJob }),
            };
        });

    export type Outbound = {
        lcmGenerationJob?: PostLcmUpscaleLcmGenerationOutput$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PostLcmUpscaleResponseBody> = z
        .object({
            lcmGenerationJob: z
                .nullable(z.lazy(() => PostLcmUpscaleLcmGenerationOutput$.outboundSchema))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.lcmGenerationJob === undefined
                    ? null
                    : { lcmGenerationJob: v.lcmGenerationJob }),
            };
        });
}

/** @internal */
export namespace PostLcmUpscaleResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: PostLcmUpscaleResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<PostLcmUpscaleResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => PostLcmUpscaleResponseBody$.inboundSchema).optional(),
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
        object?: PostLcmUpscaleResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PostLcmUpscaleResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => PostLcmUpscaleResponseBody$.outboundSchema).optional(),
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