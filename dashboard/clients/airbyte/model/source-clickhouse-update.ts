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
 * @interface SourceClickhouseUpdate
 */
export interface SourceClickhouseUpdate {
    /**
     * The host endpoint of the Clickhouse cluster.
     * @type {string}
     * @memberof SourceClickhouseUpdate
     */
    'host': string;
    /**
     * The port of the database.
     * @type {number}
     * @memberof SourceClickhouseUpdate
     */
    'port': number;
    /**
     * The name of the database.
     * @type {string}
     * @memberof SourceClickhouseUpdate
     */
    'database': string;
    /**
     * The username which is used to access the database.
     * @type {string}
     * @memberof SourceClickhouseUpdate
     */
    'username': string;
    /**
     * The password associated with this username.
     * @type {string}
     * @memberof SourceClickhouseUpdate
     */
    'password'?: string;
    /**
     * Additional properties to pass to the JDBC URL string when connecting to the database formatted as \'key=value\' pairs separated by the symbol \'&\'. (Eg. key1=value1&key2=value2&key3=value3). For more information read about <a href=\"https://jdbc.postgresql.org/documentation/head/connect.html\">JDBC URL parameters</a>.
     * @type {string}
     * @memberof SourceClickhouseUpdate
     */
    'jdbc_url_params'?: string;
    /**
     * Encrypt data using SSL.
     * @type {boolean}
     * @memberof SourceClickhouseUpdate
     */
    'ssl'?: boolean;
    /**
     * 
     * @type {SSHTunnelMethod3}
     * @memberof SourceClickhouseUpdate
     */
    'tunnel_method'?: SSHTunnelMethod3;
}
