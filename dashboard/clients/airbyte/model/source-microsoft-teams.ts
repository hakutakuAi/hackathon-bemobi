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
import type { AuthenticationMechanism6 } from './authentication-mechanism6';

/**
 * 
 * @export
 * @interface SourceMicrosoftTeams
 */
export interface SourceMicrosoftTeams {
    /**
     * Specifies the length of time over which the Team Device Report stream is aggregated. The supported values are: D7, D30, D90, and D180.
     * @type {string}
     * @memberof SourceMicrosoftTeams
     */
    'period': string;
    /**
     * 
     * @type {AuthenticationMechanism6}
     * @memberof SourceMicrosoftTeams
     */
    'credentials'?: AuthenticationMechanism6;
    /**
     * 
     * @type {string}
     * @memberof SourceMicrosoftTeams
     */
    'sourceType': SourceMicrosoftTeamsSourceTypeEnum;
}

export const SourceMicrosoftTeamsSourceTypeEnum = {
    MICROSOFT_TEAMS: 'microsoft-teams'
} as const;

export type SourceMicrosoftTeamsSourceTypeEnum = typeof SourceMicrosoftTeamsSourceTypeEnum[keyof typeof SourceMicrosoftTeamsSourceTypeEnum];

