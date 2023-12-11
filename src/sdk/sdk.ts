/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as shared from "../sdk/models/shared";
import { Dataset } from "./dataset";
import { Element } from "./element";
import { Generation } from "./generation";
import { InitImage } from "./initimage";
import { Model } from "./model";
import { User } from "./user";
import { Variation } from "./variation";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    /**
     * Leonardo.Ai API server
     */
    "https://cloud.leonardo.ai/api/rest/v1",
] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    bearerAuth?: string;

    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    security?: shared.Security | (() => Promise<shared.Security>);
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "v1.0.0";
    sdkVersion = "2.2.0";
    genVersion = "2.213.3";
    userAgent = "speakeasy-sdk/typescript 2.2.0 2.213.3 v1.0.0 @leonardo-ai/sdk";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Rest Endpoints: Leonardo.Ai API OpenAPI specification.
 */
export class Leonardo {
    public dataset: Dataset;
    public element: Element;
    public generation: Generation;
    public initImage: InitImage;
    public user: User;
    public model: Model;
    public variation: Variation;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create();
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: new shared.Security({ bearerAuth: props?.bearerAuth }),

            serverURL: serverURL,
            retryConfig: props?.retryConfig,
        });

        this.dataset = new Dataset(this.sdkConfiguration);
        this.element = new Element(this.sdkConfiguration);
        this.generation = new Generation(this.sdkConfiguration);
        this.initImage = new InitImage(this.sdkConfiguration);
        this.user = new User(this.sdkConfiguration);
        this.model = new Model(this.sdkConfiguration);
        this.variation = new Variation(this.sdkConfiguration);
    }
}
