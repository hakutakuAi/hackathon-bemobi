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
import type { Authentication3 } from './authentication3';

/**
 * 
 * @export
 * @interface SourceLinkedinPagesUpdate
 */
export interface SourceLinkedinPagesUpdate {
    /**
     * 
     * @type {Authentication3}
     * @memberof SourceLinkedinPagesUpdate
     */
    'credentials'?: Authentication3;
    /**
     * Specify the Organization ID
     * @type {string}
     * @memberof SourceLinkedinPagesUpdate
     */
    'org_id': string;
    /**
     * Start date for getting metrics per time period. Must be atmost 12 months before the request date (UTC) and atleast 2 days prior to the request date (UTC). See https://bit.ly/linkedin-pages-date-rules {{ \"\\n\" }} {{ response.errorDetails }}
     * @type {string}
     * @memberof SourceLinkedinPagesUpdate
     */
    'start_date'?: string;
    /**
     * Granularity of the statistics for metrics per time period. Must be either \"DAY\" or \"MONTH\"
     * @type {string}
     * @memberof SourceLinkedinPagesUpdate
     */
    'time_granularity_type'?: SourceLinkedinPagesUpdateTimeGranularityTypeEnum;
}

export const SourceLinkedinPagesUpdateTimeGranularityTypeEnum = {
    DAY: 'DAY',
    MONTH: 'MONTH'
} as const;

export type SourceLinkedinPagesUpdateTimeGranularityTypeEnum = typeof SourceLinkedinPagesUpdateTimeGranularityTypeEnum[keyof typeof SourceLinkedinPagesUpdateTimeGranularityTypeEnum];

