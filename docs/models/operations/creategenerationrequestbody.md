# CreateGenerationRequestBody

Query parameters to be provided in the request body as a JSON object


## Fields

| Field                                                                                                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `controlNet`                                                                                                                                                                                                                                                                                                   | *boolean*                                                                                                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                                                             | Enable to use ControlNet. Requires an init image to be provided. Requires a model based on SD v1.5                                                                                                                                                                                                             |
| `controlNetType`                                                                                                                                                                                                                                                                                               | [shared.ControlnetType](../../models/shared/controlnettype.md)                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                                                             | The type of ControlNet to use.                                                                                                                                                                                                                                                                                 |
| `guidanceScale`                                                                                                                                                                                                                                                                                                | *number*                                                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                                             | How strongly the generation should reflect the prompt. 7 is recommended. Must be between 1 and 20.                                                                                                                                                                                                             |
| `height`                                                                                                                                                                                                                                                                                                       | *number*                                                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                                             | The height of the images. Must be between 32 and 1024 and be a multiple of 8.                                                                                                                                                                                                                                  |
| `initGenerationImageId`                                                                                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                                             | The ID of an existing image to use in image2image.                                                                                                                                                                                                                                                             |
| `initImageId`                                                                                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                                             | The ID of an Init Image to use in image2image.                                                                                                                                                                                                                                                                 |
| `initStrength`                                                                                                                                                                                                                                                                                                 | *number*                                                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                                             | How strongly the generated images should reflect the original image in image2image. Must be a float between 0.1 and 0.9.                                                                                                                                                                                       |
| `modelId`                                                                                                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                                             | The model ID used for the image generation. If not provided uses sd_version to determine the version of Stable Diffusion to use.<br/><br/>_Leonardo Creative_: 6bef9f1b-29cb-40c7-b9df-32b51c1f67d3<br/>_Leonardo Select_: cd2b2a15-9760-4174-a5ff-4d2925057376<br/>_Leonardo Signature_: 291be633-cb24-434f-898f-e662799936ad |
| `negativePrompt`                                                                                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                                             | The negative prompt used for the image generation                                                                                                                                                                                                                                                              |
| `numImages`                                                                                                                                                                                                                                                                                                    | *number*                                                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                                             | The number of images to generate. Must be between 1 and 8. If either width or height is over 768, must be between 1 and 4.                                                                                                                                                                                     |
| `numInferenceSteps`                                                                                                                                                                                                                                                                                            | *number*                                                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                                             | The number of inference steps to use for the generation. Must be between 30 and 60.                                                                                                                                                                                                                            |
| `presetStyle`                                                                                                                                                                                                                                                                                                  | [shared.SdGenerationStyle](../../models/shared/sdgenerationstyle.md)                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                             | The style to generate images with.                                                                                                                                                                                                                                                                             |
| `prompt`                                                                                                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                                                                                             | The prompt used to generate images                                                                                                                                                                                                                                                                             |
| `promptMagic`                                                                                                                                                                                                                                                                                                  | *boolean*                                                                                                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                                                             | Enable to use Prompt Magic.                                                                                                                                                                                                                                                                                    |
| `public`                                                                                                                                                                                                                                                                                                       | *boolean*                                                                                                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                                                             | Whether the generated images should show in the community feed.                                                                                                                                                                                                                                                |
| `scheduler`                                                                                                                                                                                                                                                                                                    | [shared.SdGenerationSchedulers](../../models/shared/sdgenerationschedulers.md)                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                                                             | The scheduler to generate images with. Defaults to EULER_DISCRETE if not specified.                                                                                                                                                                                                                            |
| `sdVersion`                                                                                                                                                                                                                                                                                                    | [shared.SdVersions](../../models/shared/sdversions.md)                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                                             | The base version of stable diffusion to use if not using a custom model. v1_5 is 1.5, v2 is 2.1, if not specified it will default to v1_5.                                                                                                                                                                     |
| `tiling`                                                                                                                                                                                                                                                                                                       | *boolean*                                                                                                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                                                             | Whether the generated images should tile on all axis.                                                                                                                                                                                                                                                          |
| `width`                                                                                                                                                                                                                                                                                                        | *number*                                                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                                             | The width of the images. Must be between 32 and 1024 and be a multiple of 8.                                                                                                                                                                                                                                   |