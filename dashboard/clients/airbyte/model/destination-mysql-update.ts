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


// May contain unused imports in some cases
// @ts-ignore
import type { SSHTunnelMethod3 } from './sshtunnel-method3';

/**
 * 
 * @export
 * @interface DestinationMysqlUpdate
 */
export interface DestinationMysqlUpdate {
    /**
     * Hostname of the database.
     * @type {string}
     * @memberof DestinationMysqlUpdate
     */
    'host': string;
    /**
     * Port of the database.
     * @type {number}
     * @memberof DestinationMysqlUpdate
     */
    'port': number;
    /**
     * Name of the database.
     * @type {string}
     * @memberof DestinationMysqlUpdate
     */
    'database': string;
    /**
     * Username to use to access the database.
     * @type {string}
     * @memberof DestinationMysqlUpdate
     */
    'username': string;
    /**
     * Password associated with the username.
     * @type {string}
     * @memberof DestinationMysqlUpdate
     */
    'password'?: string;
    /**
     * Encrypt data using SSL.
     * @type {boolean}
     * @memberof DestinationMysqlUpdate
     */
    'ssl'?: boolean;
    /**
     * Additional properties to pass to the JDBC URL string when connecting to the database formatted as \'key=value\' pairs separated by the symbol \'&\'. (example: key1=value1&key2=value2&key3=value3).
     * @type {string}
     * @memberof DestinationMysqlUpdate
     */
    'jdbc_url_params'?: string;
    /**
     * The database to write raw tables into
     * @type {string}
     * @memberof DestinationMysqlUpdate
     */
    'raw_data_schema'?: string;
    /**
     * Disable Writing Final Tables. WARNING! The data format in _airbyte_data is likely stable but there are no guarantees that other metadata columns will remain the same in future versions
     * @type {boolean}
     * @memberof DestinationMysqlUpdate
     */
    'disable_type_dedupe'?: boolean;
    /**
     * 
     * @type {SSHTunnelMethod3}
     * @memberof DestinationMysqlUpdate
     */
    'tunnel_method'?: SSHTunnelMethod3;
}
