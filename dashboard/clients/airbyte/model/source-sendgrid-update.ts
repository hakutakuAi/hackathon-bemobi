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
 * @interface SourceSendgridUpdate
 */
export interface SourceSendgridUpdate {
    /**
     * UTC date and time in the format 2017-01-25T00:00:00Z. Any data before this date will not be replicated.
     * @type {string}
     * @memberof SourceSendgridUpdate
     */
    'start_date': string;
    /**
     * Sendgrid API Key, use <a href=\\\"https://app.sendgrid.com/settings/api_keys/\\\">admin</a> to generate this key.
     * @type {string}
     * @memberof SourceSendgridUpdate
     */
    'api_key': string;
}
