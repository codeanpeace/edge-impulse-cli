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

import { EvaluateResultValue } from './evaluateResultValue';
import { KerasModelTypeEnum } from './kerasModelTypeEnum';

export class ModelVariantStats {
    'modelType': KerasModelTypeEnum;
    /**
    * The learning block this model variant is from
    */
    'learnBlockId': number;
    /**
    * A map from actual labels to predicted labels, where actual labels are listed in `trainingLabels` and possible predicted labels are listed in `classificationLabels`.
    */
    'confusionMatrix': { [key: string]: { [key: string]: EvaluateResultValue; }; };
    /**
    * The labels present in the model\'s training data. These are all present in the first dimension of the confusion matrix.
    */
    'trainingLabels': Array<string>;
    /**
    * The possible labels resulting from classification. These may be present in the second dimension of the confusion matrix.
    */
    'classificationLabels': Array<string>;
    /**
    * The total number of windows that were evaluated
    */
    'totalWindowCount'?: number;
    'totalCorrectWindowCount'?: EvaluateResultValue;
    'accuracy': EvaluateResultValue;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "modelType",
            "baseName": "modelType",
            "type": "KerasModelTypeEnum"
        },
        {
            "name": "learnBlockId",
            "baseName": "learnBlockId",
            "type": "number"
        },
        {
            "name": "confusionMatrix",
            "baseName": "confusionMatrix",
            "type": "{ [key: string]: { [key: string]: EvaluateResultValue; }; }"
        },
        {
            "name": "trainingLabels",
            "baseName": "trainingLabels",
            "type": "Array<string>"
        },
        {
            "name": "classificationLabels",
            "baseName": "classificationLabels",
            "type": "Array<string>"
        },
        {
            "name": "totalWindowCount",
            "baseName": "totalWindowCount",
            "type": "number"
        },
        {
            "name": "totalCorrectWindowCount",
            "baseName": "totalCorrectWindowCount",
            "type": "EvaluateResultValue"
        },
        {
            "name": "accuracy",
            "baseName": "accuracy",
            "type": "EvaluateResultValue"
        }    ];

    static getAttributeTypeMap() {
        return ModelVariantStats.attributeTypeMap;
    }
}

