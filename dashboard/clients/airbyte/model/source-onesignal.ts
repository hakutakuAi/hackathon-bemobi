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
import type { SourceOnesignalApplicationsInner } from './source-onesignal-applications-inner';

/**
 * 
 * @export
 * @interface SourceOnesignal
 */
export interface SourceOnesignal {
    /**
     * OneSignal User Auth Key, see the <a href=\"https://documentation.onesignal.com/docs/accounts-and-keys#user-auth-key\">docs</a> for more information on how to obtain this key.
     * @type {string}
     * @memberof SourceOnesignal
     */
    'user_auth_key': string;
    /**
     * Applications keys, see the <a href=\"https://documentation.onesignal.com/docs/accounts-and-keys\">docs</a> for more information on how to obtain this data
     * @type {Array<SourceOnesignalApplicationsInner>}
     * @memberof SourceOnesignal
     */
    'applications': Array<SourceOnesignalApplicationsInner>;
    /**
     * The date from which you\'d like to replicate data for OneSignal API, in the format YYYY-MM-DDT00:00:00Z. All data generated after this date will be replicated.
     * @type {string}
     * @memberof SourceOnesignal
     */
    'start_date': string;
    /**
     * Comma-separated list of names and the value (sum/count) for the returned outcome data. See the <a href=\"https://documentation.onesignal.com/reference/view-outcomes\">docs</a> for more details
     * @type {string}
     * @memberof SourceOnesignal
     */
    'outcome_names': string;
    /**
     * 
     * @type {string}
     * @memberof SourceOnesignal
     */
    'sourceType': SourceOnesignalSourceTypeEnum;
}

export const SourceOnesignalSourceTypeEnum = {
    ONESIGNAL: 'onesignal'
} as const;

export type SourceOnesignalSourceTypeEnum = typeof SourceOnesignalSourceTypeEnum[keyof typeof SourceOnesignalSourceTypeEnum];

