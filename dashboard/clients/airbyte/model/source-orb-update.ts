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
 * @interface SourceOrbUpdate
 */
export interface SourceOrbUpdate {
    /**
     * Orb API Key, issued from the Orb admin console.
     * @type {string}
     * @memberof SourceOrbUpdate
     */
    'api_key': string;
    /**
     * UTC date and time in the format 2022-03-01T00:00:00Z. Any data with created_at before this data will not be synced. For Subscription Usage, this becomes the `timeframe_start` API parameter.
     * @type {string}
     * @memberof SourceOrbUpdate
     */
    'start_date': string;
    /**
     * UTC date and time in the format 2022-03-01T00:00:00Z. Any data with created_at after this data will not be synced. For Subscription Usage, this becomes the `timeframe_start` API parameter.
     * @type {string}
     * @memberof SourceOrbUpdate
     */
    'end_date'?: string;
    /**
     * When set to N, the connector will always refresh resources created within the past N days. By default, updated objects that are not newly created are not incrementally synced.
     * @type {number}
     * @memberof SourceOrbUpdate
     */
    'lookback_window_days'?: number;
    /**
     * Property key names to extract from all events, in order to enrich ledger entries corresponding to an event deduction.
     * @type {Array<string>}
     * @memberof SourceOrbUpdate
     */
    'string_event_properties_keys'?: Array<string>;
    /**
     * Property key names to extract from all events, in order to enrich ledger entries corresponding to an event deduction.
     * @type {Array<string>}
     * @memberof SourceOrbUpdate
     */
    'numeric_event_properties_keys'?: Array<string>;
    /**
     * Property key name to group subscription usage by.
     * @type {string}
     * @memberof SourceOrbUpdate
     */
    'subscription_usage_grouping_key'?: string;
    /**
     * Orb Plan ID to filter subscriptions that should have usage fetched.
     * @type {string}
     * @memberof SourceOrbUpdate
     */
    'plan_id'?: string;
}
