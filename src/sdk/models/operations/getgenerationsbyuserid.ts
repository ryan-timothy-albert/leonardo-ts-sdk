/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetGenerationsByUserIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=userId",
  })
  userId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=offset",
  })
  offset?: number;
}

/**
 * columns and relationships of "generated_image_variation_generic"
 */
export class GetGenerationsByUserId200ApplicationJSONGenerationsGeneratedImagesGeneratedImageVariationGeneric extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * The status of the current task.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: shared.JobStatus;

  /**
   * The type of variation.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "transformType" })
  transformType?: shared.VariationType;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url?: string;
}

/**
 * columns and relationships of "generated_images"
 */
export class GetGenerationsByUserId200ApplicationJSONGenerationsGeneratedImages extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetGenerationsByUserId200ApplicationJSONGenerationsGeneratedImagesGeneratedImageVariationGeneric,
  })
  @Expose({ name: "generated_image_variation_generics" })
  @Type(
    () =>
      GetGenerationsByUserId200ApplicationJSONGenerationsGeneratedImagesGeneratedImageVariationGeneric
  )
  generatedImageVariationGenerics?: GetGenerationsByUserId200ApplicationJSONGenerationsGeneratedImagesGeneratedImageVariationGeneric[];

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "likeCount" })
  likeCount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "nsfw" })
  nsfw?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url?: string;
}

/**
 * columns and relationships of "generations"
 */
export class GetGenerationsByUserId200ApplicationJSONGenerations extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "createdAt" })
  createdAt?: string;

  @SpeakeasyMetadata({
    elemType:
      GetGenerationsByUserId200ApplicationJSONGenerationsGeneratedImages,
  })
  @Expose({ name: "generated_images" })
  @Type(
    () => GetGenerationsByUserId200ApplicationJSONGenerationsGeneratedImages
  )
  generatedImages?: GetGenerationsByUserId200ApplicationJSONGenerationsGeneratedImages[];

  @SpeakeasyMetadata()
  @Expose({ name: "guidanceScale" })
  guidanceScale?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "imageHeight" })
  imageHeight?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "imageWidth" })
  imageWidth?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "inferenceSteps" })
  inferenceSteps?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "initStrength" })
  initStrength?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "modelId" })
  modelId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "negativePrompt" })
  negativePrompt?: string;

  /**
   * The style to generate images with.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "presetStyle" })
  presetStyle?: shared.SdGenerationStyle;

  @SpeakeasyMetadata()
  @Expose({ name: "prompt" })
  prompt?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "public" })
  public?: boolean;

  /**
   * The scheduler to generate images with. Defaults to EULER_DISCRETE if not specified.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "scheduler" })
  scheduler?: shared.SdGenerationSchedulers;

  /**
   * The base version of stable diffusion to use if not using a custom model. v1_5 is 1.5, v2 is 2.1, if not specified it will default to v1_5.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sdVersion" })
  sdVersion?: shared.SdVersions;

  @SpeakeasyMetadata()
  @Expose({ name: "seed" })
  seed?: number;

  /**
   * The status of the current task.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: shared.JobStatus;
}

/**
 * Responses for GET /generations/user/{userId}
 */
export class GetGenerationsByUserId200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: GetGenerationsByUserId200ApplicationJSONGenerations,
  })
  @Expose({ name: "generations" })
  @Type(() => GetGenerationsByUserId200ApplicationJSONGenerations)
  generations?: GetGenerationsByUserId200ApplicationJSONGenerations[];
}

export class GetGenerationsByUserIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Responses for GET /generations/user/{userId}
   */
  @SpeakeasyMetadata()
  getGenerationsByUserId200ApplicationJSONObject?: GetGenerationsByUserId200ApplicationJSON;
}
