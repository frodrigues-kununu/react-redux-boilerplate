// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import 'cross-fetch/polyfill';
// import fetchMock from 'fetch-mock/es5/client';

import * as actions from './appActions';

//Initialize stuff needed to test async action creators and middleware
// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);

//mock Date.now() before each test
// beforeEach(() => {
//   const now = Date.now();
//   Date.now = jest.fn(() => now);
// });

test('should create an action to set test item', () => {
  const selectedItem = 5;
  const expectedAction = {
    type: actions.TEST_ACTION,
    selectedItem,
  };

  expect(actions.setTestAction(selectedItem)).toEqual(expectedAction);
});


// /*****************************
// * Cscan / viewport interaction actions
// */

// test('should create an action to set a selected feature id', () => {
//   const selectedFeatureId = 5;
//   const expectedAction = {
//     type: actions.CSCAN_FEATURE_CLICK,
//     selectedFeatureId,
//   };

//   expect(actions.cscanFeatureClick(selectedFeatureId)).toEqual(expectedAction);
// });

// test('should create an action to move a cscan', () => {
//   const center = "";
//   const viewport = "";
//   const offset = "";
//   const eventOrigin = "";
//   const expectedAction = {
//     type: actions.CSCAN_MOVE,
//     center,
//     viewport,
//     offset,
//     eventOrigin
//   };
//   expect(actions.moveCscans(center, viewport, offset, eventOrigin)).toEqual(expectedAction);
// });

// test('should create an action to move the whitebox', () => {
//   const center = "";
//   const viewport = "";
//   const offset = "";
//   const expectedAction = {
//     type: actions.WHITEBOX_MOVE,
//     center,
//     viewport,
//     offset
//   };
//   expect(actions.moveWhiteBox(center, viewport, offset)).toEqual(expectedAction);
// });

// test('should create an action to change the cscans view mode', () => {
//   const view = "2x2";
//   const selected = "wall-thickness";
//   const changeViewObj = { view, selected };
//   const expectedAction = {
//     type: actions.CSCAN_VIEW_MODE_CHANGE,
//     view,
//     selected
//   };

//   expect(actions.changeView(changeViewObj)).toEqual(expectedAction);
// });

// test('should create an action to toggle the cscans expanded mode', () => {
//   const expectedAction = {
//     type: actions.CSCAN_TOGGLE_EXPAND,
//   };

//   expect(actions.toggleExpandSelected()).toEqual(expectedAction);
// });

// test('should create an action to show features in cscan', () => {
//   const showFeatures = true;
//   const expectedAction = {
//     type: actions.CSCAN_SHOW_FEATURES,
//     showFeatures
//   };

//   expect(actions.showFeaturesInCscan()).toEqual(expectedAction);
// });

// test('should create an action notify global state that river bottom data was requested', () => {
//   const expectedAction = {
//     type: actions.REQUEST_RIVER_BOTTOM_DATA,
//   };

//   expect(actions.requestRiverBottomData()).toEqual(expectedAction);
// });

// test('should create an action notify global state that river bottom data was received', () => {
//   const data = {};
//   const expectedAction = {
//     type: actions.RECEIVE_RIVER_BOTTOM_DATA,
//     data,
//     receivedAt: Date.now()
//   };

//   expect(actions.receiveRiverBottomData(data)).toEqual(expectedAction);
// });

// test('should create an action notify global state that river bottom data was rejected', () => {
//   const data = {};
//   const expectedAction = {
//     type: actions.REJECT_RIVER_BOTTOM_DATA,
//     data,
//     receivedAt: Date.now()
//   };

//   expect(actions.rejectRiverBottomData(data)).toEqual(expectedAction);
// });

// describe('river bottom async actions', () => {

//   afterEach(() => {
//     fetchMock.reset();
//     fetchMock.restore();
//   });


//   let responseMockSuccess = {
//     data: [
//       { "river-bottom": new Array(1000).fill(5) }
//     ]
//   };


//   let responseMockError = new Response(null, {});

//   let fetchParams = {
//     angle: {
//       start: 0,
//       end: 360
//     },
//     range: {
//       start: 0,
//       end: 1000
//     }
//   };


//   test('creates RECEIVE_RIVER_BOTTOM_DATA when fetching river bottom data has been done', () => {

//     fetchMock.postOnce('http://tubeviewer/riverbottom', {
//       body: responseMockSuccess,
//       headers: { 'content-type': 'application/json' }
//     });

//     const expectedActions = [
//       { type: actions.REQUEST_RIVER_BOTTOM_DATA },
//       { type: actions.RECEIVE_RIVER_BOTTOM_DATA, data: responseMockSuccess.data, receivedAt: Date.now() }
//     ];

//     //entities state mock
//     const store = mockStore({ data: {} });

//     return store.dispatch(actions.fetchRiverBottomData(fetchParams)).then(() => {
//       // return of async actions
//       expect(store.getActions()).toEqual(expectedActions);
//     });
//   });

//   test('creates RECEIVE_RIVER_BOTTOM_DATA when fetching river bottom data has been done and starting angle > 360', () => {

//     let fetchParamsAngleTest = fetchParams;
//     fetchParamsAngleTest.angle.start = 400;

//     fetchMock.postOnce('http://tubeviewer/riverbottom', {
//       body: responseMockSuccess,
//       headers: { 'content-type': 'application/json' }
//     });

//     const expectedActions = [
//       { type: actions.REQUEST_RIVER_BOTTOM_DATA },
//       { type: actions.RECEIVE_RIVER_BOTTOM_DATA, data: responseMockSuccess.data, receivedAt: Date.now() }
//     ];

//     //entities state mock
//     const store = mockStore({ data: {} });

//     return store.dispatch(actions.fetchRiverBottomData(fetchParamsAngleTest)).then(() => {
//       // return of async actions
//       expect(store.getActions()).toEqual(expectedActions);
//     });
//   });


//   test('creates REJECT_RIVER_BOTTOM_DATA when fetching river bottom data fails', () => {

//     fetchMock.postOnce('http://tubeviewer/riverbottom',
//       {
//         body: responseMockError,
//         headers: { 'content-type': 'application/json' },
//         status: 500
//       }
//     );

//     const expectedActions = [
//       { type: actions.REQUEST_RIVER_BOTTOM_DATA },
//       { type: actions.REJECT_RIVER_BOTTOM_DATA, data: new Error(responseMockError), receivedAt: Date.now() }
//     ];

//     //entities state mock
//     const store = mockStore({ data: {} });

//     return store.dispatch(actions.fetchRiverBottomData(fetchParams)).catch(() => {
//       // return of async actions
//       expect(store.getActions()).toEqual(expectedActions);
//     });
//   });
// });


// test('should create an action notify global state that color scales data was requested', () => {
//   const expectedAction = {
//     type: actions.REQUEST_AVERAGE_TABLE_DATA,
//   };

//   expect(actions.requestAverageTableData()).toEqual(expectedAction);
// });

// test('should create an action notify global state that color scales data was received', () => {
//   const data = {};
//   const expectedAction = {
//     type: actions.RECEIVE_AVERAGE_TABLE_DATA,
//     data,
//     receivedAt: Date.now()
//   };

//   expect(actions.receiveAverageTableData(data)).toEqual(expectedAction);
// });

// test('should create an action notify global state that color scales data was not received', () => {
//   const data = {};
//   const expectedAction = {
//     type: actions.REJECT_AVERAGE_TABLE_DATA,
//     data,
//     receivedAt: Date.now()
//   };

//   expect(actions.rejectAverageTableData(data)).toEqual(expectedAction);
// });

// describe('average table async actions', () => {

//   afterEach(() => {
//     fetchMock.reset();
//     fetchMock.restore();
//   });


//   let responseMockSuccess = {
//     data:
//       {
//         "construction_year": "1984",
//         "diameter": 15.4154005050659,
//         "inspection-velocity": 10.8695650100708,
//         "length": 10,
//         "measured_wt": 6.96768093109131,
//         "nominal_wt": 7.00700044631958,
//         "ovality": 0.300000011920929,
//         "reliable_measurements": null,
//         "succesful_measurements": 0.989615321159363
//       }
//   };


//   let responseMockError = new Response(null, {});

//   let fetchParams = {
//     angle: {
//       start: 0,
//       end: 360
//     },
//     range: {
//       start: 0,
//       end: 1000
//     }
//   };


//   test('creates RECEIVE_AVERAGE_TABLE_DATA when fetching average table has been done', () => {

//     fetchMock.postOnce('http://tubeviewer/table/average', {
//       body: responseMockSuccess,
//       headers: { 'content-type': 'application/json' }
//     });

//     const expectedActions = [
//       { type: actions.REQUEST_AVERAGE_TABLE_DATA },
//       { type: actions.RECEIVE_AVERAGE_TABLE_DATA, data: responseMockSuccess.data, receivedAt: Date.now() }
//     ];

//     //entities state mock
//     const store = mockStore({ data: {} });

//     return store.dispatch(actions.fetchAverageTableData(fetchParams)).then(() => {
//       // return of async actions
//       expect(store.getActions()).toEqual(expectedActions);
//     });
//   });

//   test('creates RECEIVE_AVERAGE_TABLE_DATA when fetching average table data has been done and starting angle > 360', () => {

//     let fetchParamsAngleTest = fetchParams;
//     fetchParamsAngleTest.angle.start = 400;

//     fetchMock.postOnce('http://tubeviewer/table/average', {
//       body: responseMockSuccess,
//       headers: { 'content-type': 'application/json' }
//     });

//     const expectedActions = [
//       { type: actions.REQUEST_AVERAGE_TABLE_DATA },
//       { type: actions.RECEIVE_AVERAGE_TABLE_DATA, data: responseMockSuccess.data, receivedAt: Date.now() }
//     ];

//     //entities state mock
//     const store = mockStore({ data: {} });

//     return store.dispatch(actions.fetchAverageTableData(fetchParamsAngleTest)).then(() => {
//       // return of async actions
//       expect(store.getActions()).toEqual(expectedActions);
//     });
//   });


//   test('creates REJECT_AVERAGE_TABLE_DATA when fetching average table data fails', () => {

//     fetchMock.postOnce('http://tubeviewer/table/average',
//       {
//         body: responseMockError,
//         headers: { 'content-type': 'application/json' },
//         status: 500
//       }
//     );

//     const expectedActions = [
//       { type: actions.REQUEST_AVERAGE_TABLE_DATA },
//       { type: actions.REJECT_AVERAGE_TABLE_DATA, data: new Error(responseMockError), receivedAt: Date.now() }
//     ];

//     //entities state mock
//     const store = mockStore({ data: {} });

//     return store.dispatch(actions.fetchAverageTableData(fetchParams)).catch(() => {
//       // return of async actions
//       expect(store.getActions()).toEqual(expectedActions);
//     });
//   });
// });


// test('should create an action notify global state that color scales data was requested', () => {
//   const expectedAction = {
//     type: actions.REQUEST_COLOR_SCALES_DATA,
//   };

//   expect(actions.requestColorScalesData()).toEqual(expectedAction);
// });

// test('should create an action notify global state that color scales data was received', () => {
//   const data = {};
//   const expectedAction = {
//     type: actions.RECEIVE_COLOR_SCALES_DATA,
//     data,
//     receivedAt: Date.now()
//   };

//   expect(actions.receiveColorScalesData(data)).toEqual(expectedAction);
// });

// test('should create an action notify global state that color scales data was rejected', () => {
//   const data = {};
//   const expectedAction = {
//     type: actions.REJECT_COLOR_SCALES_DATA,
//     data,
//     receivedAt: Date.now()
//   };

//   expect(actions.rejectColorScalesData(data)).toEqual(expectedAction);
// });

// test('should create an action notify global state to update cscan image detail level ', () => {
//   const detailLevel = {};
//   const expectedAction = {
//     type: actions.UPDATE_DETAIL_LEVEL,
//     detailLevel,
//   };

//   expect(actions.updateDetailLevel(detailLevel)).toEqual(expectedAction);
// });

// describe('average table async actions', () => {

//   afterEach(() => {
//     fetchMock.reset();
//     fetchMock.restore();
//   });


//   let colorsContentMock = {
//     BottomColor: { blue: 255, green: 255, red: 255 },
//     bottomValue: 0,
//     colors: [new Array(16).fill({ color: { blue: 138, green: 255, red: 255 }, value: 100 })],
//     endDistance: 29,
//     startDistance: 0,
//     topColor: { blue: 138, green: 255, red: 255 },
//     topValue: 100,
//     usesGradient: true,
//   };

//   let responseMockSuccess = {
//     data:
//       {
//         innerWallAmplitude: {
//           single: new Array(10).fill(colorsContentMock)
//         },
//         outerWallAmplitude: {
//           single: new Array(10).fill(colorsContentMock)
//         },
//         radius: {
//           single: new Array(10).fill(colorsContentMock)
//         },
//         wallThickness: {
//           single: new Array(10).fill(colorsContentMock),
//           general: new Array(10).fill(colorsContentMock),
//         }
//       }
//   };

//   let responseMockError = new Response(null, {});


//   test('creates RECEIVE_COLOR_SCALES_DATA when fetching color scales has been done', () => {

//     fetchMock.getOnce('http://tubeviewer/color-palette', {
//       body: responseMockSuccess,
//       headers: { 'content-type': 'application/json' }
//     });

//     const expectedActions = [
//       { type: actions.REQUEST_COLOR_SCALES_DATA },
//       { type: actions.RECEIVE_COLOR_SCALES_DATA, data: responseMockSuccess.data, receivedAt: Date.now() }
//     ];

//     //entities state mock
//     const store = mockStore({ data: {} });

//     return store.dispatch(actions.fetchColorScalesData()).then(() => {
//       // return of async actions
//       expect(store.getActions()).toEqual(expectedActions);
//     });
//   });

//   test('creates REJECT_COLOR_SCALES_DATA when fetching color scales has been done but res.data is undefined', () => {


//     let responseMockSuccessNoData =  responseMockSuccess;
//     responseMockSuccessNoData.data = undefined;
//     responseMockSuccessNoData.error = {error:'error'};

//     fetchMock.getOnce('http://tubeviewer/color-palette', {
//       body: responseMockSuccessNoData,
//       headers: { 'content-type': 'application/json' }
//     });

//     const expectedActions = [
//       { type: actions.REQUEST_COLOR_SCALES_DATA },
//       { type: actions.REJECT_COLOR_SCALES_DATA, data: responseMockSuccessNoData.data, receivedAt: Date.now() }
//     ];

//     //entities state mock
//     const store = mockStore({ data: {} });

//     return store.dispatch(actions.fetchColorScalesData()).catch(() => {
//       // return of async actions
//       expect(store.getActions()).toEqual(expectedActions);
//     });
//   });

//   test('creates REJECT_COLOR_SCALES_DATA when fetching color scales data fails', () => {

//     fetchMock.getOnce('http://tubeviewer/color-palette',
//       {
//         body: responseMockError,
//         headers: { 'content-type': 'application/json' },
//         status: 500
//       }
//     );

//     const expectedActions = [
//       { type: actions.REQUEST_COLOR_SCALES_DATA },
//       { type: actions.REJECT_COLOR_SCALES_DATA, data: new Error(responseMockError), receivedAt: Date.now() }
//     ];

//     //entities state mock
//     const store = mockStore({ data: {} });

//     return store.dispatch(actions.fetchColorScalesData()).catch(() => {
//       // return of async actions
//       expect(store.getActions()).toEqual(expectedActions);
//     });
//   });
// });