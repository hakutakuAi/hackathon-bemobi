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
import type { AuthorizationMethod9 } from './authorization-method9';

/**
 * 
 * @export
 * @interface SourceSmartsheetsUpdate
 */
export interface SourceSmartsheetsUpdate {
    /**
     * 
     * @type {AuthorizationMethod9}
     * @memberof SourceSmartsheetsUpdate
     */
    'credentials': AuthorizationMethod9;
    /**
     * The spreadsheet ID. Find it by opening the spreadsheet then navigating to File > Properties
     * @type {string}
     * @memberof SourceSmartsheetsUpdate
     */
    'spreadsheet_id': string;
    /**
     * A List of available columns which metadata can be pulled from.
     * @type {Array<string>}
     * @memberof SourceSmartsheetsUpdate
     */
    'metadata_fields'?: Array<SourceSmartsheetsUpdateMetadataFieldsEnum>;
}

export const SourceSmartsheetsUpdateMetadataFieldsEnum = {
    SHEETCREATED_AT: 'sheetcreatedAt',
    SHEETID: 'sheetid',
    SHEETMODIFIED_AT: 'sheetmodifiedAt',
    SHEETNAME: 'sheetname',
    SHEETPERMALINK: 'sheetpermalink',
    SHEETVERSION: 'sheetversion',
    SHEETACCESS_LEVEL: 'sheetaccess_level',
    ROW_ID: 'row_id',
    ROW_ACCESS_LEVEL: 'row_access_level',
    ROW_CREATED_AT: 'row_created_at',
    ROW_CREATED_BY: 'row_created_by',
    ROW_EXPANDED: 'row_expanded',
    ROW_MODIFIED_BY: 'row_modified_by',
    ROW_PARENT_ID: 'row_parent_id',
    ROW_PERMALINK: 'row_permalink',
    ROW_NUMBER: 'row_number',
    ROW_VERSION: 'row_version'
} as const;

export type SourceSmartsheetsUpdateMetadataFieldsEnum = typeof SourceSmartsheetsUpdateMetadataFieldsEnum[keyof typeof SourceSmartsheetsUpdateMetadataFieldsEnum];

