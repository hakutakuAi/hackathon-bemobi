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
 * @interface OAuth2Recommended
 */
export interface OAuth2Recommended {
    /**
     * 
     * @type {string}
     * @memberof OAuth2Recommended
     */
    'auth_type': OAuth2RecommendedAuthTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof OAuth2Recommended
     */
    'client_id': string;
    /**
     * 
     * @type {string}
     * @memberof OAuth2Recommended
     */
    'secret': string;
}

export const OAuth2RecommendedAuthTypeEnum = {
    OAUTH: 'OAUTH'
} as const;

export type OAuth2RecommendedAuthTypeEnum = typeof OAuth2RecommendedAuthTypeEnum[keyof typeof OAuth2RecommendedAuthTypeEnum];

