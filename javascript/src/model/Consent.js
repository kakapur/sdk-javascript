/**
 * Trulioo SDK
 * Trulioo SDK 
 *
 * The version of the OpenAPI document: 0.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Consent model module.
 * @module model/Consent
 * @version 0.2.0
 */
class Consent {
    /**
     * Constructs a new <code>Consent</code>.
     * @alias module:model/Consent
     */
    constructor() { 
        
        Consent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Consent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Consent} obj Optional instance to populate.
     * @return {module:model/Consent} The populated <code>Consent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Consent();

            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('Text')) {
                obj['Text'] = ApiClient.convertToType(data['Text'], 'String');
            }
            if (data.hasOwnProperty('Url')) {
                obj['Url'] = ApiClient.convertToType(data['Url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Name of the datasource requiring consent
 * @member {String} Name
 */
Consent.prototype['Name'] = undefined;

/**
 * Text outlining how the user is consenting for their data to be used
 * @member {String} Text
 */
Consent.prototype['Text'] = undefined;

/**
 * URL where the user can find more information about how the datasource will use their data
 * @member {String} Url
 */
Consent.prototype['Url'] = undefined;






export default Consent;

