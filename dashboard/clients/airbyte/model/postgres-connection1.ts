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
import type { Credentials7 } from './credentials7';

/**
 * Postgres can be used to store vector data and retrieve embeddings.
 * @export
 * @interface PostgresConnection1
 */
export interface PostgresConnection1 {
    /**
     * Enter the account name you want to use to access the database.
     * @type {string}
     * @memberof PostgresConnection1
     */
    'host': string;
    /**
     * Enter the port you want to use to access the database
     * @type {number}
     * @memberof PostgresConnection1
     */
    'port'?: number;
    /**
     * Enter the name of the database that you want to sync data into
     * @type {string}
     * @memberof PostgresConnection1
     */
    'database': string;
    /**
     * Enter the name of the default schema
     * @type {string}
     * @memberof PostgresConnection1
     */
    'default_schema'?: string;
    /**
     * Enter the name of the user you want to use to access the database
     * @type {string}
     * @memberof PostgresConnection1
     */
    'username': string;
    /**
     * 
     * @type {Credentials7}
     * @memberof PostgresConnection1
     */
    'credentials': Credentials7;
}
