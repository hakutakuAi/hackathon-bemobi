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
 * Authenticate using an API token (suitable for Weaviate Cloud)
 * @export
 * @interface APIToken13
 */
export interface APIToken13 {
    /**
     * 
     * @type {string}
     * @memberof APIToken13
     */
    'mode': APIToken13ModeEnum;
    /**
     * API Token for the Weaviate instance
     * @type {string}
     * @memberof APIToken13
     */
    'token': string;
}

export const APIToken13ModeEnum = {
    TOKEN: 'token'
} as const;

export type APIToken13ModeEnum = typeof APIToken13ModeEnum[keyof typeof APIToken13ModeEnum];

