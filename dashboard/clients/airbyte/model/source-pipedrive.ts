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
 * @interface SourcePipedrive
 */
export interface SourcePipedrive {
    /**
     * The Pipedrive API Token.
     * @type {string}
     * @memberof SourcePipedrive
     */
    'api_token': string;
    /**
     * UTC date and time in the format 2017-01-25T00:00:00Z. Any data before this date will not be replicated. When specified and not None, then stream will behave as incremental
     * @type {string}
     * @memberof SourcePipedrive
     */
    'replication_start_date': string;
    /**
     * 
     * @type {string}
     * @memberof SourcePipedrive
     */
    'sourceType': SourcePipedriveSourceTypeEnum;
}

export const SourcePipedriveSourceTypeEnum = {
    PIPEDRIVE: 'pipedrive'
} as const;

export type SourcePipedriveSourceTypeEnum = typeof SourcePipedriveSourceTypeEnum[keyof typeof SourcePipedriveSourceTypeEnum];

