printjson("****************************************************************");
printjson("1) Finds 10 documents with air temperature values between 4 and 5 exclusive, projecting _id, and airTemperature.values sorted by air temperature ascending");
printjson(db.data.find({ "airTemperature.value": { $gt: 4, $lt: 5 } }, { "airTemperature.value": 1 }).limit(10).sort({ "airTemperature.value": 1 }));

printjson("****************************************************************");
printjson("2) Finds 15 documents whose dew point is 0 or is of type SAO, projecting _id, dewPoint and type, in ascending order by dew point");
printjson(db.data.find({ $or: [{ "dewPoint.value": 0 }, { "type": "SAO" }] }, { "dewPoint.value": 1, "type": 1 }).limit(15).sort({ "dewPoint.value": 1 }));

printjson("****************************************************************");
printjson("3) Find 5 documents have an sea surface temperature value between 5 and 10 exclusive, projecting _id and seaSurfaceTemperature, sorting by the sea surface temperature value in ascending order:");
printjson(db.data.find({ "seaSurfaceTemperature.value": { $gt: 5, $lt: 10 } }, { "seaSurfaceTemperature.value": 1 }).limit(5).sort({ "seaSurfaceTemperature.value": 1 }));

printjson("****************************************************************");
printjson("4) Find 8 documents with visibility distance values of 200, sorting by visibility distance value in ascending order, projecting  _id and visibility.distance.value");
printjson(db.data.find({ "visibility.distance.value": 200 }, { "visibility.distance.value": 1 }).limit(8).sort({ "visibility.distance.value": 1 }));

printjson("****************************************************************");
printjson("5) Finds 10 documents whose base cloud height is 99999 in their sky coverage, projecting  _id and skyCoverLayer");
printjson(db.data.find({ skyCoverLayer: { $elemMatch: { "baseHeight.value": 99999 } } }, { "skyCoverLayer": 1 }).limit(10));

printjson("****************************************************************");
printjson("6) Finds 3 documents whose section is AY1, projecting  _id and sections");
printjson(db.data.find({ sections: { $elemMatch: { $eq: "AY1" } } }, { "sections": 1 }).limit(3));

printjson("****************************************************************");
printjson("7) Finds a document whose section is AG1, projecting  _id and sections");
printjson(db.data.find({ sections: { $elemMatch: { $eq: "AG1" } } }, { "sections": 1 }).limit(1));

printjson("****************************************************************");
printjson("8) Finds 13 documents whose pressure value is less than 3000 and is of type FM-13, projecting _id, type and pressure.value, in ascending order by pressure value");
printjson(db.data.find({ $and: [{ "pressure.value": { $lt: 3000 } }, { "type": "FM-13" }] }, { "type": 1, "pressure.value": 1 }).limit(13).sort({ "pressure.value": 1 }));

printjson("****************************************************************");
printjson("9) Finds 7 documents whose quality control process is V020 and is of type FM-13, projecting _id, qualityControlProcess and type");
printjson(db.data.find({ $and: [{ "qualityControlProcess": "V020" }, { "type": "FM-13" }] }, { "qualityControlProcess": 1, "type": 1 }).limit(7));

printjson("****************************************************************");
printjson("10) Finds all documents whose call letter is TFBY or GDCL, projecting _id, callLetters");
printjson(db.data.find({ $or: [{ "callLetters": "TFBY" }, { "callLetters": "GCDL" }] }, { "callLetters": 1 }));