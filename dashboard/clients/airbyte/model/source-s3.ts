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
import type { FileBasedStreamConfig } from './file-based-stream-config';

/**
 * NOTE: When this Spec is changed, legacy_config_transformer.py must also be modified to uptake the changes because it is responsible for converting legacy S3 v3 configs into v4 configs using the File-Based CDK.
 * @export
 * @interface SourceS3
 */
export interface SourceS3 {
    /**
     * UTC date and time in the format 2017-01-25T00:00:00.000000Z. Any file modified before this date will not be replicated.
     * @type {string}
     * @memberof SourceS3
     */
    'start_date'?: string;
    /**
     * Each instance of this configuration defines a <a href=\"https://docs.airbyte.com/cloud/core-concepts#stream\">stream</a>. Use this to define which files belong in the stream, their format, and how they should be parsed and validated. When sending data to warehouse destination such as Snowflake or BigQuery, each stream is a separate table.
     * @type {Array<FileBasedStreamConfig>}
     * @memberof SourceS3
     */
    'streams': Array<FileBasedStreamConfig>;
    /**
     * Name of the S3 bucket where the file(s) exist.
     * @type {string}
     * @memberof SourceS3
     */
    'bucket': string;
    /**
     * In order to access private Buckets stored on AWS S3, this connector requires credentials with the proper permissions. If accessing publicly available data, this field is not necessary.
     * @type {string}
     * @memberof SourceS3
     */
    'aws_access_key_id'?: string;
    /**
     * Specifies the Amazon Resource Name (ARN) of an IAM role that you want to use to perform operations requested using this profile. Set the External ID to the Airbyte workspace ID, which can be found in the URL of this page.
     * @type {string}
     * @memberof SourceS3
     */
    'role_arn'?: string;
    /**
     * In order to access private Buckets stored on AWS S3, this connector requires credentials with the proper permissions. If accessing publicly available data, this field is not necessary.
     * @type {string}
     * @memberof SourceS3
     */
    'aws_secret_access_key'?: string;
    /**
     * Endpoint to an S3 compatible service. Leave empty to use AWS.
     * @type {string}
     * @memberof SourceS3
     */
    'endpoint'?: string;
    /**
     * AWS region where the S3 bucket is located. If not provided, the region will be determined automatically.
     * @type {string}
     * @memberof SourceS3
     */
    'region_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceS3
     */
    'sourceType': SourceS3SourceTypeEnum;
}

export const SourceS3SourceTypeEnum = {
    S3: 's3'
} as const;

export type SourceS3SourceTypeEnum = typeof SourceS3SourceTypeEnum[keyof typeof SourceS3SourceTypeEnum];

