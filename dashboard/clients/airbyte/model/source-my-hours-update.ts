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
 * @interface SourceMyHoursUpdate
 */
export interface SourceMyHoursUpdate {
    /**
     * Your My Hours username
     * @type {string}
     * @memberof SourceMyHoursUpdate
     */
    'email': string;
    /**
     * The password associated to the username
     * @type {string}
     * @memberof SourceMyHoursUpdate
     */
    'password': string;
    /**
     * Start date for collecting time logs
     * @type {string}
     * @memberof SourceMyHoursUpdate
     */
    'start_date': string;
    /**
     * Pagination size used for retrieving logs in days
     * @type {number}
     * @memberof SourceMyHoursUpdate
     */
    'logs_batch_size'?: number;
}
