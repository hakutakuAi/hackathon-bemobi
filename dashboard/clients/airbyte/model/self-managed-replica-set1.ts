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
 * MongoDB self-hosted cluster configured as a replica set
 * @export
 * @interface SelfManagedReplicaSet1
 */
export interface SelfManagedReplicaSet1 {
    [key: string]: any;

    /**
     * 
     * @type {string}
     * @memberof SelfManagedReplicaSet1
     */
    'cluster_type': SelfManagedReplicaSet1ClusterTypeEnum;
    /**
     * The connection string of the cluster that you want to replicate.  https://www.mongodb.com/docs/manual/reference/connection-string/#find-your-self-hosted-deployment-s-connection-string for more information.
     * @type {string}
     * @memberof SelfManagedReplicaSet1
     */
    'connection_string': string;
    /**
     * The name of the MongoDB database that contains the collection(s) to replicate.
     * @type {string}
     * @memberof SelfManagedReplicaSet1
     */
    'database': string;
    /**
     * The username which is used to access the database.
     * @type {string}
     * @memberof SelfManagedReplicaSet1
     */
    'username'?: string;
    /**
     * The password associated with this username.
     * @type {string}
     * @memberof SelfManagedReplicaSet1
     */
    'password'?: string;
    /**
     * The authentication source where the user information is stored.
     * @type {string}
     * @memberof SelfManagedReplicaSet1
     */
    'auth_source'?: string;
    /**
     * When enabled, syncs will validate and structure records against the stream\'s schema.
     * @type {boolean}
     * @memberof SelfManagedReplicaSet1
     */
    'schema_enforced'?: boolean;
}

export const SelfManagedReplicaSet1ClusterTypeEnum = {
    SELF_MANAGED_REPLICA_SET: 'SELF_MANAGED_REPLICA_SET'
} as const;

export type SelfManagedReplicaSet1ClusterTypeEnum = typeof SelfManagedReplicaSet1ClusterTypeEnum[keyof typeof SelfManagedReplicaSet1ClusterTypeEnum];

