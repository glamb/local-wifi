var airport = require( 'airport-wrapper' );

airport.scan(function( err, data ){
  if (err) {
    console.info(err);
    return;
  }
  if (!data) {
    console.info(new Error('no data'));
    return;
  }
  var wifi = [];
  data.forEach(function(item) {
    var netData = {mac: item.bssid, signal_strength: item.rssi};
    wifi.push(netData);
  });
  console.log(JSON.stringify(wifi));
});
