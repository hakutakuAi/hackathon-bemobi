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
 * Google API Credentials for connecting to Google Sheets and Google Drive APIs
 * @export
 * @interface AuthenticationViaGoogleOAuth
 */
export interface AuthenticationViaGoogleOAuth {
    /**
     * The Client ID of your Google Sheets developer application.
     * @type {string}
     * @memberof AuthenticationViaGoogleOAuth
     */
    'client_id': string;
    /**
     * The Client Secret of your Google Sheets developer application.
     * @type {string}
     * @memberof AuthenticationViaGoogleOAuth
     */
    'client_secret': string;
    /**
     * The token for obtaining new access token.
     * @type {string}
     * @memberof AuthenticationViaGoogleOAuth
     */
    'refresh_token': string;
}
