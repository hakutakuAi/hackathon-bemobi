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
 * @interface Enabled1CohortsRange
 */
export interface Enabled1CohortsRange {
    /**
     * The granularity used to interpret the startOffset and endOffset for the extended reporting date range for a cohort report.
     * @type {string}
     * @memberof Enabled1CohortsRange
     */
    'granularity': Enabled1CohortsRangeGranularityEnum;
    /**
     * Specifies the start date of the extended reporting date range for a cohort report.
     * @type {number}
     * @memberof Enabled1CohortsRange
     */
    'startOffset'?: number;
    /**
     * Specifies the end date of the extended reporting date range for a cohort report.
     * @type {number}
     * @memberof Enabled1CohortsRange
     */
    'endOffset': number;
}

export const Enabled1CohortsRangeGranularityEnum = {
    GRANULARITY_UNSPECIFIED: 'GRANULARITY_UNSPECIFIED',
    DAILY: 'DAILY',
    WEEKLY: 'WEEKLY',
    MONTHLY: 'MONTHLY'
} as const;

export type Enabled1CohortsRangeGranularityEnum = typeof Enabled1CohortsRangeGranularityEnum[keyof typeof Enabled1CohortsRangeGranularityEnum];

