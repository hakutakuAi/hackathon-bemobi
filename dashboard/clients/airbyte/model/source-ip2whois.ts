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
 * @interface SourceIp2whois
 */
export interface SourceIp2whois {
    /**
     * Your API Key. See <a href=\"https://www.ip2whois.com/developers-api\">here</a>.
     * @type {string}
     * @memberof SourceIp2whois
     */
    'api_key'?: string;
    /**
     * Domain name. See <a href=\"https://www.ip2whois.com/developers-api\">here</a>.
     * @type {string}
     * @memberof SourceIp2whois
     */
    'domain'?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceIp2whois
     */
    'sourceType': SourceIp2whoisSourceTypeEnum;
}

export const SourceIp2whoisSourceTypeEnum = {
    IP2WHOIS: 'ip2whois'
} as const;

export type SourceIp2whoisSourceTypeEnum = typeof SourceIp2whoisSourceTypeEnum[keyof typeof SourceIp2whoisSourceTypeEnum];

