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
 * @interface SourceOmnisend
 */
export interface SourceOmnisend {
    /**
     * API Key
     * @type {string}
     * @memberof SourceOmnisend
     */
    'api_key': string;
    /**
     * 
     * @type {string}
     * @memberof SourceOmnisend
     */
    'sourceType': SourceOmnisendSourceTypeEnum;
}

export const SourceOmnisendSourceTypeEnum = {
    OMNISEND: 'omnisend'
} as const;

export type SourceOmnisendSourceTypeEnum = typeof SourceOmnisendSourceTypeEnum[keyof typeof SourceOmnisendSourceTypeEnum];

