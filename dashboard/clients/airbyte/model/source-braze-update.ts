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
 * @interface SourceBrazeUpdate
 */
export interface SourceBrazeUpdate {
    /**
     * Braze REST API endpoint
     * @type {string}
     * @memberof SourceBrazeUpdate
     */
    'url': string;
    /**
     * Braze REST API key
     * @type {string}
     * @memberof SourceBrazeUpdate
     */
    'api_key': string;
    /**
     * Rows after this date will be synced
     * @type {string}
     * @memberof SourceBrazeUpdate
     */
    'start_date': string;
}
