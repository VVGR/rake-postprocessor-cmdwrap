'use strict';
module.exports = function(content, file, conf){
    if ( file.isMod ) {
        content = content.replace(/^(\s*define\(.*?,)(.*?)(function\([\w\W]+)$/img, "$1 " + outputDep( file.requires ) + ", $3" )
    }
    return content;
};

function outputDep( dep ){
    if ( !dep.length ) {
        return '[]';
    }
    dep.forEach(function( item, idx ){
        dep[ idx ] = item;
    });
    return '[\'' + dep.join('\',\'') + '\']';
}
