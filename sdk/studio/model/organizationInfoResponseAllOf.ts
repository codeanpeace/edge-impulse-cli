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

import { Organization } from './organization';
import { OrganizationInfoResponseAllOfDatasets } from './organizationInfoResponseAllOfDatasets';
import { OrganizationInfoResponseAllOfDefaultComputeLimits } from './organizationInfoResponseAllOfDefaultComputeLimits';
import { ProjectInfoResponseAllOfExperiments } from './projectInfoResponseAllOfExperiments';
import { ProjectInfoResponseAllOfReadme } from './projectInfoResponseAllOfReadme';

export class OrganizationInfoResponseAllOf {
    'organization': Organization;
    'datasets': Array<OrganizationInfoResponseAllOfDatasets>;
    'defaultComputeLimits': OrganizationInfoResponseAllOfDefaultComputeLimits;
    /**
    * Experiments that the organization has access to. Enabling experiments can only be done through a JWT token.
    */
    'experiments': Array<ProjectInfoResponseAllOfExperiments>;
    'readme'?: ProjectInfoResponseAllOfReadme;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "organization",
            "baseName": "organization",
            "type": "Organization"
        },
        {
            "name": "datasets",
            "baseName": "datasets",
            "type": "Array<OrganizationInfoResponseAllOfDatasets>"
        },
        {
            "name": "defaultComputeLimits",
            "baseName": "defaultComputeLimits",
            "type": "OrganizationInfoResponseAllOfDefaultComputeLimits"
        },
        {
            "name": "experiments",
            "baseName": "experiments",
            "type": "Array<ProjectInfoResponseAllOfExperiments>"
        },
        {
            "name": "readme",
            "baseName": "readme",
            "type": "ProjectInfoResponseAllOfReadme"
        }    ];

    static getAttributeTypeMap() {
        return OrganizationInfoResponseAllOf.attributeTypeMap;
    }
}

