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
 * @interface SourceInstagramUpdate
 */
export interface SourceInstagramUpdate {
    /**
     * The date from which you\'d like to replicate data for User Insights, in the format YYYY-MM-DDT00:00:00Z. All data generated after this date will be replicated. If left blank, the start date will be set to 2 years before the present date.
     * @type {string}
     * @memberof SourceInstagramUpdate
     */
    'start_date'?: string;
    /**
     * The value of the access token generated with <b>instagram_basic, instagram_manage_insights, pages_show_list, pages_read_engagement, Instagram Public Content Access</b> permissions. See the <a href=\"https://docs.airbyte.com/integrations/sources/instagram/#step-1-set-up-instagram\">docs</a> for more information
     * @type {string}
     * @memberof SourceInstagramUpdate
     */
    'access_token': string;
}
