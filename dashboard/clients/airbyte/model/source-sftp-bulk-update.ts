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
import type { Authentication13 } from './authentication13';
// May contain unused imports in some cases
// @ts-ignore
import type { FileBasedStreamConfig4 } from './file-based-stream-config4';

/**
 * Used during spec; allows the developer to configure the cloud provider specific options that are needed when users configure a file-based source.
 * @export
 * @interface SourceSftpBulkUpdate
 */
export interface SourceSftpBulkUpdate {
    /**
     * UTC date and time in the format 2017-01-25T00:00:00.000000Z. Any file modified before this date will not be replicated.
     * @type {string}
     * @memberof SourceSftpBulkUpdate
     */
    'start_date'?: string;
    /**
     * Each instance of this configuration defines a <a href=\"https://docs.airbyte.com/cloud/core-concepts#stream\">stream</a>. Use this to define which files belong in the stream, their format, and how they should be parsed and validated. When sending data to warehouse destination such as Snowflake or BigQuery, each stream is a separate table.
     * @type {Array<FileBasedStreamConfig4>}
     * @memberof SourceSftpBulkUpdate
     */
    'streams': Array<FileBasedStreamConfig4>;
    /**
     * The server host address
     * @type {string}
     * @memberof SourceSftpBulkUpdate
     */
    'host': string;
    /**
     * The server user
     * @type {string}
     * @memberof SourceSftpBulkUpdate
     */
    'username': string;
    /**
     * 
     * @type {Authentication13}
     * @memberof SourceSftpBulkUpdate
     */
    'credentials': Authentication13;
    /**
     * The server port
     * @type {number}
     * @memberof SourceSftpBulkUpdate
     */
    'port'?: number;
    /**
     * The directory to search files for sync
     * @type {string}
     * @memberof SourceSftpBulkUpdate
     */
    'folder_path'?: string;
}
