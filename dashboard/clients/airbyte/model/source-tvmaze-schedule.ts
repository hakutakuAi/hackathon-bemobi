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
 * @interface SourceTvmazeSchedule
 */
export interface SourceTvmazeSchedule {
    /**
     * Start date for TV schedule retrieval. May be in the future.
     * @type {string}
     * @memberof SourceTvmazeSchedule
     */
    'start_date': string;
    /**
     * End date for TV schedule retrieval. May be in the future. Optional. 
     * @type {string}
     * @memberof SourceTvmazeSchedule
     */
    'end_date'?: string;
    /**
     * Country code for domestic TV schedule retrieval.
     * @type {string}
     * @memberof SourceTvmazeSchedule
     */
    'domestic_schedule_country_code': string;
    /**
     * ISO 3166-1 country code for web TV schedule retrieval. Leave blank for all countries plus global web channels (e.g. Netflix). Alternatively, set to \'global\' for just global web channels. 
     * @type {string}
     * @memberof SourceTvmazeSchedule
     */
    'web_schedule_country_code'?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceTvmazeSchedule
     */
    'sourceType': SourceTvmazeScheduleSourceTypeEnum;
}

export const SourceTvmazeScheduleSourceTypeEnum = {
    TVMAZE_SCHEDULE: 'tvmaze-schedule'
} as const;

export type SourceTvmazeScheduleSourceTypeEnum = typeof SourceTvmazeScheduleSourceTypeEnum[keyof typeof SourceTvmazeScheduleSourceTypeEnum];

