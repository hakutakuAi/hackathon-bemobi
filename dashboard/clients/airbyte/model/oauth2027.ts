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
 * @interface OAuth2027
 */
export interface OAuth2027 {
    /**
     * 
     * @type {string}
     * @memberof OAuth2027
     */
    'auth_type'?: OAuth2027AuthTypeEnum;
    /**
     * The Developer Application App ID.
     * @type {string}
     * @memberof OAuth2027
     */
    'app_id': string;
    /**
     * The Developer Application Secret.
     * @type {string}
     * @memberof OAuth2027
     */
    'secret': string;
    /**
     * Long-term Authorized Access Token.
     * @type {string}
     * @memberof OAuth2027
     */
    'access_token': string;
    /**
     * The Advertiser ID to filter reports and streams. Let this empty to retrieve all.
     * @type {string}
     * @memberof OAuth2027
     */
    'advertiser_id'?: string;
}

export const OAuth2027AuthTypeEnum = {
    OAUTH2_0: 'oauth2.0'
} as const;

export type OAuth2027AuthTypeEnum = typeof OAuth2027AuthTypeEnum[keyof typeof OAuth2027AuthTypeEnum];

