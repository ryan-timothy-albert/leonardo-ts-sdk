/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * Query parameters can also be provided in the request body as a JSON object
 */
export class DeleteModels3dIdRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;
}

export class DeleteModels3dIdRequest extends SpeakeasyBase {
    /**
     * _"id" is required (enter it either in parameters or request body)_
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;

    /**
     * Query parameters can also be provided in the request body as a JSON object
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: DeleteModels3dIdRequestBody;
}

/**
 * columns and relationships of "model_assets"
 */
export class DeleteModels3dId200ApplicationJSONModelAssets extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;
}

/**
 * Responses for DELETE /api/rest/v1/models-3d/{id}
 */
export class DeleteModels3dId200ApplicationJSON extends SpeakeasyBase {
    /**
     * columns and relationships of "model_assets"
     */
    @SpeakeasyMetadata()
    @Expose({ name: "delete_model_assets_by_pk" })
    @Type(() => DeleteModels3dId200ApplicationJSONModelAssets)
    deleteModelAssetsByPk?: DeleteModels3dId200ApplicationJSONModelAssets;
}

export class DeleteModels3dIdResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Responses for DELETE /api/rest/v1/models-3d/{id}
     */
    @SpeakeasyMetadata()
    deleteModels3dId200ApplicationJSONObject?: DeleteModels3dId200ApplicationJSON;
}