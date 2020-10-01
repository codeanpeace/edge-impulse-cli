/**
 * Edge Impulse API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UpdateProjectRequestExperiments } from './updateProjectRequestExperiments';

/**
* Only fields set in this object will be updated.
*/
export class UpdateProjectRequest {
    /**
    * New logo URL, or set to `null` to remove the logo.
    */
    'logo'?: string;
    /**
    * New project name.
    */
    'name'?: string;
    /**
    * Call this when clicking the Eon compiler setting
    */
    'lastDeployEonCompiler'?: boolean;
    /**
    * MCU used for calculating latency
    */
    'latencyDevice'?: UpdateProjectRequestLatencyDeviceEnum;
    'experiments'?: UpdateProjectRequestExperiments;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "logo",
            "baseName": "logo",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "lastDeployEonCompiler",
            "baseName": "lastDeployEonCompiler",
            "type": "boolean"
        },
        {
            "name": "latencyDevice",
            "baseName": "latencyDevice",
            "type": "UpdateProjectRequestLatencyDeviceEnum"
        },
        {
            "name": "experiments",
            "baseName": "experiments",
            "type": "UpdateProjectRequestExperiments"
        }    ];

    static getAttributeTypeMap() {
        return UpdateProjectRequest.attributeTypeMap;
    }
}


export type UpdateProjectRequestLatencyDeviceEnum = 'cortex-m4f-64mhz' | 'cortex-m4f-80mhz' | 'cortex-m7-216mhz';
export const UpdateProjectRequestLatencyDeviceEnumValues: string[] = ['cortex-m4f-64mhz', 'cortex-m4f-80mhz', 'cortex-m7-216mhz'];
