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
 * @interface SourceAppfollow
 */
export interface SourceAppfollow {
    /**
     * API Key provided by Appfollow
     * @type {string}
     * @memberof SourceAppfollow
     */
    'api_secret'?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceAppfollow
     */
    'sourceType': SourceAppfollowSourceTypeEnum;
}

export const SourceAppfollowSourceTypeEnum = {
    APPFOLLOW: 'appfollow'
} as const;

export type SourceAppfollowSourceTypeEnum = typeof SourceAppfollowSourceTypeEnum[keyof typeof SourceAppfollowSourceTypeEnum];

