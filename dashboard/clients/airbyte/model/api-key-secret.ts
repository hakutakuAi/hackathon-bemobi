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
 * Use a api key and secret combination to authenticate
 * @export
 * @interface ApiKeySecret
 */
export interface ApiKeySecret {
    [key: string]: any;

    /**
     * 
     * @type {string}
     * @memberof ApiKeySecret
     */
    'method': ApiKeySecretMethodEnum;
    /**
     * The Key ID to used when accessing an enterprise Elasticsearch instance.
     * @type {string}
     * @memberof ApiKeySecret
     */
    'apiKeyId': string;
    /**
     * The secret associated with the API Key ID.
     * @type {string}
     * @memberof ApiKeySecret
     */
    'apiKeySecret': string;
}

export const ApiKeySecretMethodEnum = {
    SECRET: 'secret'
} as const;

export type ApiKeySecretMethodEnum = typeof ApiKeySecretMethodEnum[keyof typeof ApiKeySecretMethodEnum];

