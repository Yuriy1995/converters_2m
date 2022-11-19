// Название: Gledopto Tuya Zigbee 7W E26/E27 Bulb CCT (pro)
// modelID: GL-B-003P
// manufacturerName: Gledopto

const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const extend = require('zigbee-herdsman-converters/lib/extend');
const e = exposes.presets;
const ea = exposes.access;

const definition = {
    fingerprint: [{modelID: 'GL-B-003P', manufacturerName: 'GLEDOPTO'}],
        model: 'GL-B-003P', 
        vendor: 'Gledopto', 
        description: 'Zigbee 7W E26/E27 Bulb CCT (pro)', 
        extend: extend.light_onoff_brightness_colortemp({colorTempRange: [155, 495]}),
};

module.exports = definition;
