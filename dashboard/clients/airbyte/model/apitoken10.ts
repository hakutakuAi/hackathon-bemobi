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
 * @interface APIToken10
 */
export interface APIToken10 {
    /**
     * 
     * @type {string}
     * @memberof APIToken10
     */
    'auth_type': APIToken10AuthTypeEnum;
    /**
     * API Token for making authenticated requests.
     * @type {string}
     * @memberof APIToken10
     */
    'api_token': string;
}

export const APIToken10AuthTypeEnum = {
    API_TOKEN: 'api_token'
} as const;

export type APIToken10AuthTypeEnum = typeof APIToken10AuthTypeEnum[keyof typeof APIToken10AuthTypeEnum];

