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
 * @interface AuthenticateViaAsanaOauth1
 */
export interface AuthenticateViaAsanaOauth1 {
    /**
     * OAuth Credentials
     * @type {string}
     * @memberof AuthenticateViaAsanaOauth1
     */
    'option_title'?: AuthenticateViaAsanaOauth1OptionTitleEnum;
    /**
     * 
     * @type {string}
     * @memberof AuthenticateViaAsanaOauth1
     */
    'client_id': string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticateViaAsanaOauth1
     */
    'client_secret': string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticateViaAsanaOauth1
     */
    'refresh_token': string;
}

export const AuthenticateViaAsanaOauth1OptionTitleEnum = {
    O_AUTH_CREDENTIALS: 'OAuth Credentials'
} as const;

export type AuthenticateViaAsanaOauth1OptionTitleEnum = typeof AuthenticateViaAsanaOauth1OptionTitleEnum[keyof typeof AuthenticateViaAsanaOauth1OptionTitleEnum];

