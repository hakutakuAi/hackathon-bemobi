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
 * @interface SourceConfluenceUpdate
 */
export interface SourceConfluenceUpdate {
    /**
     * Your Confluence login email
     * @type {string}
     * @memberof SourceConfluenceUpdate
     */
    'email': string;
    /**
     * Please follow the Jira confluence for generating an API token: <a href=\"https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/\">generating an API token</a>.
     * @type {string}
     * @memberof SourceConfluenceUpdate
     */
    'api_token': string;
    /**
     * Your Confluence domain name
     * @type {string}
     * @memberof SourceConfluenceUpdate
     */
    'domain_name': string;
}
