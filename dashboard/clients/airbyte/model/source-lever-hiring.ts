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
import type { AuthenticationMechanism2 } from './authentication-mechanism2';

/**
 * 
 * @export
 * @interface SourceLeverHiring
 */
export interface SourceLeverHiring {
    /**
     * 
     * @type {AuthenticationMechanism2}
     * @memberof SourceLeverHiring
     */
    'credentials'?: AuthenticationMechanism2;
    /**
     * UTC date and time in the format 2017-01-25T00:00:00Z. Any data before this date will not be replicated. Note that it will be used only in the following incremental streams: comments, commits, and issues.
     * @type {string}
     * @memberof SourceLeverHiring
     */
    'start_date': string;
    /**
     * The environment in which you\'d like to replicate data for Lever. This is used to determine which Lever API endpoint to use.
     * @type {string}
     * @memberof SourceLeverHiring
     */
    'environment'?: SourceLeverHiringEnvironmentEnum;
    /**
     * 
     * @type {string}
     * @memberof SourceLeverHiring
     */
    'sourceType': SourceLeverHiringSourceTypeEnum;
}

export const SourceLeverHiringEnvironmentEnum = {
    PRODUCTION: 'Production',
    SANDBOX: 'Sandbox'
} as const;

export type SourceLeverHiringEnvironmentEnum = typeof SourceLeverHiringEnvironmentEnum[keyof typeof SourceLeverHiringEnvironmentEnum];
export const SourceLeverHiringSourceTypeEnum = {
    LEVER_HIRING: 'lever-hiring'
} as const;

export type SourceLeverHiringSourceTypeEnum = typeof SourceLeverHiringSourceTypeEnum[keyof typeof SourceLeverHiringSourceTypeEnum];

