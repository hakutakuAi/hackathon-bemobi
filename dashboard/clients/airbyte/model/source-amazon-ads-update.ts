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
 * @interface SourceAmazonAdsUpdate
 */
export interface SourceAmazonAdsUpdate {
    /**
     * 
     * @type {string}
     * @memberof SourceAmazonAdsUpdate
     */
    'auth_type'?: SourceAmazonAdsUpdateAuthTypeEnum;
    /**
     * The client ID of your Amazon Ads developer application. See the <a href=\"https://advertising.amazon.com/API/docs/en-us/get-started/generate-api-tokens#retrieve-your-client-id-and-client-secret\">docs</a> for more information.
     * @type {string}
     * @memberof SourceAmazonAdsUpdate
     */
    'client_id': string;
    /**
     * The client secret of your Amazon Ads developer application. See the <a href=\"https://advertising.amazon.com/API/docs/en-us/get-started/generate-api-tokens#retrieve-your-client-id-and-client-secret\">docs</a> for more information.
     * @type {string}
     * @memberof SourceAmazonAdsUpdate
     */
    'client_secret': string;
    /**
     * Amazon Ads refresh token. See the <a href=\"https://advertising.amazon.com/API/docs/en-us/get-started/generate-api-tokens\">docs</a> for more information on how to obtain this token.
     * @type {string}
     * @memberof SourceAmazonAdsUpdate
     */
    'refresh_token': string;
    /**
     * Region to pull data from (EU/NA/FE). See <a href=\"https://advertising.amazon.com/API/docs/en-us/info/api-overview#api-endpoints\">docs</a> for more details.
     * @type {string}
     * @memberof SourceAmazonAdsUpdate
     */
    'region'?: SourceAmazonAdsUpdateRegionEnum;
    /**
     * The Start date for collecting reports, should not be more than 60 days in the past. In YYYY-MM-DD format
     * @type {string}
     * @memberof SourceAmazonAdsUpdate
     */
    'start_date'?: string;
    /**
     * Profile IDs you want to fetch data for. The Amazon Ads source connector supports only profiles with seller and vendor type, profiles with agency type will be ignored. See <a href=\"https://advertising.amazon.com/API/docs/en-us/concepts/authorization/profiles\">docs</a> for more details. Note: If Marketplace IDs are also selected, profiles will be selected if they match the Profile ID OR the Marketplace ID.
     * @type {Array<number>}
     * @memberof SourceAmazonAdsUpdate
     */
    'profiles'?: Array<number>;
    /**
     * Marketplace IDs you want to fetch data for. Note: If Profile IDs are also selected, profiles will be selected if they match the Profile ID OR the Marketplace ID.
     * @type {Array<string>}
     * @memberof SourceAmazonAdsUpdate
     */
    'marketplace_ids'?: Array<string>;
    /**
     * Reflects the state of the Display, Product, and Brand Campaign streams as enabled, paused, or archived. If you do not populate this field, it will be ignored completely.
     * @type {Set<string>}
     * @memberof SourceAmazonAdsUpdate
     */
    'state_filter'?: Set<SourceAmazonAdsUpdateStateFilterEnum>;
    /**
     * The amount of days to go back in time to get the updated data from Amazon Ads
     * @type {number}
     * @memberof SourceAmazonAdsUpdate
     */
    'look_back_window'?: number;
    /**
     * Optional configuration which accepts an array of string of record types. Leave blank for default behaviour to pull all report types. Use this config option only if you want to pull specific report type(s). See <a href=\"https://advertising.amazon.com/API/docs/en-us/reporting/v2/report-types\">docs</a> for more details
     * @type {Set<string>}
     * @memberof SourceAmazonAdsUpdate
     */
    'report_record_types'?: Set<SourceAmazonAdsUpdateReportRecordTypesEnum>;
}

export const SourceAmazonAdsUpdateAuthTypeEnum = {
    OAUTH2_0: 'oauth2.0'
} as const;

export type SourceAmazonAdsUpdateAuthTypeEnum = typeof SourceAmazonAdsUpdateAuthTypeEnum[keyof typeof SourceAmazonAdsUpdateAuthTypeEnum];
export const SourceAmazonAdsUpdateRegionEnum = {
    NA: 'NA',
    EU: 'EU',
    FE: 'FE'
} as const;

export type SourceAmazonAdsUpdateRegionEnum = typeof SourceAmazonAdsUpdateRegionEnum[keyof typeof SourceAmazonAdsUpdateRegionEnum];
export const SourceAmazonAdsUpdateStateFilterEnum = {
    ENABLED: 'enabled',
    PAUSED: 'paused',
    ARCHIVED: 'archived'
} as const;

export type SourceAmazonAdsUpdateStateFilterEnum = typeof SourceAmazonAdsUpdateStateFilterEnum[keyof typeof SourceAmazonAdsUpdateStateFilterEnum];
export const SourceAmazonAdsUpdateReportRecordTypesEnum = {
    AD_GROUPS: 'adGroups',
    ASINS: 'asins',
    ASINS_KEYWORDS: 'asins_keywords',
    ASINS_TARGETS: 'asins_targets',
    CAMPAIGNS: 'campaigns',
    KEYWORDS: 'keywords',
    PRODUCT_ADS: 'productAds',
    TARGETS: 'targets'
} as const;

export type SourceAmazonAdsUpdateReportRecordTypesEnum = typeof SourceAmazonAdsUpdateReportRecordTypesEnum[keyof typeof SourceAmazonAdsUpdateReportRecordTypesEnum];

