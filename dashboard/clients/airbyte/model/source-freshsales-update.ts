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
 * @interface SourceFreshsalesUpdate
 */
export interface SourceFreshsalesUpdate {
    /**
     * Freshsales API Key. See <a href=\"https://crmsupport.freshworks.com/support/solutions/articles/50000002503-how-to-find-my-api-key-\">here</a>. The key is case sensitive.
     * @type {string}
     * @memberof SourceFreshsalesUpdate
     */
    'api_key': string;
    /**
     * The Name of your Freshsales domain
     * @type {string}
     * @memberof SourceFreshsalesUpdate
     */
    'domain_name': string;
}
