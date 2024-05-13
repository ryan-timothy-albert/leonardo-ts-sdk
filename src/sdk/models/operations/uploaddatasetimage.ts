/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Query parameters provided in the request body as a JSON object
 */
export type UploadDatasetImageRequestBody = {
    /**
     * Has to be png, jpg, jpeg, or webp.
     */
    extension: string;
};

export type UploadDatasetImageRequest = {
    /**
     * Query parameters provided in the request body as a JSON object
     */
    requestBody: UploadDatasetImageRequestBody;
    /**
     * _"datasetId" is required
     */
    datasetId: string;
};

export type DatasetUploadOutput = {
    fields?: string | null | undefined;
    id?: string | null | undefined;
    key?: string | null | undefined;
    url?: string | null | undefined;
};

/**
 * Responses for POST /datasets/{datasetId}/upload
 */
export type UploadDatasetImageResponseBody = {
    uploadDatasetImage?: DatasetUploadOutput | null | undefined;
};

export type UploadDatasetImageResponse = {
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
     * Responses for POST /datasets/{datasetId}/upload
     */
    object?: UploadDatasetImageResponseBody | undefined;
};

/** @internal */
export namespace UploadDatasetImageRequestBody$ {
    export const inboundSchema: z.ZodType<UploadDatasetImageRequestBody, z.ZodTypeDef, unknown> = z
        .object({
            extension: z.string(),
        })
        .transform((v) => {
            return {
                extension: v.extension,
            };
        });

    export type Outbound = {
        extension: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UploadDatasetImageRequestBody> =
        z
            .object({
                extension: z.string(),
            })
            .transform((v) => {
                return {
                    extension: v.extension,
                };
            });
}

/** @internal */
export namespace UploadDatasetImageRequest$ {
    export const inboundSchema: z.ZodType<UploadDatasetImageRequest, z.ZodTypeDef, unknown> = z
        .object({
            RequestBody: z.lazy(() => UploadDatasetImageRequestBody$.inboundSchema),
            datasetId: z.string(),
        })
        .transform((v) => {
            return {
                requestBody: v.RequestBody,
                datasetId: v.datasetId,
            };
        });

    export type Outbound = {
        RequestBody: UploadDatasetImageRequestBody$.Outbound;
        datasetId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UploadDatasetImageRequest> = z
        .object({
            requestBody: z.lazy(() => UploadDatasetImageRequestBody$.outboundSchema),
            datasetId: z.string(),
        })
        .transform((v) => {
            return {
                RequestBody: v.requestBody,
                datasetId: v.datasetId,
            };
        });
}

/** @internal */
export namespace DatasetUploadOutput$ {
    export const inboundSchema: z.ZodType<DatasetUploadOutput, z.ZodTypeDef, unknown> = z
        .object({
            fields: z.nullable(z.string()).optional(),
            id: z.nullable(z.string()).optional(),
            key: z.nullable(z.string()).optional(),
            url: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.fields === undefined ? null : { fields: v.fields }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.url === undefined ? null : { url: v.url }),
            };
        });

    export type Outbound = {
        fields?: string | null | undefined;
        id?: string | null | undefined;
        key?: string | null | undefined;
        url?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DatasetUploadOutput> = z
        .object({
            fields: z.nullable(z.string()).optional(),
            id: z.nullable(z.string()).optional(),
            key: z.nullable(z.string()).optional(),
            url: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.fields === undefined ? null : { fields: v.fields }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.url === undefined ? null : { url: v.url }),
            };
        });
}

/** @internal */
export namespace UploadDatasetImageResponseBody$ {
    export const inboundSchema: z.ZodType<UploadDatasetImageResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            uploadDatasetImage: z
                .nullable(z.lazy(() => DatasetUploadOutput$.inboundSchema))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.uploadDatasetImage === undefined
                    ? null
                    : { uploadDatasetImage: v.uploadDatasetImage }),
            };
        });

    export type Outbound = {
        uploadDatasetImage?: DatasetUploadOutput$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UploadDatasetImageResponseBody> =
        z
            .object({
                uploadDatasetImage: z
                    .nullable(z.lazy(() => DatasetUploadOutput$.outboundSchema))
                    .optional(),
            })
            .transform((v) => {
                return {
                    ...(v.uploadDatasetImage === undefined
                        ? null
                        : { uploadDatasetImage: v.uploadDatasetImage }),
                };
            });
}

/** @internal */
export namespace UploadDatasetImageResponse$ {
    export const inboundSchema: z.ZodType<UploadDatasetImageResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => UploadDatasetImageResponseBody$.inboundSchema).optional(),
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
        object?: UploadDatasetImageResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UploadDatasetImageResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => UploadDatasetImageResponseBody$.outboundSchema).optional(),
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
