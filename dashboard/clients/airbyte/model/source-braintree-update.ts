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
 * @interface SourceBraintreeUpdate
 */
export interface SourceBraintreeUpdate {
    /**
     * The unique identifier for your entire gateway account. See the <a href=\"https://docs.airbyte.com/integrations/sources/braintree\">docs</a> for more information on how to obtain this ID.
     * @type {string}
     * @memberof SourceBraintreeUpdate
     */
    'merchant_id': string;
    /**
     * Braintree Public Key. See the <a href=\"https://docs.airbyte.com/integrations/sources/braintree\">docs</a> for more information on how to obtain this key.
     * @type {string}
     * @memberof SourceBraintreeUpdate
     */
    'public_key': string;
    /**
     * Braintree Private Key. See the <a href=\"https://docs.airbyte.com/integrations/sources/braintree\">docs</a> for more information on how to obtain this key.
     * @type {string}
     * @memberof SourceBraintreeUpdate
     */
    'private_key': string;
    /**
     * UTC date and time in the format 2017-01-25T00:00:00Z. Any data before this date will not be replicated.
     * @type {string}
     * @memberof SourceBraintreeUpdate
     */
    'start_date'?: string;
    /**
     * Environment specifies where the data will come from.
     * @type {string}
     * @memberof SourceBraintreeUpdate
     */
    'environment': SourceBraintreeUpdateEnvironmentEnum;
}

export const SourceBraintreeUpdateEnvironmentEnum = {
    DEVELOPMENT: 'Development',
    SANDBOX: 'Sandbox',
    QA: 'Qa',
    PRODUCTION: 'Production'
} as const;

export type SourceBraintreeUpdateEnvironmentEnum = typeof SourceBraintreeUpdateEnvironmentEnum[keyof typeof SourceBraintreeUpdateEnvironmentEnum];

