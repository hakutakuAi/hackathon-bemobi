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
import type { Authentication17 } from './authentication17';
// May contain unused imports in some cases
// @ts-ignore
import type { FileBasedStreamConfig5 } from './file-based-stream-config5';

/**
 * SourceMicrosoftOneDriveSpec class for Microsoft OneDrive Source Specification. This class combines the authentication details with additional configuration for the OneDrive API.
 * @export
 * @interface SourceMicrosoftOnedriveUpdate
 */
export interface SourceMicrosoftOnedriveUpdate {
    /**
     * UTC date and time in the format 2017-01-25T00:00:00.000000Z. Any file modified before this date will not be replicated.
     * @type {string}
     * @memberof SourceMicrosoftOnedriveUpdate
     */
    'start_date'?: string;
    /**
     * Each instance of this configuration defines a <a href=\"https://docs.airbyte.com/cloud/core-concepts#stream\">stream</a>. Use this to define which files belong in the stream, their format, and how they should be parsed and validated. When sending data to warehouse destination such as Snowflake or BigQuery, each stream is a separate table.
     * @type {Array<FileBasedStreamConfig5>}
     * @memberof SourceMicrosoftOnedriveUpdate
     */
    'streams': Array<FileBasedStreamConfig5>;
    /**
     * 
     * @type {Authentication17}
     * @memberof SourceMicrosoftOnedriveUpdate
     */
    'credentials': Authentication17;
    /**
     * Name of the Microsoft OneDrive drive where the file(s) exist.
     * @type {string}
     * @memberof SourceMicrosoftOnedriveUpdate
     */
    'drive_name'?: string;
    /**
     * Specifies the location(s) to search for files. Valid options are \'ACCESSIBLE_DRIVES\' to search in the selected OneDrive drive, \'SHARED_ITEMS\' for shared items the user has access to, and \'ALL\' to search both.
     * @type {string}
     * @memberof SourceMicrosoftOnedriveUpdate
     */
    'search_scope'?: SourceMicrosoftOnedriveUpdateSearchScopeEnum;
    /**
     * Path to a specific folder within the drives to search for files. Leave empty to search all folders of the drives. This does not apply to shared items.
     * @type {string}
     * @memberof SourceMicrosoftOnedriveUpdate
     */
    'folder_path'?: string;
}

export const SourceMicrosoftOnedriveUpdateSearchScopeEnum = {
    ACCESSIBLE_DRIVES: 'ACCESSIBLE_DRIVES',
    SHARED_ITEMS: 'SHARED_ITEMS',
    ALL: 'ALL'
} as const;

export type SourceMicrosoftOnedriveUpdateSearchScopeEnum = typeof SourceMicrosoftOnedriveUpdateSearchScopeEnum[keyof typeof SourceMicrosoftOnedriveUpdateSearchScopeEnum];

