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
 * @interface SourceGuruUpdate
 */
export interface SourceGuruUpdate {
    /**
     * 
     * @type {string}
     * @memberof SourceGuruUpdate
     */
    'username': string;
    /**
     * 
     * @type {string}
     * @memberof SourceGuruUpdate
     */
    'password'?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceGuruUpdate
     */
    'start_date': string;
    /**
     * Team ID received through response of /teams streams, make sure about access to the team
     * @type {string}
     * @memberof SourceGuruUpdate
     */
    'team_id'?: string;
    /**
     * Query for searching cards
     * @type {string}
     * @memberof SourceGuruUpdate
     */
    'search_cards_query'?: string;
}
