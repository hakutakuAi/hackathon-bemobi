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
 * @interface SourceJiraUpdate
 */
export interface SourceJiraUpdate {
    /**
     * Jira API Token. See the <a href=\"https://docs.airbyte.com/integrations/sources/jira\">docs</a> for more information on how to generate this key. API Token is used for Authorization to your account by BasicAuth.
     * @type {string}
     * @memberof SourceJiraUpdate
     */
    'api_token': string;
    /**
     * The Domain for your Jira account, e.g. airbyteio.atlassian.net, airbyteio.jira.com, jira.your-domain.com
     * @type {string}
     * @memberof SourceJiraUpdate
     */
    'domain': string;
    /**
     * The user email for your Jira account which you used to generate the API token. This field is used for Authorization to your account by BasicAuth.
     * @type {string}
     * @memberof SourceJiraUpdate
     */
    'email': string;
    /**
     * List of Jira project keys to replicate data for, or leave it empty if you want to replicate data for all projects.
     * @type {Array<string>}
     * @memberof SourceJiraUpdate
     */
    'projects'?: Array<string>;
    /**
     * The date from which you want to replicate data from Jira, use the format YYYY-MM-DDT00:00:00Z. Note that this field only applies to certain streams, and only data generated on or after the start date will be replicated. Or leave it empty if you want to replicate all data. For more information, refer to the <a href=\"https://docs.airbyte.com/integrations/sources/jira/\">documentation</a>.
     * @type {string}
     * @memberof SourceJiraUpdate
     */
    'start_date'?: string;
    /**
     * When set to N, the connector will always refresh resources created within the past N minutes. By default, updated objects that are not newly created are not incrementally synced.
     * @type {number}
     * @memberof SourceJiraUpdate
     */
    'lookback_window_minutes'?: number;
    /**
     * Allow the use of experimental streams which rely on undocumented Jira API endpoints. See https://docs.airbyte.com/integrations/sources/jira#experimental-tables for more info.
     * @type {boolean}
     * @memberof SourceJiraUpdate
     */
    'enable_experimental_streams'?: boolean;
}
