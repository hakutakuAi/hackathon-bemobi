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
 * @interface SourceSmartengage
 */
export interface SourceSmartengage {
    /**
     * API Key
     * @type {string}
     * @memberof SourceSmartengage
     */
    'api_key': string;
    /**
     * 
     * @type {string}
     * @memberof SourceSmartengage
     */
    'sourceType': SourceSmartengageSourceTypeEnum;
}

export const SourceSmartengageSourceTypeEnum = {
    SMARTENGAGE: 'smartengage'
} as const;

export type SourceSmartengageSourceTypeEnum = typeof SourceSmartengageSourceTypeEnum[keyof typeof SourceSmartengageSourceTypeEnum];

