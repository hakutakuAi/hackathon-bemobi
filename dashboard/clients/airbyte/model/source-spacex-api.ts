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
 * @interface SourceSpacexApi
 */
export interface SourceSpacexApi {
    /**
     * 
     * @type {string}
     * @memberof SourceSpacexApi
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceSpacexApi
     */
    'options'?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceSpacexApi
     */
    'sourceType': SourceSpacexApiSourceTypeEnum;
}

export const SourceSpacexApiSourceTypeEnum = {
    SPACEX_API: 'spacex-api'
} as const;

export type SourceSpacexApiSourceTypeEnum = typeof SourceSpacexApiSourceTypeEnum[keyof typeof SourceSpacexApiSourceTypeEnum];

