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
 * @interface OAuth2017
 */
export interface OAuth2017 {
    [key: string]: any;

    /**
     * 
     * @type {string}
     * @memberof OAuth2017
     */
    'auth_type'?: OAuth2017AuthTypeEnum;
    /**
     * The value of the API token generated. See the <a href=\"https://docs.airbyte.com/integrations/sources/zendesk-talk\">docs</a> for more information.
     * @type {string}
     * @memberof OAuth2017
     */
    'access_token': string;
    /**
     * Client ID
     * @type {string}
     * @memberof OAuth2017
     */
    'client_id'?: string;
    /**
     * Client Secret
     * @type {string}
     * @memberof OAuth2017
     */
    'client_secret'?: string;
}

export const OAuth2017AuthTypeEnum = {
    OAUTH2_0: 'oauth2.0'
} as const;

export type OAuth2017AuthTypeEnum = typeof OAuth2017AuthTypeEnum[keyof typeof OAuth2017AuthTypeEnum];

