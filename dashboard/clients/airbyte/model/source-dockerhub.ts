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
 * @interface SourceDockerhub
 */
export interface SourceDockerhub {
    /**
     * Username of DockerHub person or organization (for https://hub.docker.com/v2/repositories/USERNAME/ API call)
     * @type {string}
     * @memberof SourceDockerhub
     */
    'docker_username': string;
    /**
     * 
     * @type {string}
     * @memberof SourceDockerhub
     */
    'sourceType': SourceDockerhubSourceTypeEnum;
}

export const SourceDockerhubSourceTypeEnum = {
    DOCKERHUB: 'dockerhub'
} as const;

export type SourceDockerhubSourceTypeEnum = typeof SourceDockerhubSourceTypeEnum[keyof typeof SourceDockerhubSourceTypeEnum];

