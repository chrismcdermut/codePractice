/* eslint no-bitwise: ["error", { "allow": ["^="] }] */

function deliveryIDTracker(deliveryIds) {
  const idsToOccurrences = new Map();

  deliveryIds.forEach((deliveryId) => {
    if (idsToOccurrences.has(deliveryId)) {
      // make new count and then add, so it's less mutation
      const newCount = idsToOccurrences.get(deliveryId) + 1;
      idsToOccurrences.set(deliveryId, newCount);
    } else { // if ID is not there
      idsToOccurrences.set(deliveryId, 1);
    }
  });

  return [...idsToOccurrences.keys()].find((id) => idsToOccurrences.get(id) === 1);
}

function bitWiseDeliveryIDTracker(deliveryIds) {
  let uniqueDeliveryId = 0;

  deliveryIds.forEach((deliveryId) => {
    console.log('deliveryIds');
    console.log(deliveryIds);
    console.log('deliveryId');
    console.log(deliveryId);
    console.log('uniqueDeliveryId');
    console.log(uniqueDeliveryId);
    uniqueDeliveryId ^= deliveryId;
  });

  return uniqueDeliveryId;
}

module.exports = { deliveryIDTracker, bitWiseDeliveryIDTracker };
