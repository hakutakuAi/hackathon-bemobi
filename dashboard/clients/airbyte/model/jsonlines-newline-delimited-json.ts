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
import type { Compression1 } from './compression1';

/**
 * 
 * @export
 * @interface JSONLinesNewlineDelimitedJSON
 */
export interface JSONLinesNewlineDelimitedJSON {
    /**
     * 
     * @type {string}
     * @memberof JSONLinesNewlineDelimitedJSON
     */
    'format_type': JSONLinesNewlineDelimitedJSONFormatTypeEnum;
    /**
     * 
     * @type {Compression1}
     * @memberof JSONLinesNewlineDelimitedJSON
     */
    'compression'?: Compression1;
    /**
     * Whether the input json data should be normalized (flattened) in the output JSON Lines. Please refer to docs for details.
     * @type {string}
     * @memberof JSONLinesNewlineDelimitedJSON
     */
    'flattening'?: JSONLinesNewlineDelimitedJSONFlatteningEnum;
}

export const JSONLinesNewlineDelimitedJSONFormatTypeEnum = {
    JSONL: 'JSONL'
} as const;

export type JSONLinesNewlineDelimitedJSONFormatTypeEnum = typeof JSONLinesNewlineDelimitedJSONFormatTypeEnum[keyof typeof JSONLinesNewlineDelimitedJSONFormatTypeEnum];
export const JSONLinesNewlineDelimitedJSONFlatteningEnum = {
    NO_FLATTENING: 'No flattening',
    ROOT_LEVEL_FLATTENING: 'Root level flattening'
} as const;

export type JSONLinesNewlineDelimitedJSONFlatteningEnum = typeof JSONLinesNewlineDelimitedJSONFlatteningEnum[keyof typeof JSONLinesNewlineDelimitedJSONFlatteningEnum];

