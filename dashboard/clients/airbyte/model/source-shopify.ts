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
import type { ShopifyAuthorizationMethod } from './shopify-authorization-method';

/**
 * 
 * @export
 * @interface SourceShopify
 */
export interface SourceShopify {
    /**
     * The name of your Shopify store found in the URL. For example, if your URL was https://NAME.myshopify.com, then the name would be \'NAME\' or \'NAME.myshopify.com\'.
     * @type {string}
     * @memberof SourceShopify
     */
    'shop': string;
    /**
     * 
     * @type {ShopifyAuthorizationMethod}
     * @memberof SourceShopify
     */
    'credentials'?: ShopifyAuthorizationMethod;
    /**
     * The date you would like to replicate data from. Format: YYYY-MM-DD. Any data before this date will not be replicated.
     * @type {string}
     * @memberof SourceShopify
     */
    'start_date'?: string;
    /**
     * Defines what would be a date range per single BULK Job
     * @type {number}
     * @memberof SourceShopify
     */
    'bulk_window_in_days'?: number;
    /**
     * Defines which API type (REST/BULK) to use to fetch `Transactions` data. If you are a `Shopify Plus` user, leave the default value to speed up the fetch.
     * @type {boolean}
     * @memberof SourceShopify
     */
    'fetch_transactions_user_id'?: boolean;
    /**
     * If enabled, the `Product Variants` stream attempts to include `Presentment prices` field (may affect the performance).
     * @type {boolean}
     * @memberof SourceShopify
     */
    'job_product_variants_include_pres_prices'?: boolean;
    /**
     * The max time in seconds, after which the single BULK Job should be `CANCELED` and retried. The bigger the value the longer the BULK Job is allowed to run.
     * @type {number}
     * @memberof SourceShopify
     */
    'job_termination_threshold'?: number;
    /**
     * The threshold, after which the single BULK Job should be checkpointed.
     * @type {number}
     * @memberof SourceShopify
     */
    'job_checkpoint_interval'?: number;
    /**
     * 
     * @type {string}
     * @memberof SourceShopify
     */
    'sourceType': SourceShopifySourceTypeEnum;
}

export const SourceShopifySourceTypeEnum = {
    SHOPIFY: 'shopify'
} as const;

export type SourceShopifySourceTypeEnum = typeof SourceShopifySourceTypeEnum[keyof typeof SourceShopifySourceTypeEnum];

