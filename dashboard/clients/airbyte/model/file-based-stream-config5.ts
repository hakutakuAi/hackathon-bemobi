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
import type { Format } from './format';

/**
 * 
 * @export
 * @interface FileBasedStreamConfig5
 */
export interface FileBasedStreamConfig5 {
    /**
     * The name of the stream.
     * @type {string}
     * @memberof FileBasedStreamConfig5
     */
    'name': string;
    /**
     * The pattern used to specify which files should be selected from the file system. For more information on glob pattern matching look <a href=\"https://en.wikipedia.org/wiki/Glob_(programming)\">here</a>.
     * @type {Array<string>}
     * @memberof FileBasedStreamConfig5
     */
    'globs'?: Array<string>;
    /**
     * The name of the validation policy that dictates sync behavior when a record does not adhere to the stream schema.
     * @type {string}
     * @memberof FileBasedStreamConfig5
     */
    'validation_policy'?: FileBasedStreamConfig5ValidationPolicyEnum;
    /**
     * The schema that will be used to validate records extracted from the file. This will override the stream schema that is auto-detected from incoming files.
     * @type {string}
     * @memberof FileBasedStreamConfig5
     */
    'input_schema'?: string;
    /**
     * When the state history of the file store is full, syncs will only read files that were last modified in the provided day range.
     * @type {number}
     * @memberof FileBasedStreamConfig5
     */
    'days_to_sync_if_history_is_full'?: number;
    /**
     * 
     * @type {Format}
     * @memberof FileBasedStreamConfig5
     */
    'format': Format;
    /**
     * When enabled, syncs will not validate or structure records against the stream\'s schema.
     * @type {boolean}
     * @memberof FileBasedStreamConfig5
     */
    'schemaless'?: boolean;
}

export const FileBasedStreamConfig5ValidationPolicyEnum = {
    EMIT_RECORD: 'Emit Record',
    SKIP_RECORD: 'Skip Record',
    WAIT_FOR_DISCOVER: 'Wait for Discover'
} as const;

export type FileBasedStreamConfig5ValidationPolicyEnum = typeof FileBasedStreamConfig5ValidationPolicyEnum[keyof typeof FileBasedStreamConfig5ValidationPolicyEnum];

