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
 * @interface SourceSplitIo
 */
export interface SourceSplitIo {
    /**
     * 
     * @type {string}
     * @memberof SourceSplitIo
     */
    'api_key': string;
    /**
     * 
     * @type {string}
     * @memberof SourceSplitIo
     */
    'start_date': string;
    /**
     * 
     * @type {string}
     * @memberof SourceSplitIo
     */
    'sourceType': SourceSplitIoSourceTypeEnum;
}

export const SourceSplitIoSourceTypeEnum = {
    SPLIT_IO: 'split-io'
} as const;

export type SourceSplitIoSourceTypeEnum = typeof SourceSplitIoSourceTypeEnum[keyof typeof SourceSplitIoSourceTypeEnum];

