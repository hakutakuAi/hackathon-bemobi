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
 * @interface OAuth2
 */
export interface OAuth2 {
    /**
     * Name of the credentials
     * @type {string}
     * @memberof OAuth2
     */
    'credentials_title': OAuth2CredentialsTitleEnum;
    /**
     * The Client ID of your HubSpot developer application. See the <a href=\"https://legacydocs.hubspot.com/docs/methods/oauth2/oauth2-quickstart\">Hubspot docs</a> if you need help finding this ID.
     * @type {string}
     * @memberof OAuth2
     */
    'client_id': string;
    /**
     * The client secret for your HubSpot developer application. See the <a href=\"https://legacydocs.hubspot.com/docs/methods/oauth2/oauth2-quickstart\">Hubspot docs</a> if you need help finding this secret.
     * @type {string}
     * @memberof OAuth2
     */
    'client_secret': string;
    /**
     * Refresh token to renew an expired access token. See the <a href=\"https://legacydocs.hubspot.com/docs/methods/oauth2/oauth2-quickstart\">Hubspot docs</a> if you need help finding this token.
     * @type {string}
     * @memberof OAuth2
     */
    'refresh_token': string;
}

export const OAuth2CredentialsTitleEnum = {
    O_AUTH_CREDENTIALS: 'OAuth Credentials'
} as const;

export type OAuth2CredentialsTitleEnum = typeof OAuth2CredentialsTitleEnum[keyof typeof OAuth2CredentialsTitleEnum];

