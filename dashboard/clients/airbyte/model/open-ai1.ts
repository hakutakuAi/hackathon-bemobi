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
 * Use the OpenAI API to embed text. This option is using the text-embedding-ada-002 model with 1536 embedding dimensions.
 * @export
 * @interface OpenAI1
 */
export interface OpenAI1 {
    /**
     * 
     * @type {string}
     * @memberof OpenAI1
     */
    'mode': OpenAI1ModeEnum;
    /**
     * 
     * @type {string}
     * @memberof OpenAI1
     */
    'openai_key': string;
}

export const OpenAI1ModeEnum = {
    OPENAI: 'openai'
} as const;

export type OpenAI1ModeEnum = typeof OpenAI1ModeEnum[keyof typeof OpenAI1ModeEnum];

