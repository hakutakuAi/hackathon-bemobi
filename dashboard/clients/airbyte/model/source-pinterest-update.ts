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
import type { OAuth2021 } from './oauth2021';
// May contain unused imports in some cases
// @ts-ignore
import type { ReportConfig } from './report-config';

/**
 * 
 * @export
 * @interface SourcePinterestUpdate
 */
export interface SourcePinterestUpdate {
    /**
     * A date in the format YYYY-MM-DD. If you have not set a date, it would be defaulted to latest allowed date by api (89 days from today).
     * @type {string}
     * @memberof SourcePinterestUpdate
     */
    'start_date'?: string;
    /**
     * For the ads, ad_groups, and campaigns streams, specifying a status will filter out records that do not match the specified ones. If a status is not specified, the source will default to records with a status of either ACTIVE or PAUSED.
     * @type {Set<string>}
     * @memberof SourcePinterestUpdate
     */
    'status'?: Set<SourcePinterestUpdateStatusEnum> | null;
    /**
     * 
     * @type {OAuth2021}
     * @memberof SourcePinterestUpdate
     */
    'credentials'?: OAuth2021;
    /**
     * A list which contains ad statistics entries, each entry must have a name and can contains fields, breakdowns or action_breakdowns. Click on \"add\" to fill this field.
     * @type {Array<ReportConfig>}
     * @memberof SourcePinterestUpdate
     */
    'custom_reports'?: Array<ReportConfig>;
}

export const SourcePinterestUpdateStatusEnum = {
    ACTIVE: 'ACTIVE',
    PAUSED: 'PAUSED',
    ARCHIVED: 'ARCHIVED'
} as const;

export type SourcePinterestUpdateStatusEnum = typeof SourcePinterestUpdateStatusEnum[keyof typeof SourcePinterestUpdateStatusEnum];

