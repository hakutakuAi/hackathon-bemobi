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
 * @interface AccessToken3
 */
export interface AccessToken3 {
    /**
     * 
     * @type {string}
     * @memberof AccessToken3
     */
    'auth_type': AccessToken3AuthTypeEnum;
    /**
     * The Access Token for your private Notion integration. See the <a href=\'https://docs.airbyte.com/integrations/sources/notion#step-1-create-an-integration-in-notion\'>docs</a> for more information on how to obtain this token.
     * @type {string}
     * @memberof AccessToken3
     */
    'token': string;
}

export const AccessToken3AuthTypeEnum = {
    TOKEN: 'token'
} as const;

export type AccessToken3AuthTypeEnum = typeof AccessToken3AuthTypeEnum[keyof typeof AccessToken3AuthTypeEnum];

