/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * When training using the PIXEL_ART model type, this influences the training strength.
 */
export enum Strength {
    VeryLow = "VERY_LOW",
    Low = "LOW",
    Medium = "MEDIUM",
    High = "HIGH",
}

/** @internal */
export namespace Strength$ {
    export const inboundSchema = z.nativeEnum(Strength);
    export const outboundSchema = inboundSchema;
}
