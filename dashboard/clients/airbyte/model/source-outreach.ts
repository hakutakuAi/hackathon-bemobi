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
 * @interface SourceOutreach
 */
export interface SourceOutreach {
    /**
     * The Client ID of your Outreach developer application.
     * @type {string}
     * @memberof SourceOutreach
     */
    'client_id': string;
    /**
     * The Client Secret of your Outreach developer application.
     * @type {string}
     * @memberof SourceOutreach
     */
    'client_secret': string;
    /**
     * The token for obtaining the new access token.
     * @type {string}
     * @memberof SourceOutreach
     */
    'refresh_token': string;
    /**
     * A Redirect URI is the location where the authorization server sends the user once the app has been successfully authorized and granted an authorization code or access token.
     * @type {string}
     * @memberof SourceOutreach
     */
    'redirect_uri': string;
    /**
     * The date from which you\'d like to replicate data for Outreach API, in the format YYYY-MM-DDT00:00:00Z. All data generated after this date will be replicated.
     * @type {string}
     * @memberof SourceOutreach
     */
    'start_date': string;
    /**
     * 
     * @type {string}
     * @memberof SourceOutreach
     */
    'sourceType': SourceOutreachSourceTypeEnum;
}

export const SourceOutreachSourceTypeEnum = {
    OUTREACH: 'outreach'
} as const;

export type SourceOutreachSourceTypeEnum = typeof SourceOutreachSourceTypeEnum[keyof typeof SourceOutreachSourceTypeEnum];

