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
 * @interface UsernameAndPassword
 */
export interface UsernameAndPassword {
    /**
     * 
     * @type {string}
     * @memberof UsernameAndPassword
     */
    'auth_type': UsernameAndPasswordAuthTypeEnum;
    /**
     * The username you created to allow Airbyte to access the database.
     * @type {string}
     * @memberof UsernameAndPassword
     */
    'username': string;
    /**
     * The password associated with the username.
     * @type {string}
     * @memberof UsernameAndPassword
     */
    'password': string;
}

export const UsernameAndPasswordAuthTypeEnum = {
    USERNAME_PASSWORD: 'username/password'
} as const;

export type UsernameAndPasswordAuthTypeEnum = typeof UsernameAndPasswordAuthTypeEnum[keyof typeof UsernameAndPasswordAuthTypeEnum];

