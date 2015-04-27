'use strict';
module.exports = function(content, file, conf){
    if ( file.isMod ) {
        if(!/^\s*define\s*\(/.test(content)){
            content = 'define(\'' + file.getId() + '\', '+ outputDep( file.requires ) +',function(require, exports, module){ ' + content + ' \r\n});';
        }
    }
    return content;
};

function outputDep( dep ){
    if ( !dep.length ) {
        return '[]';
    }
    dep.forEach(function( item, idx ){
        console.log( item.substring( item.length - 5 ) );
        var rExt = item.substring( item.length -5 );
        if ( rExt == '.less' || rExt == '.tmpl' ) {
            dep[ idx ] = item + '#';
        }
    });


    return '[\'' + dep.join('\',\'') + '\']';
}