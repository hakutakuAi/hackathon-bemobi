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
 * Verify-ca SSL mode.
 * @export
 * @interface VerifyCa2
 */
export interface VerifyCa2 {
    [key: string]: any;

    /**
     * 
     * @type {string}
     * @memberof VerifyCa2
     */
    'mode': VerifyCa2ModeEnum;
    /**
     * Specifies the file name of a PEM file that contains Certificate Authority (CA) certificates for use with SSLMODE=verify-ca.  See more information - <a href=\"https://teradata-docs.s3.amazonaws.com/doc/connectivity/jdbc/reference/current/jdbcug_chapter_2.html#URL_SSLCA\"> in the docs</a>.
     * @type {string}
     * @memberof VerifyCa2
     */
    'ssl_ca_certificate': string;
}

export const VerifyCa2ModeEnum = {
    VERIFY_CA: 'verify-ca'
} as const;

export type VerifyCa2ModeEnum = typeof VerifyCa2ModeEnum[keyof typeof VerifyCa2ModeEnum];

