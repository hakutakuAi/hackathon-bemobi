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
import type { Authentication28 } from './authentication28';

/**
 * 
 * @export
 * @interface SourceAirtable
 */
export interface SourceAirtable {
    /**
     * 
     * @type {Authentication28}
     * @memberof SourceAirtable
     */
    'credentials'?: Authentication28;
    /**
     * 
     * @type {string}
     * @memberof SourceAirtable
     */
    'sourceType'?: SourceAirtableSourceTypeEnum;
}

export const SourceAirtableSourceTypeEnum = {
    AIRTABLE: 'airtable'
} as const;

export type SourceAirtableSourceTypeEnum = typeof SourceAirtableSourceTypeEnum[keyof typeof SourceAirtableSourceTypeEnum];

