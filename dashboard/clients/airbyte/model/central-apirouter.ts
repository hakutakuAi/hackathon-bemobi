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
 * @interface CentralAPIRouter
 */
export interface CentralAPIRouter {
    /**
     * 
     * @type {string}
     * @memberof CentralAPIRouter
     */
    'auth_type': CentralAPIRouterAuthTypeEnum;
    /**
     * Enter your application\'s User Name
     * @type {string}
     * @memberof CentralAPIRouter
     */
    'user_name': string;
    /**
     * Enter your application\'s User Secret
     * @type {string}
     * @memberof CentralAPIRouter
     */
    'user_secret': string;
    /**
     * You can determine a site provisioning site Id by hitting https://site.com/store/sitemonitor.aspx and reading the response param PSID
     * @type {string}
     * @memberof CentralAPIRouter
     */
    'site_id': string;
}

export const CentralAPIRouterAuthTypeEnum = {
    CENTRAL_API_ROUTER: 'CENTRAL_API_ROUTER'
} as const;

export type CentralAPIRouterAuthTypeEnum = typeof CentralAPIRouterAuthTypeEnum[keyof typeof CentralAPIRouterAuthTypeEnum];

