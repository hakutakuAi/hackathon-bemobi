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
// May contain unused imports in some cases
// @ts-ignore
import type { SSLMethod1 } from './sslmethod1';
// May contain unused imports in some cases
// @ts-ignore
import type { UpdateMethod3 } from './update-method3';

/**
 * 
 * @export
 * @interface SourceMssqlUpdate
 */
export interface SourceMssqlUpdate {
    /**
     * The hostname of the database.
     * @type {string}
     * @memberof SourceMssqlUpdate
     */
    'host': string;
    /**
     * The port of the database.
     * @type {number}
     * @memberof SourceMssqlUpdate
     */
    'port': number;
    /**
     * The name of the database.
     * @type {string}
     * @memberof SourceMssqlUpdate
     */
    'database': string;
    /**
     * The list of schemas to sync from. Defaults to user. Case sensitive.
     * @type {Set<string>}
     * @memberof SourceMssqlUpdate
     */
    'schemas'?: Set<string>;
    /**
     * The username which is used to access the database.
     * @type {string}
     * @memberof SourceMssqlUpdate
     */
    'username': string;
    /**
     * The password associated with the username.
     * @type {string}
     * @memberof SourceMssqlUpdate
     */
    'password': string;
    /**
     * Additional properties to pass to the JDBC URL string when connecting to the database formatted as \'key=value\' pairs separated by the symbol \'&\'. (example: key1=value1&key2=value2&key3=value3).
     * @type {string}
     * @memberof SourceMssqlUpdate
     */
    'jdbc_url_params'?: string;
    /**
     * 
     * @type {SSLMethod1}
     * @memberof SourceMssqlUpdate
     */
    'ssl_method'?: SSLMethod1;
    /**
     * 
     * @type {UpdateMethod3}
     * @memberof SourceMssqlUpdate
     */
    'replication_method'?: UpdateMethod3;
    /**
     * 
     * @type {SSHTunnelMethod3}
     * @memberof SourceMssqlUpdate
     */
    'tunnel_method'?: SSHTunnelMethod3;
}
