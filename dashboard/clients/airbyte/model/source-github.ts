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
import type { Authentication22 } from './authentication22';

/**
 * 
 * @export
 * @interface SourceGithub
 */
export interface SourceGithub {
    /**
     * 
     * @type {Authentication22}
     * @memberof SourceGithub
     */
    'credentials': Authentication22;
    /**
     * List of GitHub organizations/repositories, e.g. `airbytehq/airbyte` for single repository, `airbytehq/_*` for get all repositories from organization and `airbytehq/a* for matching multiple repositories by pattern.
     * @type {Array<string>}
     * @memberof SourceGithub
     */
    'repositories': Array<string>;
    /**
     * The date from which you\'d like to replicate data from GitHub in the format YYYY-MM-DDT00:00:00Z. If the date is not set, all data will be replicated.  For the streams which support this configuration, only data generated on or after the start date will be replicated. This field doesn\'t apply to all streams, see the <a href=\"https://docs.airbyte.com/integrations/sources/github\">docs</a> for more info
     * @type {string}
     * @memberof SourceGithub
     */
    'start_date'?: string;
    /**
     * Please enter your basic URL from self-hosted GitHub instance or leave it empty to use GitHub.
     * @type {string}
     * @memberof SourceGithub
     */
    'api_url'?: string;
    /**
     * List of GitHub repository branches to pull commits for, e.g. `airbytehq/airbyte/master`. If no branches are specified for a repository, the default branch will be pulled.
     * @type {Array<string>}
     * @memberof SourceGithub
     */
    'branches'?: Array<string>;
    /**
     * Max Waiting Time for rate limit. Set higher value to wait till rate limits will be resetted to continue sync
     * @type {number}
     * @memberof SourceGithub
     */
    'max_waiting_time'?: number;
    /**
     * 
     * @type {string}
     * @memberof SourceGithub
     */
    'sourceType': SourceGithubSourceTypeEnum;
}

export const SourceGithubSourceTypeEnum = {
    GITHUB: 'github'
} as const;

export type SourceGithubSourceTypeEnum = typeof SourceGithubSourceTypeEnum[keyof typeof SourceGithubSourceTypeEnum];

