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
 * MongoDB Atlas-hosted cluster configured as a replica set
 * @export
 * @interface MongoDBAtlasReplicaSet
 */
export interface MongoDBAtlasReplicaSet {
    [key: string]: any;

    /**
     * 
     * @type {string}
     * @memberof MongoDBAtlasReplicaSet
     */
    'cluster_type': MongoDBAtlasReplicaSetClusterTypeEnum;
    /**
     * The connection string of the cluster that you want to replicate.
     * @type {string}
     * @memberof MongoDBAtlasReplicaSet
     */
    'connection_string': string;
    /**
     * The name of the MongoDB database that contains the collection(s) to replicate.
     * @type {string}
     * @memberof MongoDBAtlasReplicaSet
     */
    'database': string;
    /**
     * The username which is used to access the database.
     * @type {string}
     * @memberof MongoDBAtlasReplicaSet
     */
    'username': string;
    /**
     * The password associated with this username.
     * @type {string}
     * @memberof MongoDBAtlasReplicaSet
     */
    'password': string;
    /**
     * The authentication source where the user information is stored.  See https://www.mongodb.com/docs/manual/reference/connection-string/#mongodb-urioption-urioption.authSource for more details.
     * @type {string}
     * @memberof MongoDBAtlasReplicaSet
     */
    'auth_source': string;
    /**
     * When enabled, syncs will validate and structure records against the stream\'s schema.
     * @type {boolean}
     * @memberof MongoDBAtlasReplicaSet
     */
    'schema_enforced'?: boolean;
}

export const MongoDBAtlasReplicaSetClusterTypeEnum = {
    ATLAS_REPLICA_SET: 'ATLAS_REPLICA_SET'
} as const;

export type MongoDBAtlasReplicaSetClusterTypeEnum = typeof MongoDBAtlasReplicaSetClusterTypeEnum[keyof typeof MongoDBAtlasReplicaSetClusterTypeEnum];

