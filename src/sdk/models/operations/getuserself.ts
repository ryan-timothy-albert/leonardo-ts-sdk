/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * columns and relationships of "users"
 */
export type Users = {
    id?: string | null | undefined;
    /**
     * Username of the user.
     */
    username?: string | null | undefined;
};

/**
 * columns and relationships of "user_details"
 */
export type UserDetails = {
    /**
     * API Concurrency Slots.
     */
    apiConcurrencySlots?: number | undefined;
    /**
     * Current balance of API paid tokens the user has.
     */
    apiPaidTokens?: number | null | undefined;
    /**
     * API Plan Token Renewal Date.
     */
    apiPlanTokenRenewalDate?: string | null | undefined;
    /**
     * Current balance of Enterprise API subscriptions tokens the user has.
     */
    apiSubscriptionTokens?: number | undefined;
    /**
     * Current balance of paid tokens the user has.
     */
    paidTokens?: number | null | undefined;
    /**
     * Current balance of user plan GPT tokens the user has.
     */
    subscriptionGptTokens?: number | undefined;
    /**
     * Current balance of model training tokens the user has.
     */
    subscriptionModelTokens?: number | undefined;
    /**
     * Current balance of user plan subscription tokens the user has.
     */
    subscriptionTokens?: number | undefined;
    /**
     * User Plan Token Renewal Date.
     */
    tokenRenewalDate?: string | null | undefined;
    /**
     * columns and relationships of "users"
     */
    user?: Users | null | undefined;
};

/**
 * Responses for GET /me
 */
export type GetUserSelfResponseBody = {
    userDetails?: Array<UserDetails> | undefined;
};

export type GetUserSelfResponse = {
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
     * Responses for GET /me
     */
    object?: GetUserSelfResponseBody | undefined;
};

/** @internal */
export namespace Users$ {
    export const inboundSchema: z.ZodType<Users, z.ZodTypeDef, unknown> = z
        .object({
            id: z.nullable(z.string()).optional(),
            username: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.username === undefined ? null : { username: v.username }),
            };
        });

    export type Outbound = {
        id?: string | null | undefined;
        username?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Users> = z
        .object({
            id: z.nullable(z.string()).optional(),
            username: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.username === undefined ? null : { username: v.username }),
            };
        });
}

/** @internal */
export namespace UserDetails$ {
    export const inboundSchema: z.ZodType<UserDetails, z.ZodTypeDef, unknown> = z
        .object({
            apiConcurrencySlots: z.number().int().optional(),
            apiPaidTokens: z.nullable(z.number().int()).optional(),
            apiPlanTokenRenewalDate: z.nullable(z.string()).optional(),
            apiSubscriptionTokens: z.number().int().optional(),
            paidTokens: z.nullable(z.number().int()).optional(),
            subscriptionGptTokens: z.number().int().optional(),
            subscriptionModelTokens: z.number().int().optional(),
            subscriptionTokens: z.number().int().optional(),
            tokenRenewalDate: z.nullable(z.string()).optional(),
            user: z.nullable(z.lazy(() => Users$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.apiConcurrencySlots === undefined
                    ? null
                    : { apiConcurrencySlots: v.apiConcurrencySlots }),
                ...(v.apiPaidTokens === undefined ? null : { apiPaidTokens: v.apiPaidTokens }),
                ...(v.apiPlanTokenRenewalDate === undefined
                    ? null
                    : { apiPlanTokenRenewalDate: v.apiPlanTokenRenewalDate }),
                ...(v.apiSubscriptionTokens === undefined
                    ? null
                    : { apiSubscriptionTokens: v.apiSubscriptionTokens }),
                ...(v.paidTokens === undefined ? null : { paidTokens: v.paidTokens }),
                ...(v.subscriptionGptTokens === undefined
                    ? null
                    : { subscriptionGptTokens: v.subscriptionGptTokens }),
                ...(v.subscriptionModelTokens === undefined
                    ? null
                    : { subscriptionModelTokens: v.subscriptionModelTokens }),
                ...(v.subscriptionTokens === undefined
                    ? null
                    : { subscriptionTokens: v.subscriptionTokens }),
                ...(v.tokenRenewalDate === undefined
                    ? null
                    : { tokenRenewalDate: v.tokenRenewalDate }),
                ...(v.user === undefined ? null : { user: v.user }),
            };
        });

    export type Outbound = {
        apiConcurrencySlots?: number | undefined;
        apiPaidTokens?: number | null | undefined;
        apiPlanTokenRenewalDate?: string | null | undefined;
        apiSubscriptionTokens?: number | undefined;
        paidTokens?: number | null | undefined;
        subscriptionGptTokens?: number | undefined;
        subscriptionModelTokens?: number | undefined;
        subscriptionTokens?: number | undefined;
        tokenRenewalDate?: string | null | undefined;
        user?: Users$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UserDetails> = z
        .object({
            apiConcurrencySlots: z.number().int().optional(),
            apiPaidTokens: z.nullable(z.number().int()).optional(),
            apiPlanTokenRenewalDate: z.nullable(z.string()).optional(),
            apiSubscriptionTokens: z.number().int().optional(),
            paidTokens: z.nullable(z.number().int()).optional(),
            subscriptionGptTokens: z.number().int().optional(),
            subscriptionModelTokens: z.number().int().optional(),
            subscriptionTokens: z.number().int().optional(),
            tokenRenewalDate: z.nullable(z.string()).optional(),
            user: z.nullable(z.lazy(() => Users$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.apiConcurrencySlots === undefined
                    ? null
                    : { apiConcurrencySlots: v.apiConcurrencySlots }),
                ...(v.apiPaidTokens === undefined ? null : { apiPaidTokens: v.apiPaidTokens }),
                ...(v.apiPlanTokenRenewalDate === undefined
                    ? null
                    : { apiPlanTokenRenewalDate: v.apiPlanTokenRenewalDate }),
                ...(v.apiSubscriptionTokens === undefined
                    ? null
                    : { apiSubscriptionTokens: v.apiSubscriptionTokens }),
                ...(v.paidTokens === undefined ? null : { paidTokens: v.paidTokens }),
                ...(v.subscriptionGptTokens === undefined
                    ? null
                    : { subscriptionGptTokens: v.subscriptionGptTokens }),
                ...(v.subscriptionModelTokens === undefined
                    ? null
                    : { subscriptionModelTokens: v.subscriptionModelTokens }),
                ...(v.subscriptionTokens === undefined
                    ? null
                    : { subscriptionTokens: v.subscriptionTokens }),
                ...(v.tokenRenewalDate === undefined
                    ? null
                    : { tokenRenewalDate: v.tokenRenewalDate }),
                ...(v.user === undefined ? null : { user: v.user }),
            };
        });
}

/** @internal */
export namespace GetUserSelfResponseBody$ {
    export const inboundSchema: z.ZodType<GetUserSelfResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            user_details: z.array(z.lazy(() => UserDetails$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.user_details === undefined ? null : { userDetails: v.user_details }),
            };
        });

    export type Outbound = {
        user_details?: Array<UserDetails$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetUserSelfResponseBody> = z
        .object({
            userDetails: z.array(z.lazy(() => UserDetails$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.userDetails === undefined ? null : { user_details: v.userDetails }),
            };
        });
}

/** @internal */
export namespace GetUserSelfResponse$ {
    export const inboundSchema: z.ZodType<GetUserSelfResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => GetUserSelfResponseBody$.inboundSchema).optional(),
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
        object?: GetUserSelfResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetUserSelfResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => GetUserSelfResponseBody$.outboundSchema).optional(),
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
