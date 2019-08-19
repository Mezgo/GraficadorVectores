function module(v){
    return Math.sqrt((v.x*v.x)+(v.y*v.y)+(v.z*v.z));
}

function unitario(v){
    var m= module(v);

    return new THREE.Vector3((v.x/m),(v.y/m),(v.z/m));
}