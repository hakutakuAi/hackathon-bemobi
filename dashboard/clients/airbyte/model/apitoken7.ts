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
 * @interface APIToken7
 */
export interface APIToken7 {
    /**
     * 
     * @type {string}
     * @memberof APIToken7
     */
    'auth_type': APIToken7AuthTypeEnum;
    /**
     * An Okta token. See the <a href=\"https://docs.airbyte.com/integrations/sources/okta\">docs</a> for instructions on how to generate it.
     * @type {string}
     * @memberof APIToken7
     */
    'api_token': string;
}

export const APIToken7AuthTypeEnum = {
    API_TOKEN: 'api_token'
} as const;

export type APIToken7AuthTypeEnum = typeof APIToken7AuthTypeEnum[keyof typeof APIToken7AuthTypeEnum];

