/**
 * Trulioo_identity_verification
 * To run tests transactions on our trial endpoint in postman: [![Run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com/run-collection/a58f438d101278e2bc62) 
 *
 * The version of the OpenAPI document: 1.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Communication model module.
 * @module model/Communication
 * @version 1.1.0
 */
class Communication {
    /**
     * Constructs a new <code>Communication</code>.
     * @alias module:model/Communication
     */
    constructor() { 
        
        Communication.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Communication</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Communication} obj Optional instance to populate.
     * @return {module:model/Communication} The populated <code>Communication</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Communication();

            if (data.hasOwnProperty('MobileNumber')) {
                obj['MobileNumber'] = ApiClient.convertToType(data['MobileNumber'], 'String');
            }
            if (data.hasOwnProperty('Telephone')) {
                obj['Telephone'] = ApiClient.convertToType(data['Telephone'], 'String');
            }
            if (data.hasOwnProperty('Telephone2')) {
                obj['Telephone2'] = ApiClient.convertToType(data['Telephone2'], 'String');
            }
            if (data.hasOwnProperty('EmailAddress')) {
                obj['EmailAddress'] = ApiClient.convertToType(data['EmailAddress'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Mobile phone number of the individual to be verified.
 * @member {String} MobileNumber
 */
Communication.prototype['MobileNumber'] = undefined;

/**
 * Telephone number of the individual to be verified.
 * @member {String} Telephone
 */
Communication.prototype['Telephone'] = undefined;

/**
 * Additional Phone/Mobile Number of the individual to be verified.
 * @member {String} Telephone2
 */
Communication.prototype['Telephone2'] = undefined;

/**
 * Email address of the individual to be verified.
 * @member {String} EmailAddress
 */
Communication.prototype['EmailAddress'] = undefined;






export default Communication;

