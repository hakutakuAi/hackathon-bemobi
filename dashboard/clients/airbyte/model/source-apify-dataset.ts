/* tslint:disable */
/* eslint-disable */
/**
 * airbyte-api
 * Programatically control Airbyte Cloud, OSS & Enterprise.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface SourceApifyDataset
 */
export interface SourceApifyDataset {
    /**
     * Personal API token of your Apify account. In Apify Console, you can find your API token in the <a href=\"https://console.apify.com/account/integrations\">Settings section under the Integrations tab</a> after you login. See the <a href=\"https://docs.apify.com/platform/integrations/api#api-token\">Apify Docs</a> for more information.
     * @type {string}
     * @memberof SourceApifyDataset
     */
    'token': string;
    /**
     * ID of the dataset you would like to load to Airbyte. In Apify Console, you can view your datasets in the <a href=\"https://console.apify.com/storage/datasets\">Storage section under the Datasets tab</a> after you login. See the <a href=\"https://docs.apify.com/platform/storage/dataset\">Apify Docs</a> for more information.
     * @type {string}
     * @memberof SourceApifyDataset
     */
    'dataset_id': string;
    /**
     * 
     * @type {string}
     * @memberof SourceApifyDataset
     */
    'sourceType': SourceApifyDatasetSourceTypeEnum;
}

export const SourceApifyDatasetSourceTypeEnum = {
    APIFY_DATASET: 'apify-dataset'
} as const;

export type SourceApifyDatasetSourceTypeEnum = typeof SourceApifyDatasetSourceTypeEnum[keyof typeof SourceApifyDatasetSourceTypeEnum];

